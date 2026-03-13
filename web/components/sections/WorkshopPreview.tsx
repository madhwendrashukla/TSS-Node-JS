"use client";

import React, { useState, useEffect } from 'react';

export function WorkshopPreview() {

    return (
        <a 
            href="/workshop-reg/index.html" 
            className="block w-full mx-auto rounded-[32px] md:rounded-[48px] overflow-hidden border border-white/5 shadow-[0_0_80px_rgba(139,92,246,0.15)] hover:shadow-[0_0_120px_rgba(168,85,247,0.25)] bg-[#0B0F19] transition-all duration-700 hover:scale-[1.02] cursor-pointer group mt-10 relative isolate"
        >
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none mix-blend-overlay -z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#13112E] to-transparent opacity-80 pointer-events-none -z-10"></div>
            
            <div className="w-full px-4 md:px-12 py-12 md:py-16 flex flex-col justify-center relative z-10">
                <div className="text-center mb-10 text-white">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-xs font-medium mb-6">
                        <span className="w-2 h-2 rounded-full bg-accent-violet"></span>
                        <span className="text-gray-300">Live Cohort Starts April 15th</span>
                    </div>

                    <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-[-0.02em] leading-tight">
                        Raise Capital With <br className="hidden md:block"/>
                        <span className="text-[#A855F7] underline decoration-[#A855F7]/30 underline-offset-[12px] decoration-4">Clarity.</span> Not Luck.
                    </h3>
                    
                    <p className="text-gray-400 text-sm md:text-base lg:text-lg font-light max-w-2xl mx-auto mb-10">
                        Stop guessing what investors want. Join the live, cohort-based program that transforms passionate builders into <span className="font-bold text-white">investable founders.</span>
                    </p>

                    <div className="relative inline-block group/btn">
                        <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue to-accent-violet rounded-lg blur opacity-40 group-hover/btn:opacity-75 transition duration-500"></div>
                        <div className="relative bg-gradient-to-r from-[#A855F7] to-[#D946EF] text-white px-8 py-4 rounded-lg font-bold flex items-center gap-2 shadow-[0_0_40px_rgba(168,85,247,0.4)]">
                            Secure Your Seat in the Cohort <i className="fa-solid fa-arrow-right text-sm"></i>
                        </div>
                    </div>
                    <p className="text-[10px] text-gray-500 mt-3 font-medium tracking-wide">Secure Checkout via Razorpay</p>
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
            </div>
        </a>
    );
}
