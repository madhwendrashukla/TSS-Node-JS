"use client";

import { useState } from 'react';

const ShayariBlock = () => (
    <div className="relative">
        <div className="absolute -top-12 -left-8 text-[120px] font-serif text-white/5 pointer-events-none leading-none">
            “
        </div>
        <h3 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-[1.3] tracking-[-0.02em] relative z-10">
            “दिल में हो आग तो जलती रहनी चाहिए,<br className="hidden md:block" />
            तेरा हो चाहे मेरा,<br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,var(--color-accent-blue),var(--color-accent-violet))]">सपना ज़िंदा रहना चाहिए!</span>”
        </h3>
    </div>
);

const AchievementsList = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className="flex flex-col gap-6 w-full">
            {/* Block 1: The Bootcamp */}
            <div className="bg-bg-surface border border-white/5 rounded-2xl p-6 hover:border-accent-blue/50 transition duration-500 group flex flex-col shadow-lg shadow-black/20">
                <h3 className="text-base font-bold text-white mb-4 text-center tracking-tight">Mentor Panel: E-Cell IIT Madras</h3>
                <div className="aspect-video bg-bg-main rounded-xl mb-5 flex items-center justify-center border border-white/5 group-hover:border-accent-blue/50 transition duration-500 relative overflow-hidden">
                    <img src="/bootcamp.jpeg" alt="Mentor Panel at IIT Madras" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition duration-700" />
                </div>
                <p className="text-text-secondary text-xs mb-5 leading-relaxed font-light">
                    Invited as a Mentor at E-Cell IIT Madras. Mentoring early-stage founders, reviewing startup ideas, and providing practical guidance on execution and validation.
                </p>
                <a href="https://www.linkedin.com/posts/gauravbansal2_mentor-iit-startup-activity-7404790908174450688-P0G5" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-white/5 border border-white/10 text-text-primary text-sm font-semibold py-3 rounded-xl hover:bg-white hover:text-black transition duration-300 mt-auto">
                    <i className="fab fa-linkedin mr-2 text-accent-blue group-hover:text-black transition-colors"></i> Explore More
                </a>
            </div>

            {/* Block 2: IIM Rohtak */}
            <div className="bg-bg-surface border border-white/5 rounded-2xl p-6 hover:border-accent-violet/50 transition duration-500 group flex flex-col shadow-lg shadow-black/20">
                <h3 className="text-base font-bold text-white mb-4 text-center tracking-tight">IIM ROHTAK: JUDGE & MENTOR</h3>
                <div className="aspect-video bg-bg-main rounded-xl mb-5 flex items-center justify-center border border-white/5 group-hover:border-accent-violet/50 transition relative overflow-hidden">
                    <img src="/iimrohtak.jpg" alt="Judge and Mentor at IIM Rohtak" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition duration-700" />
                </div>
                <p className="text-text-secondary text-xs mb-5 leading-relaxed font-light">
                    Invited as a Judge and Mentor at IIM Rohtak. Evaluating innovative startups, providing critical feedback on pitches, and guiding aspiring founders on their journey from concept to scale.
                </p>
                <a href="https://www.linkedin.com/in/gauravbansal2/details/featured/" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-white/5 border border-white/10 text-text-primary text-sm font-semibold py-3 rounded-xl hover:bg-white hover:text-black transition duration-300 mt-auto">
                    <i className="fab fa-linkedin mr-2 text-accent-violet group-hover:text-black transition-colors"></i> View on LinkedIn
                </a>
            </div>

            {/* Block 3: YouTube Video */}
            <div className="bg-bg-surface border border-white/5 rounded-2xl p-6 hover:border-red-500/50 transition duration-500 group flex flex-col shadow-lg shadow-black/20">
                <h3 className="text-base font-bold text-white mb-4 text-center tracking-tight">SESSION AT DOON B. SCHOOL</h3>
                <div
                    onClick={() => setIsPlaying(true)}
                    className={`aspect-video bg-bg-main rounded-xl mb-5 flex items-center justify-center border border-white/5 group-hover:border-red-500/50 transition duration-500 relative overflow-hidden ${!isPlaying ? 'cursor-pointer' : ''}`}
                >
                    {isPlaying ? (
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube-nocookie.com/embed/tt_PVE_A3wU?autoplay=1&modestbranding=1&rel=0"
                            title="YouTube session at Doon Business School"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen>
                        </iframe>
                    ) : (
                        <>
                            <img src="https://img.youtube.com/vi/tt_PVE_A3wU/hqdefault.jpg" alt="Session Thumbnail" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition duration-700" />
                            <div className="absolute inset-0 flex items-center justify-center z-10">
                                <div className="w-14 h-14 bg-red-600/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(220,38,38,0.5)] group-hover:scale-110 transition duration-300">
                                    <i className="fas fa-play text-white ml-1 text-lg"></i>
                                </div>
                            </div>
                        </>
                    )}
                </div>
                <p className="text-text-secondary text-xs mb-5 leading-relaxed font-light">
                    How to Ideate, Build and Scale your Startup | Hacks and Mistakes.<br />
                    <span className="text-[10px] text-gray-500 mt-1.5 block uppercase tracking-wider font-semibold">Conducted at Doon Business School.</span>
                </p>
                <a href="https://www.youtube.com/watch?v=tt_PVE_A3wU" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-white/5 border border-white/10 text-text-primary text-sm font-semibold py-3 rounded-xl hover:bg-white hover:text-black transition duration-300 mt-auto group-hover:border-red-500/30">
                    <i className="fab fa-youtube mr-2 text-red-500 group-hover:text-black transition-colors"></i> Watch on YouTube
                </a>
            </div>
        </div>
    );
};

function EnglishTextComponent() {
    return (
        <div className="manifesto-font text-xl md:text-2xl text-[#A1A1A6] leading-[1.8] space-y-8 font-light relative z-10">
            <p>Startups in India aren't built in garages; they are built at <strong className="text-white font-medium">kitchen tables</strong> amidst family debates, silent sacrifices, and financial anxiety.</p>

            <p>In a country like <strong className="text-white font-medium">BHARAT</strong>, the “Opportunity Cost” isn't just a line on a spreadsheet — it is a weight on a founder’s soul.</p>

            <p>For the middle-class dreamer, choosing a startup over a steady paycheck is an act of war against social security.</p>

            <div className="w-16 h-[1px] bg-white/20 my-10 hidden md:block"></div>

            <p>A startup’s greatest enemy isn't competition — it’s the <strong className="text-white font-medium">“Initial Days Vacuum”</strong>. We talk about “funding”, but we forget about “foundation”.</p>

            <p>Many have the <em className="text-white italic">‘Keeda’</em> (the itch) and the <em className="text-white italic">‘Himmat’</em> (the courage), but courage without a compass is just a slow way to get lost.</p>

            <p>The ecosystem treats early-stage startups like athletes; in reality, they need to be treated like infants.</p>

            <p>If you don't hold the hand that is trying to build, that hand will eventually reach for a corporate cubicle just to survive.</p>

            <div className="w-16 h-[1px] bg-white/20 my-10 hidden md:block"></div>

            <p className="text-2xl md:text-3xl text-white font-medium tracking-tight">I believe tactical, hands-on support in the first 100 days is more valuable than a seed check in the first 300.</p>

            <p>Outliers don’t die because they lack talent — they die because they lack a map.</p>

            <p>If we provide the right scaffolding to the aspiring founder, we won't just see more startups — we will unlock an era of <strong className="text-white font-bold">unstoppable builders.</strong></p>

            <p>It doesn’t matter whose hand holds the torch, as long as the darkness is defeated. I am not here to just invest; I am here to ensure the fire doesn't go out before the sun rises.</p>
        </div>
    );
}

export function FounderManifesto() {
    return (
        <section id="manifesto" className="py-16 md:py-32 bg-bg-main relative overflow-hidden w-full border-t border-white/5">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-50 blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">

                {/* Minimalist Profile & Intro */}
                <div className="flex flex-col items-center mb-16 md:mb-20 text-center">
                    <div className="mb-6 p-1 rounded-full bg-gradient-to-b from-white/20 to-transparent shadow-lg shadow-white/5">
                        <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden bg-bg-main p-1 border border-white/10">
                            <img
                                src="/gaurav.jpg"
                                alt="Gaurav Bansal"
                                className="w-full h-full rounded-full object-cover filter grayscale hover:grayscale-0 transition duration-700"
                            />
                        </div>
                    </div>
                    <span className="text-text-secondary text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-3 text-accent-blue/80 text-center">THE FOUNDER’S MANIFESTO</span>
                    <h4 className="text-2xl md:text-4xl font-bold text-white tracking-tight text-center">Gaurav Bansal</h4>
                    <a href="https://www.linkedin.com/in/gauravbansal2/" target="_blank" rel="noopener noreferrer" className="text-accent-violet hover:text-white transition inline-flex items-center gap-2 mt-4 text-sm font-medium bg-white/5 px-4 py-2 rounded-full border border-white/5 hover:bg-white/10 hover:border-accent-violet/50">
                        Connect on LinkedIn <i className="fab fa-linkedin"></i>
                    </a>
                </div>

                {/* DESKTOP SPLIT LAYOUT (Hidden on mobile) */}
                <div className="hidden lg:grid w-full grid-cols-[40%_minmax(0,1fr)] gap-24 relative">
                    {/* Left Column: Sticky Shayari + Achievements below it */}
                    <div className="flex flex-col relative">
                        <div className="sticky top-32 h-fit pb-12 z-20">
                            <ShayariBlock />
                        </div>
                        <div className="mt-8 relative z-10">
                            <h4 className="text-white font-bold tracking-[0.2em] text-xs uppercase mb-8 flex items-center gap-4 opacity-80">
                                <span className="h-[1px] bg-white/10 flex-1"></span>
                                Track Record
                                <span className="h-[1px] bg-white/10 flex-1"></span>
                            </h4>
                            <AchievementsList />
                        </div>
                    </div>

                    {/* Right Column: English Editorial Text */}
                    <div className="pt-2">
                        <EnglishTextComponent />
                    </div>
                </div>

                {/* MOBILE/TABLET LAYOUT (Hidden on desktop) */}
                <div className="flex flex-col lg:hidden w-full gap-16 relative">
                    {/* 1. First show that Shayari */}
                    <div>
                        <ShayariBlock />
                    </div>

                    {/* 2. Then next Manifesto */}
                    <div>
                        <EnglishTextComponent />
                    </div>

                    {/* 3. Final these blocks (Achievements) */}
                    <div className="pt-8">
                        <h4 className="text-white font-bold tracking-[0.2em] text-[10px] uppercase mb-8 flex items-center gap-4 opacity-80">
                            <span className="h-[1px] bg-white/10 flex-1"></span>
                            Track Record
                            <span className="h-[1px] bg-white/10 flex-1"></span>
                        </h4>
                        <AchievementsList />
                    </div>
                </div>

            </div>
        </section>
    );
}
