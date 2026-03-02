"use client";

import { useEffect, useState } from "react";
import { MoveDown, BookOpen, Users, Wrench } from "lucide-react";
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function AutomatedVideoPromo() {
    const [currentScene, setCurrentScene] = useState(0);
    const [isFadingOut, setIsFadingOut] = useState(false);
    const totalScenes = 4;
    const sceneDurationMs = 5000;

    useEffect(() => {
        const interval = setInterval(() => {
            setIsFadingOut(true);
            setTimeout(() => {
                setCurrentScene((prev) => (prev + 1) % totalScenes);
                setIsFadingOut(false);
            }, 600);
        }, sceneDurationMs);
        return () => clearInterval(interval);
    }, []);

    const goToScene = (index: number) => {
        if (currentScene === index || isFadingOut) return;
        setIsFadingOut(true);
        setTimeout(() => {
            setCurrentScene(index);
            setIsFadingOut(false);
        }, 600);
    };

    return (
        <section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden bg-black">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
            >
                <source src="/founder-dating.mp4" type="video/mp4" />
            </video>

            {/* Dim Overlay - A gradient allows some brightness but favors readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 z-0"></div>

            {/* Main Content Area */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center justify-center text-center h-full min-h-[500px]">
                <div className={`transition-opacity duration-500 ease-in-out w-full flex flex-col items-center justify-center ${isFadingOut ? 'opacity-0' : 'opacity-100'}`}>

                    {/* Scene 1: The Hook */}
                    {currentScene === 0 && (
                        <div className="flex flex-col items-center animate-in fade-in zoom-in duration-700">
                            <span className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-text-secondary text-xs uppercase tracking-[0.2em] font-medium backdrop-blur-md mb-8">
                                The 100-Day Acceleration
                            </span>
                            <h1 className="text-5xl md:text-7xl lg:text-[100px] font-black tracking-[-0.04em] text-white leading-[0.9] mb-8">
                                Stop <span className="text-white/40">Planning.</span><br />
                                Start <span className="gradient-text">Building.</span>
                            </h1>
                            <p className="text-xl md:text-3xl font-light text-text-secondary max-w-3xl mx-auto tracking-tight leading-relaxed">
                                An alternate B-School for Bharat&apos;s aspiring founders. We bridge the deadly gaps in <span className="text-white font-medium">Learning</span>, <span className="text-white font-medium">Access</span>, <span className="text-white font-medium">Mentoring</span>, and <span className="text-white font-medium">Community</span>.
                            </p>
                        </div>
                    )}

                    {/* Scene 2: The Problem */}
                    {currentScene === 1 && (
                        <div className="flex flex-col items-center max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
                            <div className="text-red-500 text-sm font-bold tracking-[0.2em] uppercase mb-4">The Traditional Route</div>
                            <h2 className="text-4xl md:text-6xl lg:text-[80px] font-black text-white tracking-tight mb-8 leading-tight">
                                2 Years. ₹20L+. <br />
                                <span className="text-white/40">Zero Validation.</span>
                            </h2>
                            <p className="text-xl md:text-2xl text-text-secondary font-light">
                                Why waste years on theoretical MBA case studies just to fight for a corporate desk job? The opportunity cost is massive.
                            </p>
                        </div>
                    )}

                    {/* Scene 3: The Solution */}
                    {currentScene === 2 && (
                        <div className="flex flex-col items-center max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
                            <div className="text-accent-blue text-sm font-bold tracking-[0.2em] uppercase mb-4">The Builder Route</div>
                            <h2 className="text-4xl md:text-6xl lg:text-[80px] font-black text-white tracking-tight mb-8 leading-tight">
                                100 Days of <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-violet">Execution.</span>
                            </h2>
                            <p className="text-xl md:text-2xl text-text-secondary font-light mb-12">
                                Mentorship from active operators. Building a product people actually want to pay for. Zero worthless theory.
                            </p>
                            <Link href="/programs" className="group flex items-center justify-center bg-white text-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                                Explore Programs
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    )}

                    {/* Scene 4: The Hub / Scroll */}
                    {currentScene === 3 && (
                        <div className="flex flex-col items-center w-full animate-in fade-in zoom-in duration-700">
                            <span className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-text-secondary text-xs uppercase tracking-[0.2em] font-medium backdrop-blur-md mb-12">
                                Your Next-Gen Startup Ecosystem
                            </span>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mb-16">
                                <div className="glass-card p-8 rounded-3xl flex flex-col items-center border border-white/10 bg-black/40 backdrop-blur-md">
                                    <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mb-6 text-accent-blue">
                                        <BookOpen size={28} />
                                    </div>
                                    <h4 className="text-white font-bold text-xl mb-3">Learn Frameworks</h4>
                                    <p className="text-sm text-text-secondary text-center">Master live, outcome-driven deep tech and business concepts.</p>
                                </div>

                                <div className="glass-card p-8 rounded-3xl flex flex-col items-center border border-accent-violet/30 bg-accent-violet/5 backdrop-blur-md shadow-[0_0_30px_rgba(168,85,247,0.1)]">
                                    <div className="w-16 h-16 rounded-2xl bg-accent-violet/20 border border-accent-violet/20 flex items-center justify-center mb-6 text-accent-violet">
                                        <Users size={28} />
                                    </div>
                                    <h4 className="text-white font-bold text-xl mb-3">Find Mentors</h4>
                                    <p className="text-sm text-text-secondary text-center">Connect directly with industry titans and serial builders.</p>
                                </div>

                                <div className="glass-card p-8 rounded-3xl flex flex-col items-center border border-white/10 bg-black/40 backdrop-blur-md">
                                    <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mb-6 text-amber-400">
                                        <Wrench size={28} />
                                    </div>
                                    <h4 className="text-white font-bold text-xl mb-3">Explore Tools</h4>
                                    <p className="text-sm text-text-secondary text-center">Simulate equity, model finances, and access directories.</p>
                                </div>
                            </div>

                            <div className="flex flex-col items-center gap-3 animate-bounce mt-4 cursor-pointer" onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}>
                                <span className="text-xs text-text-secondary uppercase tracking-widest font-bold">Scroll Down to Explore</span>
                                <div className="w-8 h-12 rounded-full border border-white/20 flex justify-center p-2 bg-black/20 backdrop-blur-sm">
                                    <MoveDown className="w-4 h-4 text-accent-cyan animate-pulse" />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* ── Progress Indicators ── */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 z-20">
                {[0, 1, 2, 3].map((sceneIndex) => (
                    <div
                        key={sceneIndex}
                        className={`w-16 h-1.5 rounded-full overflow-hidden bg-white/20 cursor-pointer hover:bg-white/40 transition-colors pointer-events-auto`}
                        onClick={() => goToScene(sceneIndex)}
                    >
                        {currentScene === sceneIndex && (
                            <div className="h-full bg-white opacity-100 animate-[progress_5s_linear_forwards]"></div>
                        )}
                    </div>
                ))}
            </div>

            <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
        </section>
    );
}
