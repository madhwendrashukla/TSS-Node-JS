import React from 'react';

export function WorkshopPreview() {

    return (
        <a 
            href="/AI-workshop-15may" 
            className="block w-full mx-auto rounded-[32px] md:rounded-[48px] overflow-hidden border border-white/5 shadow-[0_0_80px_rgba(139,92,246,0.15)] hover:shadow-[0_0_120px_rgba(168,85,247,0.25)] bg-[#0B0F19] transition-all duration-700 hover:scale-[1.02] cursor-pointer group mt-10 relative isolate"
        >
            {/* Background Grid */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#13112E] to-transparent opacity-80 pointer-events-none -z-10"></div>
            
            <div className="w-full px-4 md:px-12 py-12 md:py-16 flex flex-col justify-center relative z-10">
                <div className="text-center mb-10 text-white">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-xs font-medium mb-6">
                        <span className="w-2 h-2 rounded-full bg-[#8b5cf6] animate-pulse"></span>
                        <span className="text-gray-300">Live Workshop • May 15–17, 2026</span>
                    </div>

                    <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-[-0.02em] leading-tight">
                        Build Your AI Startup <br className="hidden md:block"/>
                        <span className="text-[#A855F7] underline decoration-[#A855F7]/30 underline-offset-[12px] decoration-4">From Idea</span> to MVP.
                    </h3>
                    
                    <p className="text-gray-400 text-sm md:text-base lg:text-xl font-light max-w-2xl mx-auto mb-12 leading-relaxed">
                        Validate your billion-dollar idea, build an AI-powered MVP with Claude, and create your launch film — in just 3 days. Live on Zoom with India&apos;s top mentors.
                    </p>

                    <div className="relative inline-block group/btn">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#8b5cf6] to-[#d946ef] rounded-lg blur opacity-40 group-hover/btn:opacity-75 transition duration-500"></div>
                        <div className="relative bg-gradient-to-r from-[#8b5cf6] to-[#d946ef] text-white px-8 py-4 rounded-lg font-bold flex items-center gap-2 shadow-[0_0_40px_rgba(139,92,246,0.4)]">
                            Secure Your Spot <i className="fa-solid fa-arrow-right text-sm"></i>
                        </div>
                    </div>
                    <p className="text-[10px] text-gray-500 mt-3 font-medium tracking-wide">Secure Checkout via Razorpay</p>
                </div>
            </div>
        </a>
    );
}
