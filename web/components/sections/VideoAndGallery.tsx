

import Link from "next/link";
import { WorkshopPreview } from "./WorkshopPreview";

export function VideoAndGallery() {
    return (
        <>
            {/* ── Video Section ───────────────────────────────────────────── */}
            <section className="py-28 bg-bg-main relative w-full border-t border-white/5">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-accent-violet/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">
                    {/* Header Removed as requested */}

                    {/* Fundraising Workshop Detailed Preview */}
                    <div className="mt-8">
                        <WorkshopPreview />
                    </div>
                </div>
            </section>
        </>
    );
}
