'use client';

export function AIWorkshopHero() {
    return (
        <header className="relative pt-32 pb-16 md:pt-44 md:pb-24 lg:pt-56 lg:pb-32 overflow-hidden">
            <div className="absolute top-0 -left-4 w-64 h-64 md:w-96 md:h-96 rounded-full mix-blend-screen pointer-events-none animate-[blob_7s_infinite]" style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, rgba(139,92,246,0) 70%)' }} />
            <div className="absolute top-0 -right-4 w-64 h-64 md:w-96 md:h-96 rounded-full mix-blend-screen pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(217,70,239,0.3) 0%, rgba(217,70,239,0) 70%)' }} />
            <div className="absolute -bottom-8 left-20 w-64 h-64 md:w-96 md:h-96 rounded-full mix-blend-screen pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, rgba(139,92,246,0) 70%)' }} />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">

                {/* Single top badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm text-[#d946ef] backdrop-blur-md font-medium mb-6 md:mb-8">
                    <span className="relative flex h-2 w-2 shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8b5cf6] opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d946ef]" />
                    </span>
                    Live Workshop Series • May 15–17, 2026
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-4 md:mb-6 leading-[1.15] md:leading-[1.1]">
                    Build, Validate &amp; <br />
                    <span className="bg-gradient-to-r from-[#8b5cf6] to-[#d946ef] bg-clip-text text-transparent relative inline-block">
                        Launch
                        <svg className="absolute w-full h-2 md:h-3 -bottom-1 md:-bottom-2 left-0 text-[#8b5cf6] opacity-70" viewBox="0 0 100 10" preserveAspectRatio="none">
                            <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                        </svg>
                    </span>{' '}Your Startup in 3 Days
                </h1>

                <p className="mt-6 md:mt-8 max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl text-slate-400 mb-10 md:mb-14 leading-relaxed font-light px-2">
                    From idea to AI-powered MVP — live on Zoom with <span className="text-white font-medium">India&apos;s top mentors.</span>
                </p>

                {/* Stats */}
                <div className="flex items-center justify-center gap-8 md:gap-14 mb-10 md:mb-14">
                    {[
                        { num: '3', label: 'Days' },
                        { num: '5', label: 'Sessions' },
                        { num: '13', label: 'Hours Live' },
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#8b5cf6] to-[#d946ef] bg-clip-text text-transparent">{stat.num}</div>
                            <div className="text-xs md:text-sm text-slate-500 font-medium mt-1">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="relative group inline-block w-full sm:w-auto">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#8b5cf6] to-[#d946ef] rounded-xl blur-lg opacity-60 group-hover:opacity-100 transition duration-300" />
                    <a href="#pricing" className="relative w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 text-base md:text-lg font-bold rounded-xl text-white bg-gradient-to-r from-[#8b5cf6] to-[#d946ef] flex items-center justify-center transform group-hover:-translate-y-1 transition-all duration-300">
                        Secure Your Seat
                        <i className="fa-solid fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

            </div>
        </header>
    );
}
