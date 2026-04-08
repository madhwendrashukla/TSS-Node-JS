'use client';

import { useState } from 'react';

export function WorkshopPricing() {
    const [revealedBasic, setRevealedBasic] = useState(false);
    const [revealedAdvanced, setRevealedAdvanced] = useState(false);

    return (
        <section className="py-16 md:py-32 relative" id="pricing">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[300px] md:h-[500px] bg-gradient-to-r from-[#8b5cf6] to-[#d946ef] rounded-full mix-blend-screen filter blur-[150px] md:blur-[200px] opacity-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 md:mb-8">Cohorts & Pricing</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6 lg:gap-12 max-w-5xl mx-auto">
                    {/* Basic Pricing */}
                    <div className="bg-[rgba(15,23,42,0.6)] backdrop-blur-[16px] border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col hover:border-white/20 transition-all duration-300 relative overflow-hidden">
                        <div className="mb-5 border-b border-white/10 pb-5">
                            <div className="inline-block px-3 py-1 bg-slate-800 text-slate-300 font-bold rounded-lg text-[10px] mb-3 border border-white/10">LEVEL 1</div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Basic Cohort</h3>
                            <p className="text-sm md:text-base text-slate-400 font-medium">The basics of capital and readiness.</p>
                        </div>
                        <div className="mb-6 flex items-center flex-wrap gap-3">
                            <span className="text-slate-500 line-through text-xl font-medium">₹3,500</span>
                            <span className="text-white text-4xl md:text-5xl font-extrabold">₹999</span>
                        </div>
                        <ul className="mb-8 space-y-4 md:space-y-5 flex-1">
                            <li className="flex items-start gap-3 md:gap-4">
                                <div className="mt-1 w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center border border-white/5 shrink-0">
                                    <i className="fa-regular fa-calendar text-[#8b5cf6] text-sm" />
                                </div>
                                <div><span className="text-sm md:text-base font-bold block text-white">15th, 16th, 17th April</span></div>
                            </li>
                            <li className="flex items-start gap-3 md:gap-4">
                                <div className="mt-1 w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center border border-white/5 shrink-0">
                                    <i className="fa-regular fa-clock text-[#8b5cf6] text-sm" />
                                </div>
                                <div>
                                    <span className="text-sm md:text-base font-bold block text-white">6:00 PM - 9:00 PM</span>
                                    <span className="text-xs text-slate-400 block">Live on Zoom</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 md:gap-4 mt-6 bg-white/5 p-3 md:p-4 rounded-xl border border-white/10">
                                <i className="fa-solid fa-circle-info text-[#8b5cf6] mt-0.5 text-lg shrink-0" />
                                <span className="text-xs md:text-sm text-slate-300 font-light leading-relaxed">Less than the cost of a weekend dinner to learn the exact financial language required to build an investable company.</span>
                            </li>
                        </ul>
                        <div className="mt-auto w-full">
                            {!revealedBasic ? (
                                <button onClick={() => setRevealedBasic(true)} className="w-full py-4 rounded-xl bg-slate-800 text-white font-bold border border-white/10 hover:bg-slate-700 transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                                    <i className="fa-solid fa-gift text-[#8b5cf6]" /> Reveal Early Bird Offer
                                </button>
                            ) : (
                                <div className="flex flex-col items-center animate-[pop-in_0.5s_cubic-bezier(0.175,0.885,0.32,1.275)_forwards]">
                                    <a href="https://rzp.io/rzp/bUPzmgpV" target="_blank" rel="noopener noreferrer" className="w-full block text-center px-4 py-4 rounded-xl bg-[#8b5cf6] hover:bg-[#d946ef] border border-white/10 text-white font-bold transition-colors text-base md:text-lg shadow-[0_0_20px_rgba(139,92,246,0.4)]">
                                        Early Bird Offer – ₹499<br />
                                        <span className="text-sm font-medium text-white/90">Click here to Avail Today!!</span>
                                    </a>
                                    <p className="text-xs text-slate-400 mt-3 text-center">*Early bird valid only till 5th April</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Advanced Pricing */}
                    <div className="bg-[rgba(15,23,42,0.6)] backdrop-blur-[16px] border-2 border-[#8b5cf6]/40 rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col hover:shadow-[0_0_30px_rgba(217,70,239,0.2)] transition-all duration-300 mt-4 md:mt-0 relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-gradient-to-r from-[#8b5cf6] to-[#d946ef] text-white text-[10px] font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-widest shadow-lg">Best Value</div>
                        <div className="mb-5 border-b border-white/10 pb-5">
                            <div className="inline-block px-3 py-1 bg-gradient-to-r from-[#8b5cf6] to-[#d946ef] text-white font-bold rounded-lg text-[10px] mb-3 shadow-lg shadow-[#d946ef]/30">LEVEL 2</div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Advanced Cohort</h3>
                            <p className="text-sm md:text-base text-[#d946ef] font-medium">Full deep dive + Special Benefits.</p>
                        </div>
                        <div className="mb-6 flex items-center flex-wrap gap-3">
                            <span className="text-slate-500 line-through text-xl font-medium">₹11,000</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] to-[#d946ef] text-4xl md:text-5xl font-extrabold">₹3,500</span>
                        </div>
                        <ul className="mb-8 space-y-4 md:space-y-5 flex-1">
                            <li className="flex items-start gap-3 md:gap-4">
                                <div className="mt-1 w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center border border-white/5 shrink-0">
                                    <i className="fa-regular fa-calendar text-[#d946ef] text-sm" />
                                </div>
                                <div><span className="text-sm md:text-base font-bold block text-white">15th, 16th, 17th April</span></div>
                            </li>
                            <li className="flex items-start gap-3 md:gap-4">
                                <div className="mt-1 w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center border border-white/5 shrink-0">
                                    <i className="fa-regular fa-clock text-[#d946ef] text-sm" />
                                </div>
                                <div>
                                    <span className="text-sm md:text-base font-bold block text-white">6:00 PM - 9:00 PM</span>
                                    <span className="text-xs text-slate-400 block">Live on Zoom</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 md:gap-4 border-t border-white/5 pt-4 mt-2">
                                <div className="mt-1 w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center border border-white/5 shrink-0">
                                    <i className="fa-regular fa-calendar text-[#d946ef] text-sm" />
                                </div>
                                <div><span className="text-sm md:text-base font-bold block text-white">18th & 19th April</span></div>
                            </li>
                            <li className="flex items-start gap-3 md:gap-4">
                                <div className="mt-1 w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center border border-white/5 shrink-0">
                                    <i className="fa-regular fa-clock text-[#d946ef] text-sm" />
                                </div>
                                <div>
                                    <span className="text-sm md:text-base font-bold block text-white">10:00 AM - 1:30 PM & 3:00 PM to 6:30 PM</span>
                                    <span className="text-xs text-slate-400 block">Live on Zoom</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 md:gap-4 mt-6 bg-[#d946ef]/10 p-3 md:p-4 rounded-xl border border-[#d946ef]/20 backdrop-blur-sm">
                                <i className="fa-solid fa-gift text-white mt-0.5 text-lg shrink-0" />
                                <span className="text-xs md:text-sm text-white font-medium leading-relaxed">Includes 100+ pitch decks, investor databases, and 1-year community membership.</span>
                            </li>
                        </ul>
                        <div className="mt-auto w-full">
                            {!revealedAdvanced ? (
                                <div className="relative group w-full cursor-pointer" onClick={() => setRevealedAdvanced(true)}>
                                    <div className="absolute -inset-1 bg-gradient-to-r from-[#8b5cf6] to-[#d946ef] rounded-xl blur opacity-50 group-hover:opacity-80 transition duration-300" />
                                    <button className="relative w-full py-4 rounded-xl bg-[#0f172a] text-white font-bold border border-white/20 transition-all flex items-center justify-center gap-2">
                                        <i className="fa-solid fa-gift text-[#d946ef]" /> Reveal Early Bird Offer
                                    </button>
                                </div>
                            ) : (
                                <div className="relative group w-full animate-[pop-in_0.5s_cubic-bezier(0.175,0.885,0.32,1.275)_forwards]">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-[#8b5cf6] to-[#d946ef] rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-300" />
                                    <a href="https://rzp.io/rzp/3pi8IF3F" target="_blank" rel="noopener noreferrer" className="relative w-full block text-center px-4 py-4 rounded-xl bg-gradient-to-r from-[#8b5cf6] to-[#d946ef] text-white font-bold transition-all transform group-hover:-translate-y-1 text-base md:text-lg">
                                        Early Bird Offer – ₹1749 <br />
                                        <span className="text-sm font-medium text-white/90">Click here to Avail Today!!</span>
                                    </a>
                                    <p className="text-xs text-slate-400 mt-3 text-center">*Early bird valid only till 5th April</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="text-center mt-8 text-xs md:text-sm text-slate-500 font-medium">
                    <i className="fa-solid fa-shield-halved text-[#8b5cf6]" /> Secure checkout via Razorpay
                </div>
            </div>
        </section>
    );
}
