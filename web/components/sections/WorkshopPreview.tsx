"use client";

import React, { useState, useEffect } from 'react';

export function WorkshopPreview() {

    return (
        <a 
            href="/workshop" 
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

                    <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-[-0.02em] leading-tight">
                        Raise Capital With <br className="hidden md:block"/>
                        <span className="text-[#A855F7] underline decoration-[#A855F7]/30 underline-offset-[12px] decoration-4">Clarity.</span> Not Luck.
                    </h3>
                    
                    <p className="text-gray-400 text-sm md:text-base lg:text-2xl font-light max-w-3xl mx-auto mb-12 leading-relaxed">
                        Join the industry’s most intensive program that teaches the complete A–Z of startup fundraising.
                    </p>

                    <div className="relative inline-block group/btn">
                        <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue to-accent-violet rounded-lg blur opacity-40 group-hover/btn:opacity-75 transition duration-500"></div>
                        <div className="relative bg-gradient-to-r from-[#A855F7] to-[#D946EF] text-white px-8 py-4 rounded-lg font-bold flex items-center gap-2 shadow-[0_0_40px_rgba(168,85,247,0.4)]">
                            Secure Your Seat in the Cohort <i className="fa-solid fa-arrow-right text-sm"></i>
                        </div>
                    </div>
                    <p className="text-[10px] text-gray-500 mt-3 font-medium tracking-wide">Secure Checkout via Razorpay</p>
                </div>
            </div>
        </a>
    );
}
