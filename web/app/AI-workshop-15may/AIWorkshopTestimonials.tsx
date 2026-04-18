'use client';

import { useState } from 'react';

// Video testimonial data — 2 from Startup Ideation, 2 from Fundraising Masterclass
const testimonials = [
    {
        name: 'Priya Sharma',
        role: 'Early-Stage Founder',
        location: 'Bengaluru',
        workshop: 'Startup Ideation & Validation',
        workshopTag: 'Startup Ideation',
        tagColor: '#8b5cf6',
        quote: '"I came in with 3 vague ideas. By the end of Day 1, I had one validated concept with a real target market. Gaurav\'s ideation framework is unlike anything I\'ve seen in MBA courses — it\'s raw, practical, and it works."',
        avatar: 'PS',
        rating: 5,
        // Placeholder YouTube-style thumbnail using a gradient
        thumbGradient: 'from-[#8b5cf6] to-[#6d28d9]',
        thumbIcon: 'fa-lightbulb',
        videoLabel: 'Startup Ideation Workshop — Priya\'s Story',
    },
    {
        name: 'Rohit Mehta',
        role: 'Product Manager turned Founder',
        location: 'Pune',
        workshop: 'Startup Ideation & Validation',
        workshopTag: 'Startup Ideation',
        tagColor: '#8b5cf6',
        quote: '"The validation framework saved me from building a product nobody wanted. I tested my idea in 48 hours and realized the pivot I needed before spending a single rupee. Worth every second."',
        avatar: 'RM',
        rating: 5,
        thumbGradient: 'from-[#7c3aed] to-[#5b21b6]',
        thumbIcon: 'fa-rocket',
        videoLabel: 'Startup Ideation Workshop — Rohit\'s Story',
    },
    {
        name: 'Ananya Krishnan',
        role: 'Solopreneur',
        location: 'Chennai',
        workshop: 'Fundraising Masterclass',
        workshopTag: 'Fundraising Masterclass',
        tagColor: '#d946ef',
        quote: '"I walked in terrified of investor conversations. After the session on The Narrative, The Numbers, and The Law — I finally understood why my previous pitches failed. I pitch differently now."',
        avatar: 'AK',
        rating: 5,
        thumbGradient: 'from-[#d946ef] to-[#a21caf]',
        thumbIcon: 'fa-indian-rupee-sign',
        videoLabel: 'Fundraising Masterclass — Ananya\'s Story',
    },
    {
        name: 'Karan Sethi',
        role: 'Tech Startup Co-Founder',
        location: 'Delhi',
        workshop: 'Fundraising Masterclass',
        workshopTag: 'Fundraising Masterclass',
        tagColor: '#d946ef',
        quote: '"Gaurav breaks down cap tables and term sheets like nobody else does. We used the pitch structure from this masterclass and got our first angel meeting within 2 weeks."',
        avatar: 'KS',
        rating: 5,
        thumbGradient: 'from-[#c026d3] to-[#86198f]',
        thumbIcon: 'fa-handshake',
        videoLabel: 'Fundraising Masterclass — Karan\'s Story',
    },
];

function VideoCard({ t, i }: { t: typeof testimonials[0]; i: number }) {
    const [played, setPlayed] = useState(false);

    return (
        <div className="bg-[rgba(15,23,42,0.7)] backdrop-blur-[16px] border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 hover:-translate-y-1 group">
            {/* Video Thumbnail */}
            <div
                className={`relative h-44 bg-gradient-to-br ${t.thumbGradient} flex items-center justify-center cursor-pointer overflow-hidden`}
                onClick={() => setPlayed(true)}
            >
                {/* Ambient overlay */}
                <div className="absolute inset-0 bg-black/30" />
                {/* Icon watermark */}
                <i className={`fa-solid ${t.thumbIcon} text-white/10 text-[80px] absolute -bottom-3 -right-3`} />

                {!played ? (
                    <>
                        {/* Play button */}
                        <div className="relative z-10 flex flex-col items-center gap-3">
                            <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                                <i className="fa-solid fa-play text-white text-lg ml-1" />
                            </div>
                            <span className="text-white/80 text-xs font-medium px-3 text-center leading-tight max-w-[160px]">{t.videoLabel}</span>
                        </div>
                        {/* Duration badge */}
                        <span className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">2:14</span>
                    </>
                ) : (
                    <div className="relative z-10 flex flex-col items-center gap-2 text-white/70">
                        <i className="fa-solid fa-video-slash text-3xl" />
                        <span className="text-xs">Video coming soon</span>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-5">
                {/* Workshop tag */}
                <span
                    className="inline-block px-2 py-0.5 text-[10px] font-bold rounded uppercase tracking-widest text-white mb-3"
                    style={{ background: `${t.tagColor}30`, border: `1px solid ${t.tagColor}50`, color: t.tagColor }}
                >
                    {t.workshopTag}
                </span>

                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: t.rating }).map((_, si) => (
                        <i key={si} className="fa-solid fa-star text-amber-400 text-xs" />
                    ))}
                </div>

                {/* Quote */}
                <p className="text-sm text-slate-300 font-light leading-relaxed mb-4 italic">
                    {t.quote}
                </p>

                {/* Person */}
                <div className="flex items-center gap-3 border-t border-white/5 pt-4">
                    <div
                        className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-extrabold text-white shrink-0"
                        style={{ background: `linear-gradient(135deg, ${t.tagColor}, ${t.tagColor}80)` }}
                    >
                        {t.avatar}
                    </div>
                    <div>
                        <p className="text-sm font-bold text-white">{t.name}</p>
                        <p className="text-xs text-slate-500">{t.role} · {t.location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function AIWorkshopTestimonials() {
    return (
        <section className="py-16 md:py-24 relative border-t border-white/5" id="testimonials">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-gradient-to-r from-[#8b5cf6] to-[#d946ef] rounded-full mix-blend-screen filter blur-[160px] opacity-[0.07] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-400 font-medium uppercase tracking-widest mb-5">
                        <i className="fa-solid fa-quote-left text-[#8b5cf6]" /> Student Stories
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
                        Hear it from those who&apos;ve{' '}
                        <span className="bg-gradient-to-r from-[#8b5cf6] to-[#d946ef] bg-clip-text text-transparent">been there</span>
                    </h2>
                    <p className="text-slate-400 text-base md:text-lg font-light max-w-xl mx-auto">
                        Real founders. Real results. From past workshops.
                    </p>
                </div>

                {/* Video cards grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
                    {testimonials.map((t, i) => (
                        <VideoCard key={i} t={t} i={i} />
                    ))}
                </div>

                {/* Aggregate social proof bar */}
                <div className="mt-10 md:mt-14 flex flex-wrap items-center justify-center gap-6 md:gap-12">
                    {[
                        { num: '200+', label: 'Founders Trained' },
                        { num: '4.9★', label: 'Average Rating' },
                        { num: '3', label: 'Live Cohorts Done' },
                    ].map((s, i) => (
                        <div key={i} className="text-center">
                            <div className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-[#8b5cf6] to-[#d946ef] bg-clip-text text-transparent">{s.num}</div>
                            <div className="text-xs text-slate-500 mt-1 font-medium">{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
