import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { VisionGraphic } from '../ui/VisionGraphic';

export function Hero() {
    return (
        <section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden pt-20">
            {/* Extremely Subtle Background Glow */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent-blue/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">

                {/* Minimalist Intro Tag */}
                <div className="mb-8">
                    <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-text-secondary text-xs uppercase tracking-[0.2em] font-medium backdrop-blur-md">
                        The 100-Day Acceleration
                    </span>
                </div>

                {/* Massive Apple-style Typography */}
                <h1 className="text-5xl md:text-7xl lg:text-[100px] font-black tracking-[-0.04em] text-white leading-[0.9] mb-8">
                    Stop <span className="text-white/40">Planning.</span><br />
                    Start <span className="gradient-text">Building.</span>
                </h1>

                <p className="text-xl md:text-3xl font-light text-text-secondary max-w-3xl mx-auto mb-20 tracking-tight leading-relaxed">
                    An alternate B-School for Bharat's aspiring founders. We bridge the deadly gaps in <span className="text-white font-medium">Learning</span>, <span className="text-white font-medium">Access</span>, <span className="text-white font-medium">Mentoring</span>, and <span className="text-white font-medium">Community</span>.
                </p>

                {/* Ultra-Clean Comparison Visualizer */}
                <VisionGraphic />

                {/* Primary CTA */}
                <div className="flex flex-col items-center">
                    <Link href="/programs" className="group flex items-center justify-center bg-white text-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                        Explore Programs
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
