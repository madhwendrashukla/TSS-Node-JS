"use client";

import { useEffect, useState } from "react";
import { MoveDown, BookOpen, Users, Wrench } from "lucide-react";
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const HERO_IMAGES = [
    '/images/hero-bg/slide-2.png',
    '/images/hero-bg/slide-3.png',
    '/images/hero-bg/slide-4.png',
    '/images/hero-bg/slide-5.png',
    '/images/hero-bg/slide-6.png',
    '/images/hero-bg/slide-7.png',
];

export function AutomatedVideoPromo() {
    const [currentScene, setCurrentScene] = useState(0);
    const [isFadingOut, setIsFadingOut] = useState(false);
    const totalScenes = 4;
    const sceneDurationMs = 5000;

    const [currentBg, setCurrentBg] = useState(0);

    useEffect(() => {
        const bgInterval = setInterval(() => {
            setCurrentBg((prev) => (prev + 1) % HERO_IMAGES.length);
        }, 5000);

        const sceneInterval = setInterval(() => {
            setIsFadingOut(true);
            setTimeout(() => {
                setCurrentScene((prev) => (prev + 1) % totalScenes);
                setIsFadingOut(false);
            }, 600);
        }, sceneDurationMs);

        return () => {
            clearInterval(bgInterval);
            clearInterval(sceneInterval);
        };
    }, []);



    return (
        <section className="relative w-full min-h-[100svh] flex flex-col justify-center overflow-hidden bg-bg-main">
            {/* Background Images Slider */}
            {HERO_IMAGES.map((src, index) => (
                <div
                    key={src}
                    className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${index === currentBg ? 'opacity-40' : 'opacity-0'
                        }`}
                >
                    <Image
                        src={src}
                        alt="Hero Background"
                        fill
                        className="object-cover object-center md:object-top lg:object-center"
                        priority={index === 0}
                    />
                </div>
            ))}

            {/* Dark/Gradient Overlays for readability and blending */}
            <div className="absolute inset-0 z-0 bg-bg-main/60"></div>
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-bg-main via-transparent to-transparent"></div>
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-bg-main/80 via-transparent to-transparent"></div>

            {/* Extremely Subtle Background Glow */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent-blue/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

            {/* Main Content Area */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center justify-center text-center h-full min-h-[500px]">
                <div className={`transition-opacity duration-500 ease-in-out w-full flex flex-col items-center justify-center ${isFadingOut ? 'opacity-0' : 'opacity-100'}`}>

                    {/* Scene 1: The Hook */}
                    {currentScene === 0 && (
                        <div className="flex flex-col items-center animate-in fade-in zoom-in duration-700">
                            <span className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-text-secondary text-xs uppercase tracking-[0.2em] font-medium backdrop-blur-md mb-8">
                                The 100-Day Acceleration
                            </span>
                            <h1 className="text-4xl sm:text-5xl md:text-5xl font-black tracking-[-0.04em] text-white leading-[1.1] md:leading-[0.9] mb-6 md:mb-8">
                                Stop <span className="text-white/40">Ideating.</span><br />
                                Start <span className="gradient-text">Building.</span>
                            </h1>
                            <p className="text-xl md:text-3xl font-light text-text-secondary max-w-3xl mx-auto tracking-tight leading-relaxed">
                                Join the alternate B-school for Aspiring Founders.
                            </p>
                        </div>
                    )}

                    {/* Scene 2: The Problem */}
                    {currentScene === 1 && (
                        <div className="flex flex-col items-center max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
                            <div className="text-accent-blue text-sm font-bold tracking-[0.2em] uppercase mb-4">The Bridge</div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-6 md:mb-8 leading-tight text-center">
                                The 0 &rarr; 1 Bridge <br />
                                <span className="text-white/40">Where Founders Are Built.</span>
                            </h2>
                            <p className="text-xl md:text-2xl text-text-secondary font-light text-center">
                                We close 4 deadly gaps: Learning, Access, Mentoring, Community
                            </p>
                        </div>
                    )}

                    {/* Scene 3: The Solution */}
                    {currentScene === 2 && (
                        <div className="flex flex-col items-center max-w-4xl mx-auto px-4 w-full animate-in fade-in slide-in-from-bottom-8 duration-700">
                            <div className="text-accent-violet text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-4 text-center">The Roadmap</div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-8 md:mb-10 leading-snug md:leading-tight text-center">
                                3 days of ignition sprint <br />
                                <span className="text-white/40 text-xl md:text-3xl block my-3 md:my-5">to</span>
                                <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,var(--color-accent-blue),var(--color-accent-violet))]">100 days of Deep Dive Immersion cohorts</span>
                            </h2>
                            <p className="text-xl md:text-2xl text-text-secondary font-light mb-12 italic">
                                Choose the program that fits you the best
                            </p>
                            <Link href="/programs" className="group flex items-center justify-center bg-white text-black px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-base md:text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]">
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

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-6xl mb-16 px-2 md:px-4">
                                <div className="glass-card flex flex-col items-center justify-center p-4 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl border border-white/10 bg-bg-main/40 backdrop-blur-md hover:bg-white/5 transition-colors">
                                    <div className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl md:rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mb-3 md:mb-5 text-accent-blue">
                                        <BookOpen size={20} className="md:w-6 md:h-6 lg:w-7 lg:h-7" />
                                    </div>
                                    <h4 className="text-white font-bold text-sm md:text-lg lg:text-xl text-center leading-tight">Learn Frameworks</h4>
                                </div>

                                <div className="glass-card flex flex-col items-center justify-center p-4 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl border border-accent-violet/30 bg-accent-violet/5 backdrop-blur-md shadow-[0_0_30px_rgba(168,85,247,0.1)] hover:bg-accent-violet/10 transition-colors">
                                    <div className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl md:rounded-2xl bg-accent-violet/20 border border-accent-violet/20 flex items-center justify-center mb-3 md:mb-5 text-accent-violet">
                                        <Users size={20} className="md:w-6 md:h-6 lg:w-7 lg:h-7" />
                                    </div>
                                    <h4 className="text-white font-bold text-sm md:text-lg lg:text-xl text-center leading-tight">Find Mentors</h4>
                                </div>

                                <div className="glass-card flex flex-col items-center justify-center p-4 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl border border-white/10 bg-bg-main/40 backdrop-blur-md hover:bg-white/5 transition-colors">
                                    <div className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl md:rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mb-3 md:mb-5 text-amber-400">
                                        <Wrench size={20} className="md:w-6 md:h-6 lg:w-7 lg:h-7" />
                                    </div>
                                    <h4 className="text-white font-bold text-sm md:text-lg lg:text-xl text-center leading-tight">Explore Tools</h4>
                                </div>

                                <div className="glass-card flex flex-col items-center justify-center p-4 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl border border-white/10 bg-bg-main/40 backdrop-blur-md hover:bg-white/5 transition-colors">
                                    <div className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl md:rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mb-3 md:mb-5 text-green-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-blocks md:w-6 md:h-6 lg:w-7 lg:h-7"><rect width="7" height="7" x="14" y="3" rx="1" /><path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3" /></svg>
                                    </div>
                                    <h4 className="text-white font-bold text-sm md:text-lg lg:text-xl text-center leading-tight">Build Together</h4>
                                </div>
                            </div>

                            <div className="flex flex-col items-center gap-3 animate-bounce mt-4 cursor-pointer" onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}>
                                <span className="text-xs text-text-secondary uppercase tracking-widest font-bold">Scroll Down to Explore</span>
                                <div className="w-8 h-12 rounded-full border border-white/20 flex justify-center p-2 bg-bg-main/20 backdrop-blur-sm">
                                    <MoveDown className="w-4 h-4 text-accent-cyan animate-pulse" />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>


        </section>
    );
}
