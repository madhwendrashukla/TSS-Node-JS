'use client';

import { usePathname } from 'next/navigation';
import { Footer } from './Footer';

const EXCLUDED_FOOTER_PATHS = ['/fundraising-workshop-15apr', '/AI-workshop-15may'];

export default function FooterGate() {
    const pathname = usePathname();
    if (EXCLUDED_FOOTER_PATHS.includes(pathname)) return null;
    return <Footer />;
}
