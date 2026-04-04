'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export function WorkshopPopup() {
    const [isVisible, setIsVisible] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Trigger sooner (100px) and remove extra interaction checks for reliability
            if (window.scrollY > 100) {
                setIsVisible(true);
                window.removeEventListener('scroll', handleScroll);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        
        // Safety timeout - if they don't scroll but stay for 5 seconds, show it anyway
        const timer = setTimeout(() => {
            setIsVisible(true);
            window.removeEventListener('scroll', handleScroll);
        }, 5000);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timer);
        };
    }, []);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsVisible(false);
        }, 300);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-end justify-center sm:items-center p-0 sm:p-4">
            {/* Backdrop */}
            <div 
                className={`fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'}`}
                onClick={handleClose}
                aria-hidden="true"
            />
            
            {/* Modal */}
            <div 
                className={`relative w-full sm:max-w-md bg-slate-900 border border-white/20 rounded-t-3xl sm:rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden transition-transform duration-300 transform ${isClosing ? 'translate-y-full sm:translate-y-10 sm:scale-95 sm:opacity-0' : 'translate-y-0 sm:scale-100 sm:opacity-100'}`}
                role="dialog"
                aria-modal="true"
            >
                {/* Close Button */}
                <button 
                    onClick={handleClose}
                    className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-20"
                    aria-label="Close"
                >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="px-6 pb-10 pt-12 flex flex-col items-center text-center relative z-10">
                    {/* Animated Icon Container */}
                    <div className="w-24 h-24 mb-8 rounded-3xl bg-gradient-to-br from-[#8b5cf6] to-[#d946ef] flex items-center justify-center relative shadow-[0_0_30px_rgba(139,92,246,0.6)] group">
                        <div className="absolute inset-0 bg-[#8b5cf6] rounded-3xl animate-ping opacity-20 group-hover:animate-none"></div>
                        <i className="fa-solid fa-rocket text-white text-4xl animate-bounce" />
                    </div>

                    {/* Text Content */}
                    <h3 className="text-2xl md:text-4xl font-black text-white mb-4 tracking-tight leading-none px-2">
                        Master the Art of Fundraising
                    </h3>
                    <p className="text-slate-300 mb-10 text-base md:text-lg leading-relaxed max-w-sm font-medium px-4">
                        Join our exclusive, live workshop where we transform passionate builders into investable founders. <span className="text-white bg-white/10 px-1 rounded">Starts 15th April!</span>
                    </p>

                    {/* High-Contrast CTA */}
                    <Link 
                        href="/fundraising-workshop-15apr"
                        className="group/btn relative w-full sm:w-[90%] bg-white text-slate-900 font-extrabold py-5 px-8 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden"
                        onClick={handleClose}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6] to-[#d946ef] opacity-0 group-hover/btn:opacity-10 transition-opacity" />
                        <span className="text-xl">Learn More</span>
                        <i className="fa-solid fa-arrow-right text-lg group-hover/btn:translate-x-1.5 transition-transform" />
                    </Link>
                    
                    <p className="mt-4 text-[10px] uppercase tracking-widest text-slate-500 font-bold">Limited Seats Available</p>
                </div>
            </div>
        </div>
    );
}
