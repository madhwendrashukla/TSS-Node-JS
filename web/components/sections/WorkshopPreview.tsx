"use client";

import React, { useState, useEffect } from 'react';

export function WorkshopPreview() {
    const [activeSlide, setActiveSlide] = useState(0);
    const totalSlides = 4;

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % totalSlides);
        }, 6000); // 6 seconds per slide
        return () => clearInterval(interval);
    }, []);

    const slides = [
        // SLIDE 1: HERO
        <div key="slide-0" className="w-full flex flex-col items-center justify-center text-center px-6 md:px-12 h-full py-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-accent-violet text-xs font-semibold mb-8 shadow-sm backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-violet shadow-[0_0_8px_rgba(139,92,246,0.8)]"></span> Live Cohort Starts April 15th
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-[-0.03em] leading-[1.1] mb-6">
                Raise Capital With <br className="hidden md:block"/>
                <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,#A855F7,#8B5CF6)]">Clarity.</span> Not Luck.
            </h2>
            
            <p className="text-base md:text-lg text-text-secondary font-light max-w-2xl mx-auto mb-10">
                Stop guessing what investors want. Join the live, cohort-based program that transforms passionate builders into <span className="text-white font-medium">investable founders.</span>
            </p>
            
            <div className="flex flex-col items-center gap-3">
                <div className="bg-gradient-to-r from-[#A855F7] to-[#D946EF] text-white px-8 py-4 rounded-xl font-bold text-sm tracking-wide shadow-[0_0_40px_rgba(168,85,247,0.4)] transition-shadow duration-300 md:w-auto w-full text-center group-hover:shadow-[0_0_60px_rgba(168,85,247,0.8)]">
                    Secure Your Seat in the Cohort &rarr;
                </div>
                <span className="text-[10px] text-text-secondary/60">Secure Checkout via Razorpay</span>
            </div>
        </div>,

        // SLIDE 2: TWO FOUNDERS
        <div key="slide-1" className="w-full px-6 md:px-12 h-full py-10 flex flex-col justify-center">
            <div className="text-center mb-10">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-[-0.02em]">A Tale of Two Founders</h3>
                <p className="text-text-secondary text-sm md:text-base font-light max-w-xl mx-auto">
                    In the startup ecosystem, there are two types of founders. Which outcome do you want?
                </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 md:gap-12 max-w-6xl mx-auto relative w-full">
                <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 border-t border-white/20 z-0"></div>
                
                <div className="bg-[#121521]/40 border border-white/10 rounded-3xl p-6 relative overflow-hidden text-gray-400">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-4">
                        <i className="fas fa-user-astronaut text-white/50 text-lg"></i>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Founder 1: Unprepared</h4>
                    <p className="text-xs text-gray-500 mb-6">Builds relentlessly but feels completely lost when it's time to raise capital.</p>
                    
                    <ul className="space-y-3 text-xs font-light text-gray-400">
                        <li className="flex gap-2 items-start">
                            <span className="flex-shrink-0 w-4 h-4 rounded-full bg-white/5 flex items-center justify-center text-[8px] mt-0.5 border border-white/5">x</span>
                            Walks into meetings with a vision, but no structured narrative.
                        </li>
                        <li className="flex gap-2 items-start">
                            <span className="flex-shrink-0 w-4 h-4 rounded-full bg-white/5 flex items-center justify-center text-[8px] mt-0.5 border border-white/5">x</span>
                            Stumbles over unit economics and dreads the "Data Room".
                        </li>
                    </ul>
                </div>

                <div className="bg-[#110D20] border-2 border-accent-violet/60 rounded-3xl p-6 relative overflow-hidden shadow-[0_0_30px_rgba(139,92,246,0.1)]">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-blue to-accent-violet flex items-center justify-center mb-4 shadow-lg shadow-accent-violet/30">
                        <i className="fas fa-user-tie text-white text-lg"></i>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Founder 2: The Architect</h4>
                    <p className="text-xs text-[#D946EF] font-medium mb-6">Builds an investable company structure, not just a product.</p>
                    
                    <ul className="space-y-3 text-xs font-light text-gray-300">
                        <li className="flex gap-2 items-start">
                            <span className="flex-shrink-0 w-4 h-4 rounded-full bg-accent-violet/20 text-accent-violet flex items-center justify-center text-[8px] mt-0.5 border border-accent-violet/30">✓</span>
                            Understands Term Sheets and uses models to prove growth.
                        </li>
                        <li className="flex gap-2 items-start">
                            <span className="flex-shrink-0 w-4 h-4 rounded-full bg-accent-violet/20 text-accent-violet flex items-center justify-center text-[8px] mt-0.5 border border-accent-violet/30">✓</span>
                            Knows 90% of what investors will ask before they open mouths.
                        </li>
                    </ul>
                </div>
            </div>
        </div>,

        // SLIDE 3: CURRICULUM
        <div key="slide-2" className="w-full px-6 md:px-12 h-full py-10 flex flex-col justify-center">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-16 max-w-6xl mx-auto items-center w-full">
                <div className="bg-[#140F24] border-[3px] border-accent-violet/80 rounded-[32px] p-6 h-[300px] flex items-center justify-center relative overflow-hidden shadow-[0_0_50px_rgba(139,92,246,0.15)]">
                    <div className="relative w-full h-full">
                        <span className="absolute top-[10%] left-[10%] text-accent-violet/50 font-bold text-lg rotate-[-10deg]">Term Sheet</span>
                        <span className="absolute top-[15%] right-[15%] text-[#D946EF] font-black text-2xl rotate-[5deg]">Cap Table</span>
                        <span className="absolute top-[35%] left-[5%] text-accent-violet/40 font-semibold text-base">Dilution</span>
                        <span className="absolute top-[45%] left-[20%] text-accent-violet font-black text-3xl">SHA</span>
                        <span className="absolute top-[40%] right-[10%] text-[#A855F7] font-bold text-xl rotate-[-5deg]">Convertible Note</span>
                        <span className="absolute top-[60%] left-[10%] text-accent-violet/70 font-bold text-base">Valuation</span>
                        <span className="absolute bottom-[20%] right-[20%] text-[#D946EF] font-black text-2xl">Liquidation Pref</span>
                        <span className="absolute bottom-[20%] left-[15%] text-accent-violet/60 font-bold text-lg">SHA</span>
                    </div>
                </div>
                
                <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-[-0.02em] leading-tight">
                        What do you get in <br/><span className="text-[#A855F7]">this workshop?</span>
                    </h3>
                    <ul className="space-y-3 text-xs md:text-sm font-light text-gray-300">
                        {[
                            "Introduction to the complete fundraising process",
                            "Data Room Preparation and documents required",
                            "All basic financial jargons and key terms",
                            "Introduction to Term Sheet, SHA, and more",
                            "Cap Table management fundamentals",
                            "Investor Outreach strategies",
                            "Pitch Deck preparation and pitching it right",
                        ].map((item, idx) => (
                            <li key={idx} className="flex gap-2 items-start">
                                <span className="flex-shrink-0 mt-[2px] text-[#A855F7] text-[10px]">✓</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>,

        // SLIDE 4: COHORTS
        <div key="slide-3" className="w-full px-6 md:px-12 h-full py-10 flex flex-col justify-center">
            <h3 className="text-2xl md:text-4xl font-black text-white text-center mb-8 tracking-tight">Choose your cohort</h3>
            
            <div className="grid md:grid-cols-2 gap-6 lg:gap-10 max-w-6xl mx-auto w-full">
                {/* Basic Cohort mini */}
                <div className="bg-[#101423] border border-white/5 rounded-3xl p-6 h-full flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#94A3B8] bg-white/5 px-2 py-1 rounded-full inline-block w-max mb-4">Level 1: Basic</span>
                    <h4 className="text-xl font-bold text-[#A855F7] mb-4">Fund Raising Basics</h4>
                    <p className="text-xs font-light text-gray-400 mb-6 flex-1">Anyone stepping into the world of startup fundraising. Walk away with a clear roadmap of the fundraising landscape.</p>
                    
                    <div className="space-y-2 text-xs text-gray-300 font-light mt-auto">
                        <p className="flex gap-2"><span className="text-[#A855F7]">✓</span> All basic financial jargons</p>
                        <p className="flex gap-2"><span className="text-[#A855F7]">✓</span> Pitch Deck creation</p>
                        <p className="flex gap-2"><span className="text-[#A855F7]">✓</span> Introduction to agreements</p>
                    </div>
                </div>

                {/* Advanced Cohort mini */}
                <div className="bg-[#100D1C] border-2 border-[#D946EF]/30 rounded-3xl p-6 relative h-full flex flex-col">
                    <div className="absolute top-0 right-4 bg-[#D946EF] text-white text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-b-md">Most Advanced</div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-white bg-[#D946EF] px-2 py-1 rounded-full inline-block w-max mb-4 shadow-[0_0_15px_rgba(217,70,239,0.5)]">Level 2: Advanced</span>
                    <h4 className="text-xl font-bold text-white mb-4">Fund Raising Advanced</h4>
                    <p className="text-xs font-light text-gray-400 mb-6 flex-1">Founders actively preparing to raise right now. Deep dive into negotiation, case studies, and protecting future rounds.</p>
                    
                    <div className="space-y-2 text-xs text-gray-300 font-light mt-auto">
                        <p className="flex gap-2"><span className="text-[#D946EF]">✓</span> Term Sheet Advanced & Key Agreements</p>
                        <p className="flex gap-2"><span className="text-[#D946EF]">✓</span> Cap Table Management Deep Dive</p>
                        <p className="flex gap-2"><span className="text-[#D946EF]">✓</span> 80+ Pitch Decks + Investor DB access</p>
                    </div>
                </div>
            </div>
        </div>
    ];

    return (
        <a 
            href="https://thestartupschool.in/fundraising-workshop-15apr/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block w-full mx-auto rounded-[32px] md:rounded-[48px] overflow-hidden border border-white/5 shadow-[0_0_80px_rgba(139,92,246,0.15)] group-hover:shadow-[0_0_120px_rgba(168,85,247,0.25)] bg-[#0B0F19] text-left transition-all duration-700 hover:scale-[1.02] cursor-pointer group relative mt-10 min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex flex-col isolate"
        >
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none mix-blend-overlay -z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#13112E] to-transparent opacity-80 pointer-events-none -z-10"></div>
            
            {/* Slide Container */}
            <div className="flex-1 relative w-full overflow-hidden flex items-center justify-center">
                {slides.map((slide, index) => (
                    <div 
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out flex items-center justify-center ${index === activeSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
                    >
                        {slide}
                    </div>
                ))}
            </div>
        </a>
    );
}
