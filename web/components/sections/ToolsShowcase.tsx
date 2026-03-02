"use client";

import Link from 'next/link';
import { westernLineData } from '@/lib/data/western_line';
import { eventsData } from '@/lib/data/events';
import { pitchDecksData, PitchDeck } from '@/lib/data/pitchDecks';

import { InteractiveMarquee } from '../ui/InteractiveMarquee';
function IncubatorCard({ item }: { item: typeof westernLineData[0] }) {
    return (
        <div className="flex flex-col flex-shrink-0 w-[340px] h-[280px] mx-3 glass-card rounded-2xl p-7 bg-[#0a0a0a]/60 border border-white/5 hover:border-accent-blue/30 hover:shadow-[0_0_30px_rgba(100,150,255,0.15)] hover:-translate-y-2 transition-all duration-300 ease-out cursor-default relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            <div className="flex flex-col h-full relative z-10">
                <div className="flex items-start justify-between mb-3 gap-2">
                    <span className="text-[10px] font-bold text-accent-blue tracking-widest uppercase bg-accent-blue/10 px-2.5 py-1 rounded-full border border-accent-blue/20 flex-shrink-0">
                        {item.subRegion}
                    </span>
                    <span className={`text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full border flex-shrink-0 ${item.equityCategory === 'Zero Equity' ? 'text-green-400 bg-green-400/10 border-green-400/20' : 'text-amber-400 bg-amber-400/10 border-amber-400/20'}`}>
                        {item.equityCategory}
                    </span>
                </div>
                <h4 className="text-white font-bold text-base mb-1 leading-snug line-clamp-1">{item.name}</h4>
                <p className="text-text-secondary text-xs mb-4 leading-relaxed line-clamp-2">{item.type}</p>
                <div className="grid grid-cols-2 gap-2 text-xs mt-auto mb-4">
                    <div className="bg-white/5 rounded-lg p-2">
                        <p className="text-text-secondary text-[10px] uppercase tracking-wider mb-0.5">Funding</p>
                        <p className="text-white font-semibold text-xs leading-tight truncate">{item.fundingGuarantee}</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-2">
                        <p className="text-text-secondary text-[10px] uppercase tracking-wider mb-0.5">Stage</p>
                        <p className="text-white font-semibold text-xs leading-tight truncate">{item.idealStage}</p>
                    </div>
                </div>
                {item.website && (
                    <a href={item.website} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-accent-blue text-xs font-semibold hover:text-white transition-colors w-fit"
                        onClick={e => e.stopPropagation()}>
                        <i className="fas fa-external-link-alt text-[10px]"></i> Visit
                    </a>
                )}
            </div>
        </div>
    );
}

// ─── 2. Investor Cards ─────────────────────────────────────────────────
const INVESTORS = [
    { name: 'Sequoia Capital India', stage: 'Series A → Growth', focus: 'SaaS, FinTech, Consumer', check: '$500K – $10M' },
    { name: 'Accel India', stage: 'Seed → Series B', focus: 'Deep Tech, EdTech, SaaS', check: '$1M – $50M' },
    { name: 'Blume Ventures', stage: 'Pre-Seed → Seed', focus: 'B2B, DeepTech, FinTech', check: '$250K – $2M' },
    { name: 'Nexus Venture Partners', stage: 'Seed → Series A', focus: 'Enterprise SaaS, Consumer', check: '$500K – $5M' },
    { name: 'Kalaari Capital', stage: 'Seed → Series B', focus: 'D2C, HealthTech, B2B', check: '$250K – $3M' },
    { name: 'Matrix Partners India', stage: 'Seed → Series B', focus: 'SaaS, Marketplace, Consumer', check: '$500K – $5M' },
    { name: 'Elevation Capital', stage: 'Pre-Seed → Series C', focus: 'Consumer Internet, FinTech', check: '$1M – $30M' },
    { name: 'India Quotient', stage: 'Pre-Seed → Seed', focus: 'Bharat-first, D2C', check: '₹1Cr – ₹10Cr' },
    { name: 'Lightspeed India', stage: 'Seed → Series B', focus: 'Consumer, Enterprise, FinTech', check: '$1M – $20M' },
    { name: 'Saama Capital', stage: 'Series A → B', focus: 'B2B SaaS, Analytics', check: '$2M – $10M' },
    { name: '100Unicorns', stage: 'Pre-Seed → Seed', focus: 'Sector Agnostic', check: '₹50L – ₹2Cr' },
    { name: 'IIFL Seed Ventures', stage: 'Seed', focus: 'FinTech, B2B Tech', check: '₹1Cr – ₹5Cr' },
];

function InvestorCard({ item }: { item: typeof INVESTORS[0] }) {
    return (
        <div className="flex flex-col flex-shrink-0 w-[320px] h-[280px] mx-3 glass-card rounded-2xl p-7 bg-[#0a0a0a]/60 border border-white/5 hover:border-amber-400/30 hover:shadow-[0_0_30px_rgba(250,200,50,0.15)] hover:-translate-y-2 transition-all duration-300 ease-out cursor-default relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            <div className="flex flex-col h-full relative z-10">
                <div className="w-10 h-10 rounded-full bg-amber-400/10 border border-amber-400/20 flex items-center justify-center mb-4 shrink-0">
                    <i className="fas fa-chart-line text-amber-400 text-sm"></i>
                </div>
                <h4 className="text-white font-bold text-base mb-1 line-clamp-1">{item.name}</h4>
                <p className="text-amber-400 text-[10px] font-bold tracking-widest uppercase mb-3 shrink-0">{item.stage}</p>
                <p className="text-text-secondary text-xs mb-4 leading-relaxed line-clamp-2">{item.focus}</p>
                <div className="bg-white/5 rounded-lg px-3 py-2 mt-auto shrink-0">
                    <p className="text-text-secondary text-[10px] uppercase tracking-wider mb-0.5">Typical Cheque</p>
                    <p className="text-white font-bold text-sm truncate">{item.check}</p>
                </div>
            </div>
        </div>
    );
}

// ─── 3. Grant Cards ────────────────────────────────────────────────────
const GRANTS = [
    { name: 'Startup India Seed Fund', org: 'DPIIT / Govt of India', amount: '₹20 Lakh', type: 'Central Govt' },
    { name: 'BIRAC BIG Grant', org: 'Biotech Industrial Research', amount: '₹50 Lakh', type: 'Biotech' },
    { name: 'NIDHI PRAYAS Grant', org: 'DST / NSTEDB', amount: '₹10 Lakh', type: 'Deep Tech' },
    { name: 'MSME CHAMPIONS', org: 'Ministry of MSME', amount: '₹1 Crore', type: 'MSME' },
    { name: 'Atal Innovation Mission', org: 'NITI Aayog', amount: 'Up to ₹1Cr', type: 'Innovation' },
    { name: 'TIDE 2.0', org: 'MeitY', amount: '₹25 Lakh', type: 'Tech Startup' },
    { name: 'Maharashtra Startup Week', org: 'MahaStartup', amount: '₹10 Lakh', type: 'State Govt' },
    { name: 'Elevate 100', org: 'Govt of Karnataka', amount: '₹50 Lakh', type: 'State Govt' },
    { name: 'NIDHI-TBI Program', org: 'DST India', amount: '₹15 Lakh', type: 'Research' },
    { name: 'Kerala Startup Mission', org: 'KSUM', amount: '₹5 Lakh', type: 'State Govt' },
];

function GrantCard({ item }: { item: typeof GRANTS[0] }) {
    return (
        <div className="flex flex-col flex-shrink-0 w-[320px] h-[280px] mx-3 glass-card rounded-2xl p-7 bg-[#0a0a0a]/60 border border-white/5 hover:border-green-400/30 hover:shadow-[0_0_30px_rgba(70,220,120,0.15)] hover:-translate-y-2 transition-all duration-300 ease-out cursor-default relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-green-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            <div className="flex flex-col h-full relative z-10">
                <div className="flex items-center justify-between mb-4 shrink-0">
                    <span className="text-[10px] font-bold text-green-400 tracking-widest uppercase bg-green-400/10 px-2.5 py-1 rounded-full border border-green-400/20">
                        {item.type}
                    </span>
                    <span className="text-green-400 font-black text-xs shrink-0">0% Equity</span>
                </div>
                <h4 className="text-white font-bold text-base mb-1 leading-snug line-clamp-2">{item.name}</h4>
                <p className="text-text-secondary text-xs mb-4 line-clamp-2">{item.org}</p>
                <div className="bg-green-400/5 border border-green-400/10 rounded-lg px-3 py-2 mt-auto shrink-0">
                    <p className="text-text-secondary text-[10px] uppercase tracking-wider mb-0.5">Grant Amount</p>
                    <p className="text-white font-black text-lg truncate">{item.amount}</p>
                </div>
            </div>
        </div>
    );
}

// ─── 4. Event Cards ───────────────────────────────────────────────────
function EventCard({ item }: { item: typeof eventsData[0] }) {
    return (
        <div className="flex flex-col flex-shrink-0 w-[340px] h-[280px] mx-3 glass-card rounded-2xl p-7 bg-[#0a0a0a]/60 border border-white/5 hover:border-accent-violet/30 hover:shadow-[0_0_30px_rgba(140,80,255,0.15)] hover:-translate-y-2 transition-all duration-300 ease-out cursor-default relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-violet/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            <div className="flex flex-col h-full relative z-10">
                <div className="flex items-center justify-between mb-4 shrink-0">
                    <span className="text-[10px] font-bold text-accent-violet tracking-widest uppercase bg-accent-violet/10 px-2.5 py-1 rounded-full border border-accent-violet/20">
                        {item.tag}
                    </span>
                    <span className="text-text-secondary text-xs shrink-0">{item.startDate} {item.month}</span>
                </div>
                <h4 className="text-white font-bold text-sm mb-2 leading-snug line-clamp-2">{item.eventName}</h4>
                <div className="flex items-center gap-1.5 text-text-secondary text-xs mb-1 mt-auto shrink-0">
                    <i className="fas fa-map-marker-alt text-accent-violet text-[10px] shrink-0"></i>
                    <span className="truncate">{item.location}</span>
                </div>
                <div className="flex items-center gap-1.5 text-text-secondary text-xs shrink-0 mb-4">
                    <i className="fas fa-building text-accent-violet text-[10px] shrink-0"></i>
                    <span className="truncate">{item.exhibitionCentre}</span>
                </div>
                {item.weblink && (
                    <a href={item.weblink} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-accent-violet text-xs font-semibold hover:text-white transition-colors w-fit shrink-0"
                        onClick={e => e.stopPropagation()}>
                        <i className="fas fa-external-link-alt text-[10px]"></i> Event Details
                    </a>
                )}
            </div>
        </div>
    );
}

function PitchDeckCard({ item }: { item: PitchDeck }) {
    return (
        <div className="flex flex-col flex-shrink-0 w-[330px] h-[280px] mx-3 glass-card rounded-2xl p-6 bg-[#0a0a0a]/60 border border-white/5 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:-translate-y-2 transition-all duration-300 ease-out cursor-default relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            <div className="flex flex-col h-full relative z-10">
                <div className="flex items-center gap-3 mb-3 shrink-0">
                    <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                        <i className="fas fa-file-powerpoint text-white/40 text-sm"></i>
                    </div>
                    <div>
                        <h4 className="text-white font-black text-base leading-tight line-clamp-1">{item.company}</h4>
                        <p className="text-text-secondary text-[10px]">{item.sector} · {item.year}</p>
                    </div>
                </div>
                <p className="text-text-secondary text-[11px] leading-relaxed mb-3 line-clamp-4 italic">&ldquo;{item.keyLesson}&rdquo;</p>
                <div className="flex items-center justify-between mt-auto shrink-0">
                    <div className="flex gap-2 flex-wrap">
                        <span className="text-[10px] font-bold text-white/50 tracking-widest uppercase bg-white/5 px-2 py-1 rounded-full border border-white/10">{item.round}</span>
                        <span className="text-[10px] font-bold text-green-400 tracking-widest uppercase bg-green-400/10 px-2 py-1 rounded-full border border-green-400/20">{item.raisedThisRound}</span>
                    </div>
                    <a href={item.sourceUrl} target="_blank" rel="noopener noreferrer"
                        className="text-white/30 hover:text-white text-xs transition-colors ml-2 shrink-0"
                        onClick={e => e.stopPropagation()}>
                        <i className="fas fa-arrow-up-right-from-square text-[10px]"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

// ─── Main export ───────────────────────────────────────────────────────
export function ToolsShowcase() {
    const incubators = westernLineData.slice(0, 20);
    const pitchDecks = pitchDecksData;
    const events = eventsData.slice(0, 30);

    return (
        <>
            {/* 1. Incubator Search */}
            <section className="py-28 bg-bg-main relative overflow-hidden w-full border-t border-white/5">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-blue/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="max-w-7xl mx-auto px-6 relative z-10 mb-16 text-center">
                    <span className="text-accent-blue text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Incubator Search</span>
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-[-0.04em] mb-5">
                        We&apos;ve mapped 50+ top spaces across{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-cyan-400">Mumbai.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-text-secondary font-light max-w-2xl mx-auto">
                        Coworking spaces, accelerators & incubators across West, East, Central, and South Mumbai — compare equity, fees, and funding in one place.
                    </p>
                </div>
                <InteractiveMarquee speed={Math.max(40, incubators.length * 4)}>
                    {incubators.map((item, i) => <IncubatorCard key={`inc-${i}`} item={item} />)}
                </InteractiveMarquee>
                <div className="mt-14 text-center relative z-10">
                    <Link href="/tools/incubator-search/incubators" className="group inline-flex items-center text-accent-blue hover:text-white font-bold text-base transition duration-300">
                        Explore All Incubators <i className="fas fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform"></i>
                    </Link>
                </div>
            </section>

            {/* 2. Investor Match */}
            <section className="py-28 bg-bg-main relative overflow-hidden w-full border-t border-white/5">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-amber-400/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="max-w-7xl mx-auto px-6 relative z-10 mb-16 text-center">
                    <span className="text-amber-400 text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Investor Match</span>
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-[-0.04em] mb-5">
                        150+ Active Investors.{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Zero Noise.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-text-secondary font-light max-w-2xl mx-auto">
                        Discover seed to growth-stage investors matched to your sector, stage, and check size.
                    </p>
                </div>
                <InteractiveMarquee reverse speed={Math.max(40, INVESTORS.length * 4)}>
                    {INVESTORS.map((item, i) => <InvestorCard key={`inv-${i}`} item={item} />)}
                </InteractiveMarquee>
                <div className="mt-14 text-center relative z-10">
                    <Link href="/tools/incubator-search/investors" className="group inline-flex items-center text-amber-400 hover:text-white font-bold text-base transition duration-300">
                        Find Your Investor <i className="fas fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform"></i>
                    </Link>
                </div>
            </section>

            {/* 3. Grants & Schemes */}
            <section className="py-28 bg-bg-main relative overflow-hidden w-full border-t border-white/5">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-400/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="max-w-7xl mx-auto px-6 relative z-10 mb-16 text-center">
                    <span className="text-green-400 text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Grants &amp; Schemes</span>
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-[-0.04em] mb-5">
                        ₹50Cr+ in Funding.{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">0% Equity.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-text-secondary font-light max-w-2xl mx-auto">
                        Government-backed grants, DST schemes, and state-level funding programs — all curated for Indian founders.
                    </p>
                </div>
                <InteractiveMarquee speed={Math.max(40, GRANTS.length * 4)}>
                    {GRANTS.map((item, i) => <GrantCard key={`grant-${i}`} item={item} />)}
                </InteractiveMarquee>
                <div className="mt-14 text-center relative z-10">
                    <Link href="/tools/incubator-search/grants" className="group inline-flex items-center text-green-400 hover:text-white font-bold text-base transition duration-300">
                        Explore All Grants <i className="fas fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform"></i>
                    </Link>
                </div>
            </section>

            {/* 4. Founder Events */}
            <section className="py-28 bg-bg-main relative overflow-hidden w-full border-t border-white/5">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent-violet/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="max-w-7xl mx-auto px-6 relative z-10 mb-16 text-center">
                    <span className="text-accent-violet text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Founder Events Calendar</span>
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-[-0.04em] mb-5">
                        Never Miss an{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-violet to-purple-400">Opportunity.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-text-secondary font-light max-w-2xl mx-auto">
                        A curated monthly list of top B2B events, trade exhibitions, and startup summits across India.
                    </p>
                </div>
                <InteractiveMarquee reverse speed={Math.max(40, events.length * 4)}>
                    {events.map((item, i) => <EventCard key={`ev-${i}`} item={item} />)}
                </InteractiveMarquee>
                <div className="mt-14 text-center relative z-10">
                    <Link href="/tools/founder-calendar" className="group inline-flex items-center text-accent-violet hover:text-white font-bold text-base transition duration-300">
                        View Events Calendar <i className="fas fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform"></i>
                    </Link>
                </div>
            </section>

            {/* 5. Pitch Deck Library — LIVE */}
            <section className="py-28 bg-bg-main relative overflow-hidden w-full border-t border-white/5">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-500/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="max-w-7xl mx-auto px-6 relative z-10 mb-16 text-center">
                    <span className="text-rose-400 text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Pitch Deck Library · India Edition</span>
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-[-0.04em] mb-5">
                        Study How India&apos;s Best{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400">Founders Pitched.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-text-secondary font-light max-w-2xl mx-auto">
                        35+ verified funding stories from Razorpay, CRED, Zerodha, Meesho &amp; more — with the single key lesson from each raise.
                    </p>
                </div>
                <InteractiveMarquee speed={Math.max(40, pitchDecks.length * 4)}>
                    {pitchDecks.map((item, i) => <PitchDeckCard key={`pitch-${i}`} item={item} />)}
                </InteractiveMarquee>
                <div className="mt-14 text-center relative z-10">
                    <Link href="/tools" className="group inline-flex items-center text-rose-400 hover:text-white font-bold text-base transition duration-300">
                        Explore Full Library <i className="fas fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform"></i>
                    </Link>
                </div>
            </section>

            {/* 6. Ultimate Financial Modeler Showcase (Moved to Bottom) */}
            <section className="py-24 bg-[#020202] relative overflow-hidden w-full border-t border-white/5">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-blue/10 via-transparent to-transparent opacity-50 blur-[100px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center justify-center text-center">
                    <span className="text-accent-blue text-xs font-bold tracking-[0.2em] uppercase mb-4 block animate-in fade-in slide-in-from-bottom-4 duration-700">Financial Tooling</span>

                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter mb-6 leading-[1.1]">
                        The Ultimate <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-accent-blue to-accent-violet">Financial Modeler.</span>
                    </h2>

                    <p className="text-lg md:text-xl text-text-secondary font-light max-w-2xl mx-auto mb-12">
                        Build 24-month runway projections in seconds. Toggle between gross MRR growth and custom <strong className="text-white font-medium">Marketing ROI models</strong> (CAC vs LTV). Simulate <strong className="text-white font-medium">Seed Funding Injections</strong> instantly.
                    </p>

                    <div className="relative w-full max-w-5xl aspect-[16/9] mx-auto rounded-xl border border-white/10 overflow-hidden bg-[#050505] shadow-[0_0_50px_rgba(100,150,255,0.1)] group mb-12">
                        {/* A pseudo-UI mock of the modeler for visual flair */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0a]/90 z-10 pointer-events-none"></div>
                        <div className="w-full h-full flex items-end gap-[2px] p-8 pt-24 opacity-60 group-hover:opacity-100 transition-opacity duration-700">
                            {[...Array(24)].map((_, i) => {
                                const val = Math.sin(i * 0.3) * 50 + 50;
                                return (
                                    <div key={i} className="flex-1 rounded-t-sm bg-gradient-to-t from-accent-blue/20 to-accent-blue" style={{ height: `${Math.max(val, 10)}%` }}></div>
                                )
                            })}
                        </div>
                        {/* Overlay text on the fake chart */}
                        <div className="absolute inset-0 flex items-center justify-center z-20">
                            <Link href="/tools/financial-modeler" className="group/btn flex items-center gap-3 bg-white text-black hover:bg-white/90 px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-105">
                                Try Model Free
                                <i className="fas fa-arrow-right group-hover/btn:translate-x-1 transition-transform"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl mx-auto text-left">
                        <div className="glass-card p-4 rounded-xl border border-white/5 bg-white/5">
                            <i className="fas fa-chart-line text-accent-blue mb-2 text-xl block"></i>
                            <h4 className="text-white font-bold text-sm mb-1">True Debt Models</h4>
                            <p className="text-text-secondary text-xs">Exposes negative cash balances</p>
                        </div>
                        <div className="glass-card p-4 rounded-xl border border-white/5 bg-white/5">
                            <i className="fas fa-download text-accent-violet mb-2 text-xl block"></i>
                            <h4 className="text-white font-bold text-sm mb-1">CSV Exports</h4>
                            <p className="text-text-secondary text-xs">Instantly export to Excel/VCs</p>
                        </div>
                        <div className="glass-card p-4 rounded-xl border border-white/5 bg-white/5">
                            <i className="fas fa-bullseye text-amber-500 mb-2 text-xl block"></i>
                            <h4 className="text-white font-bold text-sm mb-1">Marketing ROI Engine</h4>
                            <p className="text-text-secondary text-xs">CAC & ARPA based growth</p>
                        </div>
                        <div className="glass-card p-4 rounded-xl border border-white/5 bg-white/5">
                            <i className="fas fa-money-bill-wave text-green-500 mb-2 text-xl block"></i>
                            <h4 className="text-white font-bold text-sm mb-1">Funding Simulator</h4>
                            <p className="text-text-secondary text-xs">Inject capital &amp; see runway</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Cap Table Simulator (New) */}
            <section className="py-24 bg-[#0a0a0a] relative overflow-hidden w-full border-t border-white/5">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-violet/10 via-transparent to-transparent opacity-50 blur-[100px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center justify-center text-center">
                    <span className="text-accent-violet text-xs font-bold tracking-[0.2em] uppercase mb-4 block animate-in fade-in slide-in-from-bottom-4 duration-700">Equity &amp; Cap Table</span>

                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter mb-6 leading-[1.1]">
                        Interactive <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-violet via-fuchsia-400 to-pink-400">Cap Table Simulator.</span>
                    </h2>

                    <p className="text-lg md:text-xl text-text-secondary font-light max-w-2xl mx-auto mb-12">
                        Founders constantly screw up their equity math. Simulate your Seed Round, model the standard 10% Option Pool expansion, and visualize exactly how much of your company you&apos;re giving away before you sign the term sheet.
                    </p>

                    <div className="relative w-full max-w-5xl aspect-[16/9] mx-auto rounded-xl border border-white/10 overflow-hidden bg-[#050505] shadow-[0_0_50px_rgba(200,100,255,0.1)] group mb-12 flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-tr from-accent-violet/5 to-transparent pointer-events-none"></div>
                        <div className="flex gap-8 items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity duration-700 w-full h-full p-12">
                            <div className="w-48 h-48 rounded-full border-[16px] border-[#6496ff] relative">
                                <div className="absolute inset-[-16px] border-[16px] border-[#8b5cf6] rounded-full" style={{ clipPath: 'polygon(50% 50%, 100% 0, 100% 100%, 50% 100%)' }}></div>
                            </div>
                            <div className="w-48 h-48 rounded-full border-[16px] border-[#6496ff] relative">
                                <div className="absolute inset-[-16px] border-[16px] border-[#8b5cf6] rounded-full" style={{ clipPath: 'polygon(50% 50%, 100% 0, 100% 100%, 50% 100%)' }}></div>
                                <div className="absolute inset-[-16px] border-[16px] border-[#10b981] rounded-full" style={{ clipPath: 'polygon(50% 50%, 0 100%, 0 0)' }}></div>
                            </div>
                        </div>

                        {/* Overlay button */}
                        <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/40 group-hover:bg-black/20 transition-colors">
                            <Link href="/tools/cap-table-simulator" className="group/btn flex items-center gap-3 bg-white text-black hover:bg-white/90 px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-105">
                                Simulate Round
                                <i className="fas fa-arrow-right group-hover/btn:translate-x-1 transition-transform"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl mx-auto text-left">
                        <div className="glass-card p-4 rounded-xl border border-white/5 bg-white/5">
                            <i className="fas fa-chart-pie text-accent-violet mb-2 text-xl block"></i>
                            <h4 className="text-white font-bold text-sm mb-1">Dynamic Pie Charts</h4>
                            <p className="text-text-secondary text-xs">Visualize pre and post-money slices.</p>
                        </div>
                        <div className="glass-card p-4 rounded-xl border border-white/5 bg-white/5">
                            <i className="fas fa-shield-alt text-red-500 mb-2 text-xl block"></i>
                            <h4 className="text-white font-bold text-sm mb-1">Wipeout Protection</h4>
                            <p className="text-text-secondary text-xs">Alerts on &gt;100% dilution.</p>
                        </div>
                        <div className="glass-card p-4 rounded-xl border border-white/5 bg-white/5">
                            <i className="fas fa-users text-accent-blue mb-2 text-xl block"></i>
                            <h4 className="text-white font-bold text-sm mb-1">Option Pool Logic</h4>
                            <p className="text-text-secondary text-xs">Accurate &quot;Option Pool Shuffle&quot;.</p>
                        </div>
                        <div className="glass-card p-4 rounded-xl border border-white/5 bg-white/5">
                            <i className="fas fa-file-csv text-green-400 mb-2 text-xl block"></i>
                            <h4 className="text-white font-bold text-sm mb-1">Impact Reports</h4>
                            <p className="text-text-secondary text-xs">Download detailed CSV breakdown.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
