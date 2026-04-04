'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export function WorkshopPopup() {
    const [isVisible, setIsVisible] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        let hasInteracted = false;
        
        const markInteraction = () => {
            hasInteracted = true;
            ['touchstart', 'mousemove', 'keydown', 'wheel'].forEach(evt => 
                window.removeEventListener(evt, markInteraction)
            );
        };
        
        ['touchstart', 'mousemove', 'keydown', 'wheel'].forEach(evt => 
            window.addEventListener(evt, markInteraction, { passive: true })
        );

        const handleScroll = () => {
            if (hasInteracted && window.scrollY > 300) {
                setIsVisible(true);
                window.removeEventListener('scroll', handleScroll);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            ['touchstart', 'mousemove', 'keydown', 'wheel'].forEach(evt => 
                window.removeEventListener(evt, markInteraction)
            );
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
        <div className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center p-0 sm:p-4">
            {/* Backdrop */}
            <div 
                className={`fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'}`}
                onClick={handleClose}
                aria-hidden="true"
            />
            
            {/* Modal */}
            <div 
                className={`relative w-full sm:max-w-md bg-slate-900 border border-white/10 rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden transition-transform duration-300 transform ${isClosing ? 'translate-y-full sm:translate-y-10 sm:scale-95 sm:opacity-0' : 'translate-y-0 sm:scale-100 sm:opacity-100'}`}
                role="dialog"
                aria-modal="true"
            >
                {/* Close Button */}
                <button 
                    onClick={handleClose}
                    className="absolute top-4 right-4 p-2 bg-white/5 hover:bg-white/10 text-slate-400 rounded-full transition-colors z-10"
                    aria-label="Close"
                >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="px-6 pb-10 pt-10 flex flex-col items-center text-center relative z-0">
                    {/* Animated Icon */}
                    <div className="w-20 h-20 mb-8 rounded-2xl bg-gradient-to-br from-[#8b5cf6] to-[#d946ef] flex items-center justify-center relative shadow-[0_0_20px_rgba(139,92,246,0.5)]">
                        <div className="absolute inset-0 bg-[#8b5cf6] rounded-2xl animate-ping opacity-20"></div>
                        <i className="fa-solid fa-rocket text-white text-3xl animate-bounce" />
                    </div>

                    {/* Text */}
                    <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 tracking-tight">
                        Master the Art of Fundraising
                    </h3>
                    <p className="text-slate-400 mb-10 text-base md:text-lg leading-relaxed max-w-sm font-light">
                        Join our exclusive, live 3-day workshop where we transform builders into investable founders. <span className="text-white font-bold">Secure your seat today!</span>
                    </p>

                    {/* CTA */}
                    <Link 
                        href="/fundraising-workshop-15apr"
                        className="w-full bg-gradient-to-r from-[#8b5cf6] to-[#d946ef] text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_10px_30px_-10px_rgba(217,70,239,0.5)] hover:shadow-[0_15px_35px_-10px_rgba(217,70,239,0.6)] hover:-translate-y-1"
                        onClick={handleClose}
                    >
                        <span className="text-lg">Explore Workshop</span>
                        <i className="fa-solid fa-arrow-right" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
