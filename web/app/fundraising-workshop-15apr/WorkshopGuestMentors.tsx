'use client';

import Image from 'next/image';

const guestMentors = [
    {
        name: 'Ashish Kulkarni',
        title: "Founder, Founders' Psyche | Former Research Assistant, INSEAD",
        description: "An MBA graduate from IE Business School, Spain, Ashish brings deep expertise in fundraising and entrepreneurship. As an ex-cofounder of Fundenable and a former VC scout, he has operated on both sides of the fundraising ecosystem.",
        achievements: ['MBA from IE Business School', 'Former VC Scout', 'Ex-cofounder, Fundenable'],
        image: '/guest-mentors/ashish.png',
        linkedin: 'https://www.linkedin.com/in/ashishkul/'
    },
    {
        name: 'Poornima Goel',
        title: 'Corporate Lawyer | Specializing in M&A & Private Equity',
        description: "Poornima specializes in General Corporate, M&A, and Private Equity, with a focus on helping businesses navigate legal frameworks and structuring agreements, ensuring regulatory readiness.",
        achievements: ['Deal Structuring Specialist', 'Expert in Investor Agreements', 'Compliance & Regulatory Guide'],
        image: '/guest-mentors/poornima.png',
        linkedin: 'https://www.linkedin.com/in/poornima-goel-720947245/'
    },
    {
        name: 'Gaurav Mishra',
        title: 'FRM Professional | MDI-Gurgaon Alumnus | Finance Expert',
        description: "A certified FRM professional and MBA graduate from MDI-Gurgaon, Gaurav brings strong expertise in startup valuation and financial forecasting. His experience at Ernst & Young adds significant corporate depth.",
        achievements: ['Certified FRM Professional', 'Ex-Ernst & Young', 'Expert in Startup Valuation'],
        image: '/guest-mentors/gaurav.png',
        linkedin: 'https://www.linkedin.com/in/gauravkumar100/'
    }
];

export function WorkshopGuestMentors() {
    return (
        <section className="py-20 md:py-24 relative overflow-hidden" id="guest-mentors">
            {/* Ambient Background Elements */}
            <div className="absolute top-1/4 right-0 w-64 h-64 bg-[#8b5cf6] rounded-full mix-blend-screen filter blur-[100px] opacity-10 pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-[#d946ef] rounded-full mix-blend-screen filter blur-[100px] opacity-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16 md:mb-20">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">Guest Mentors</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#8b5cf6] to-[#d946ef] mx-auto rounded-full mb-8" />
                    <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
                        In addition to our lead mentor, get insights from industry specialists across legal, financial, and fundraising strategy.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                    {guestMentors.map((mentor, i) => (
                        <div 
                            key={i} 
                            className="group bg-[rgba(15,23,42,0.6)] backdrop-blur-[16px] border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col hover:border-[#8b5cf6]/50 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden h-full shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
                        >
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-[#8b5cf6] to-[#d946ef] rounded-full mix-blend-screen filter blur-[40px] opacity-0 group-hover:opacity-20 transition-opacity" />
                            
                            <div className="mb-6 relative h-48 md:h-56 w-full rounded-xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 border border-white/10 group-hover:border-[#8b5cf6]/40">
                                <Image 
                                    src={mentor.image} 
                                    alt={mentor.name} 
                                    fill 
                                    className="object-cover group-hover:scale-110 transition-transform duration-700" 
                                />
                            </div>

                            <div className="flex-grow">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#8b5cf6] group-hover:to-[#d946ef] transition-all leading-tight">
                                        {mentor.name}
                                    </h3>
                                    <a 
                                        href={mentor.linkedin} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="w-8 h-8 rounded-lg bg-[#0077b5]/10 flex items-center justify-center border border-[#0077b5]/30 hover:bg-[#0077b5] text-[#0077b5] hover:text-white transition-all shadow-[0_0_10px_rgba(0,119,181,0.2)]"
                                        aria-label={`${mentor.name}'s LinkedIn Profile`}
                                    >
                                        <i className="fa-brands fa-linkedin-in text-sm" />
                                    </a>
                                </div>
                                <p className="text-[#8b5cf6] text-xs md:text-sm font-bold mb-4 tracking-wide leading-snug">
                                    {mentor.title}
                                </p>
                                <p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed mb-6">
                                    {mentor.description}
                                </p>
                            </div>

                            <div className="space-y-2.5 mt-auto">
                                {mentor.achievements.map((item, j) => (
                                    <div key={j} className="flex items-center gap-3 text-[10px] md:text-xs text-slate-300 font-medium bg-white/5 p-2 rounded-lg border border-white/5 group-hover:border-white/10 transition-colors">
                                        <i className="fa-solid fa-circle-check text-green-500 text-[10px]" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
