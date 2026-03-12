import { NextResponse } from 'next/server';
import { investorsData } from '@/lib/data/Investors/investors';

export async function POST(req: Request) {
    try {
        const { startupDetails } = await req.json();
        const apiKey = process.env.NVIDIA_API_KEY || process.env.GEMINI_API_KEY;

        if (!apiKey) {
            return NextResponse.json({
                error: "AI is currently offline. Missing API Key.",
                matches: []
            }, { status: 503 });
        }

        // Format the investors data concisely to fit in the context window
        // Including Name, Type, Stages, Industries.
        const investorsBrief = investorsData.map(i => {
            return `- ${i.name} | Type: ${i.type} | Stages: ${i.stages.join(', ')} | Industries: ${i.industries.join(', ')}`;
        }).join('\n');

        const systemPrompt = {
            role: "system",
            content: `You are an expert AI Matchmaker for startups and investors in India. 
You will be provided with a startup's details. Your job is to analyze the startup and select the TOP 5 most relevant investors from the provided list based on industry, stage, and focus.

Here is the list of available investors:
${investorsBrief}

You MUST return the result EXACTLY as a JSON array of objects, with no other text, markdown formatting, or explanation outside the JSON.
Each object must have two keys:
- "name": The exact name of the investor as it appears in the list.
- "reason": A short, 1-sentence explanation (max 20 words) of why this investor is a good match based on the startup's details and the investor's focus. 

Example output:
[
  { "name": "100X.VC", "reason": "They actively invest in pre-seed SaaS startups and offer strategic coaching." },
  { "name": "3one4 cap", "reason": "Their focus on Early stage Fintech aligns perfectly with your current round." }
]`
        };

        const userPrompt = {
            role: "user",
            content: `Startup Details:
${startupDetails}`
        };

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 15000);

        try {
            const fetchResponse = await fetch("https://integrate.api.nvidia.com/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${apiKey}`
                },
                body: JSON.stringify({
                    model: "meta/llama-3.1-8b-instruct",
                    messages: [systemPrompt, userPrompt],
                    max_tokens: 800,
                    temperature: 0.1,
                    top_p: 0.9
                }),
                signal: controller.signal
            });

            clearTimeout(timeoutId);

            if (!fetchResponse.ok) {
                const text = await fetchResponse.text();
                console.error("Nvidia API Error:", text);
                return NextResponse.json({ error: "Failed to connect to AI.", matches: [] }, { status: 500 });
            }

            const data = await fetchResponse.json();
            let replyText = data.choices[0].message.content.trim();

            // Clean up the reply and parse JSON
            let matches = [];
            try {
                replyText = replyText.replace(/```json/g, '').replace(/```/g, '').trim();
                const startIndex = replyText.indexOf('[');
                const endIndex = replyText.lastIndexOf(']');
                if (startIndex !== -1 && endIndex !== -1) {
                    replyText = replyText.substring(startIndex, endIndex + 1);
                }
                matches = JSON.parse(replyText);
            } catch (e) {
                console.error("Failed to parse JSON from AI response:", replyText);
            }

            return NextResponse.json({ matches });

        } catch (e: any) {
            clearTimeout(timeoutId);
            if (e.name === 'AbortError') return NextResponse.json({ error: "AI request timed out.", matches: [] }, { status: 504 });
            throw e;
        }
    } catch (error: any) {
        console.error('Fatal API error:', error);
        return NextResponse.json({ error: "Something went wrong.", matches: [] }, { status: 500 });
    }
}
