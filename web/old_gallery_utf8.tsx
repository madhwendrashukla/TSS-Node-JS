"use client";

import Link from "next/link";

export function VideoAndGallery() {
    return (
        <>
            {/* ΓöÇΓöÇ Video Section ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ */}
            <section className="py-28 bg-bg-main relative w-full border-t border-white/5">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-accent-violet/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-5xl mx-auto px-6 relative z-10">
                    {/* Header */}
                    <div className="text-center mb-14">
                        <span className="text-accent-blue text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                            Upcoming Highlights
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-white tracking-[-0.04em] mb-5">
                            Preparing You for{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r bg-[linear-gradient(to_right,var(--color-accent-blue),var(--color-accent-violet))]">
                                Your Next Round.
                            </span>
                        </h2>
                        <p className="text-lg text-text-secondary font-light max-w-xl mx-auto">
                            Intensive sessions deep diving into the metrics and narratives that matter.
                        </p>
                    </div>

                    {/* Fundraising Highlight */}
                    <div className="relative rounded-3xl overflow-hidden border border-accent-blue/20 shadow-2xl shadow-accent-blue/10 bg-gradient-to-br from-bg-main/60 to-bg-main/20 backdrop-blur-md p-10 md:p-16 text-center max-w-4xl mx-auto group">
                        <div className="absolute inset-0 bg-white/5 opacity-10 group-hover:opacity-20 transition-opacity duration-700"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/80 to-transparent"></div>
                        <div className="relative z-10 flex flex-col items-center">
                            <div className="w-16 h-16 rounded-2xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center mb-6 text-accent-blue">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rocket"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 3.82-13 1.5 1.5 0 0 1 2.18 2.18A22 22 0 0 1 12 15Z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></svg>
                            </div>
                            <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6">
                                The Ultimate <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,var(--color-accent-blue),var(--color-accent-violet))]">Fundraising Bootcamps.</span>
                            </h3>
                            <p className="text-lg text-text-secondary md:text-xl font-light max-w-2xl mx-auto mb-10">
                                Master the art of the pitch, structuring your round, and closing term sheets with top Indian angels and VCs. Coming this quarter.
                            </p>
                            <Link href="/programs" className="bg-white text-black px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:scale-105 inline-flex items-center">
                                Join the Waitlist <i className="fas fa-arrow-right ml-3 text-xs"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
