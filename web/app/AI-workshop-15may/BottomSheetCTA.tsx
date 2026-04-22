'use client';

import { useState, useEffect } from 'react';

export function BottomSheetCTA() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[100] animate-in slide-in-from-bottom-full duration-500">
            <div className="bg-[#8b5cf6] p-2 flex items-center justify-center shadow-[0_-10px_40px_rgba(139,92,246,0.5)]">
                <a
                    href="#pricing"
                    className="bg-white text-slate-900 font-semibold px-8 py-1.5 rounded-full hover:scale-105 active:scale-95 transition-all text-base md:text-lg shadow-[0_4px_15px_rgba(0,0,0,0.1)]"
                >
                    Secure Your Spot
                </a>
            </div>
        </div>
    );
}
