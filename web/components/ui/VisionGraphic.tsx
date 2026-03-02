"use client";

import { useEffect, useState } from "react";
import { MoveDown, BookOpen, Users, Wrench, Rocket, Orbit } from "lucide-react";

export function VisionGraphic() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <div className="h-[400px] w-full" />; // Prevent hydration mismatch

    return (
        <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center select-none py-12 mb-20 pointer-events-none">

            {/* ─── The Path Splitter (Option A vs B) ────────────────────────── */}
            <div className="flex flex-col md:flex-row w-full gap-8 md:gap-16 items-center md:items-stretch justify-center relative">

                {/* Connection Lines (Desktop only) */}
                <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] -z-10">
                    <div className="absolute left-[20%] right-[80%] h-full bg-gradient-to-r from-transparent to-red-500/50" />
                    <div className="absolute left-[80%] right-[20%] h-full bg-gradient-to-l from-transparent to-accent-blue/50" />
                </div>

                {/* Option A: The Wait (Traditional) */}
                <div className="flex-1 glass-card p-6 md:p-8 rounded-3xl border border-red-500/20 bg-red-500/5 flex flex-col items-center text-center relative max-w-sm w-full opacity-60 hover:opacity-100 transition-opacity duration-500">
                    <div className="w-12 h-12 rounded-full border border-red-500/30 bg-red-500/10 flex items-center justify-center mb-4 shrink-0 text-red-500">
                        <Orbit className="w-6 h-6 animate-[spin_10s_linear_infinite]" />
                    </div>
                    <span className="text-red-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-2">Option A: The Wait</span>
                    <h3 className="text-xl font-bold text-white/80 mb-3">2 Years &amp; ₹20L+</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                        Traditional MBA. Theoretical case studies, debt, corporate jobs. High opportunity cost.
                    </p>
                </div>

                {/* Option B: The Build (TSS) */}
                <div className="flex-1 glass-card p-6 md:p-8 border-accent-blue/40 bg-accent-blue/5 rounded-3xl flex flex-col items-center text-center relative max-w-sm w-full shadow-[0_0_40px_rgba(41,151,255,0.1)] z-10 before:absolute before:inset-0 before:bg-gradient-to-b before:from-accent-blue/20 before:to-transparent before:rounded-3xl before:pointer-events-none overflow-hidden group">

                    {/* Animated Glow inside Option B */}
                    <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(41,151,255,0.3)_360deg)] animate-[spin_4s_linear_infinite] opacity-50 z-0"></div>
                    <div className="absolute inset-[1px] bg-bg-main rounded-3xl z-0"></div>

                    <div className="relative z-10 flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full border border-accent-blue/40 bg-accent-blue/20 flex items-center justify-center mb-4 shrink-0 text-accent-blue shadow-[0_0_20px_rgba(41,151,255,0.4)]">
                            <Rocket className="w-8 h-8 group-hover:-translate-y-1 transition-transform" />
                        </div>
                        <span className="text-accent-blue text-[10px] font-bold tracking-[0.2em] uppercase mb-2">Option B: The Build</span>
                        <h3 className="text-2xl font-black text-white mb-3 tracking-tight">100 Days of Execution</h3>
                        <p className="text-sm text-text-secondary leading-relaxed font-light">
                            Validation. Mentorship from operators. Building a product people pay for.
                        </p>
                    </div>
                </div>

            </div>

            {/* ─── Vertical Flow Connector ────────────────────────────────────── */}
            <div className="w-[2px] h-16 bg-gradient-to-b from-accent-blue to-accent-violet my-6 relative shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent-blue animate-ping" />
            </div>

            {/* ─── Platform Hub (The One-Stop Shop) ─────────────────────────── */}
            <div className="w-full max-w-4xl text-center z-10 relative">
                <div className="absolute inset-0 bg-accent-violet/5 blur-3xl -z-10 rounded-full"></div>

                <div className="inline-block px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
                    <span className="text-white font-medium text-sm">Your Next-Gen Startup Ecosystem</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                    <div className="glass-card p-6 rounded-2xl flex flex-col items-center border border-white/5 hover:border-white/20 transition-all group">
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-4 text-accent-blue group-hover:scale-110 transition-transform">
                            <BookOpen size={20} />
                        </div>
                        <h4 className="text-white font-bold mb-2">Learn Frameworks</h4>
                        <p className="text-xs text-text-secondary text-center">Master live, outcome-driven deep tech and business concepts.</p>
                    </div>

                    <div className="glass-card p-6 rounded-2xl flex flex-col items-center border border-white/5 hover:border-white/20 transition-all group shadow-[0_0_20px_rgba(168,85,247,0.1)]">
                        <div className="w-10 h-10 rounded-xl bg-accent-violet/10 flex items-center justify-center mb-4 text-accent-violet group-hover:scale-110 transition-transform">
                            <Users size={20} />
                        </div>
                        <h4 className="text-white font-bold mb-2">Find Mentors</h4>
                        <p className="text-xs text-text-secondary text-center">Connect directly with industry titans and serial builders.</p>
                    </div>

                    <div className="glass-card p-6 rounded-2xl flex flex-col items-center border border-white/5 hover:border-white/20 transition-all group">
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-4 text-amber-400 group-hover:scale-110 transition-transform">
                            <Wrench size={20} />
                        </div>
                        <h4 className="text-white font-bold mb-2">Explore Tools</h4>
                        <p className="text-xs text-text-secondary text-center">Simulate equity, model finances, and access startup directories.</p>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="mt-16 flex flex-col items-center gap-3 animate-bounce opacity-70">
                <span className="text-[10px] text-text-secondary uppercase tracking-widest font-bold">Scroll Down to Explore</span>
                <div className="w-8 h-12 rounded-full border border-white/20 flex justify-center p-2">
                    <MoveDown className="w-4 h-4 text-accent-blue" />
                </div>
            </div>

        </div>
    );
}
