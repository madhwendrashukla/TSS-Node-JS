import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { WorkshopHero } from './WorkshopHero';
import { WorkshopOutcome } from './WorkshopOutcome';
import { WorkshopWhyUs } from './WorkshopWhyUs';
import { WorkshopCurriculum } from './WorkshopCurriculum';
import { WorkshopMentor, WorkshopProof } from './WorkshopMentor';
import { WorkshopPricing } from './WorkshopPricing';
import { WorkshopFinal } from './WorkshopFinal';

export const metadata: Metadata = {
    title: 'Fundraising Workshop 15 Apr | The Startup School',
    description: 'Stop guessing what investors want. Join the live, cohort-based program that transforms passionate builders into investable founders.',
};

export default function WorkshopPage() {
    return (
        <div className="antialiased relative" style={{ backgroundColor: '#0f172a', color: '#f8fafc', overflowX: 'hidden' }}>
            {/* Grid Background */}
            <div className="fixed inset-0 pointer-events-none z-0" style={{
                backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
                backgroundSize: '30px 30px',
            }} />

            {/* Navigation */}
            <nav className="fixed w-full z-50 bg-[rgba(15,23,42,0.6)] backdrop-blur-[16px] border-b border-white/5 transition-all duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16 md:h-20">
                        <a href="/" className="flex-shrink-0 font-extrabold text-lg md:text-2xl tracking-tight flex items-center gap-2 md:gap-3 hover:opacity-90 transition-opacity">
                            <img src="/logo.png" alt="The Startup School" className="w-7 h-7 md:w-10 md:h-10 rounded-lg shadow-[0_0_15px_rgba(139,92,246,0.5)] object-cover" />
                            <span className="text-base md:text-2xl">The <span className="bg-gradient-to-r from-[#8b5cf6] to-[#d946ef] bg-clip-text text-transparent">Startup</span> School</span>
                        </a>
                        <div>
                            <div className="relative group">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#8b5cf6] to-[#d946ef] rounded-lg blur opacity-30 group-hover:opacity-70 transition duration-300" />
                                <a href="#pricing" className="relative inline-flex items-center justify-center px-4 py-2 md:px-5 md:py-2.5 text-xs md:text-sm font-semibold rounded-lg text-white bg-[#0f172a] border border-white/10 hover:bg-transparent transition-all">
                                    Secure Your Seat
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* All Sections */}
            <WorkshopHero />
            <WorkshopOutcome />
            <WorkshopWhyUs />
            <WorkshopCurriculum />
            <WorkshopMentor />
            <WorkshopProof />
            <WorkshopPricing />
            <WorkshopFinal />


        </div>
    );
}
