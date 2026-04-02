'use client';

import { useState, useEffect } from 'react';
import Script from 'next/script';

export function KickkersGate() {
    const [shouldLoad, setShouldLoad] = useState(false);

    useEffect(() => {
        const load = () => {
            setShouldLoad(true);
            ['touchstart', 'mousemove', 'keydown', 'wheel'].forEach(evt => 
                window.removeEventListener(evt, load)
            );
        };

        ['touchstart', 'mousemove', 'keydown', 'wheel'].forEach(evt => 
            window.addEventListener(evt, load, { passive: true })
        );

        return () => {
            ['touchstart', 'mousemove', 'keydown', 'wheel'].forEach(evt => 
                window.removeEventListener(evt, load)
            );
        };
    }, []);

    if (!shouldLoad) return null;

    return (
        <Script
            src="https://staging.kickkers.com/embed.js"
            data-agent="the-startup-school"
            data-org="kickkers"
            data-key="pk_live_ECitqFT5llOT1FLlcqVpbLxwENZJXHxo"
            strategy="afterInteractive"
        />
    );
}
