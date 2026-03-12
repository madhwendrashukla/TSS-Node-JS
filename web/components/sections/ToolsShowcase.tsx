"use client";

import React from 'react';
import Link from 'next/link';
import { incubatorsData, Incubator } from '@/lib/data/Incubators and Accelerators/incubators';
import { investorsData, Investor } from '@/lib/data/Investors/investors';

import { InteractiveMarquee } from '../ui/InteractiveMarquee';

function IncubatorLogo({ domain, name }: { domain: string, name: string }) {
    const [errorStage, setErrorStage] = React.useState(0);

    if (!domain || errorStage >= 2) {
        return <span className="text-sm font-black text-slate-900">{name.charAt(0)}</span>;
    }

    const src = errorStage === 0
        ? `https://logo.clearbit.com/${domain}`
        : `https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${domain}&size=128`;

    return (
        <img
            loading="lazy"
            src={src}
            alt={name}
            className="w-full h-full object-contain p-1.5"
            onError={() => setErrorStage(prev => prev + 1)}
        />
    );
}

function IncubatorCard({ item }: { item: Incubator }) {
    let domain = '';
    try {
        if (item.website?.startsWith('http')) {
            domain = new URL(item.website).hostname.replace('www.', '');
        } else if (item.website?.includes('.')) {
            domain = item.website.replace('www.', '');
        } else if (item.contactDetails?.includes('.')) {
            domain = item.contactDetails.replace('www.', '');
        }
    } catch { }

    return (
        <div className="flex flex-col flex-shrink-0 w-[85vw] sm:w-[280px] md:w-[320px] h-[280px] mx-2 md:mx-3 glass-card rounded-2xl p-6 bg-bg-main/60 border border-white/5 hover:border-accent-blue/30 hover:shadow-[0_0_30px_rgba(100,150,255,0.15)] hover:-translate-y-2 transition-all duration-300 ease-out cursor-default relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            <div className="flex flex-col h-full relative z-10">
                <div className="flex items-center gap-3 mb-4 shrink-0">
                    <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center overflow-hidden shrink-0 group-hover:shadow-md transition-shadow">
                        <IncubatorLogo domain={domain} name={item.name} />
                    </div>
                    <div className="min-w-0">
                        <h4 className="text-white font-bold text-sm line-clamp-1">{item.name}</h4>
                        <p className="text-accent-blue text-[10px] font-bold tracking-widest uppercase truncate">{item.location}</p>
                    </div>
                </div>

                <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-text-secondary text-xs line-clamp-1">{item.type}</span>
                    <span className={`text-[10px] whitespace-nowrap font-medium tracking-widest uppercase px-2 py-1 rounded-md border flex-shrink-0 ${item.equityTaken.toLowerCase().includes('nil') || item.equityTaken.toLowerCase().includes('0%') ? 'text-green-400 bg-green-400/10 border-green-400/20' : 'text-amber-400 bg-amber-400/10 border-amber-400/20'}`}>
                        {item.equityTaken}
                    </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs mt-auto mb-4">
                    <div className="bg-white/5 rounded-lg p-2">
                        <p className="text-text-secondary text-[10px] uppercase tracking-wider mb-0.5">Funding</p>
                        <p className="text-white font-semibold text-[11px] leading-tight truncate">{item.fundingSupport}</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-2">
                        <p className="text-text-secondary text-[10px] uppercase tracking-wider mb-0.5">Stage</p>
                        <p className="text-white font-semibold text-[11px] leading-tight truncate">{item.idealStage}</p>
                    </div>
                </div>
                {item.website && (
                    <a href={item.website} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-accent-blue text-xs font-semibold hover:text-white transition-colors w-fit mt-auto"
                        onClick={e => e.stopPropagation()}>
                        <i className="fas fa-external-link-alt text-[10px]"></i> Visit
                    </a>
                )}
            </div>
        </div>
    );
}

// ─── 2. Investor Cards ─────────────────────────────────────────────────
function InvestorCard({ item }: { item: Investor }) {
    return (
        <div className="flex flex-col flex-shrink-0 w-[85vw] sm:w-[280px] md:w-[320px] h-[280px] mx-2 md:mx-3 glass-card rounded-2xl p-6 bg-bg-surface border border-white/5 hover:border-accent-blue/30 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] hover:-translate-y-2 transition-all duration-300 ease-out cursor-default relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-accent-violet/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            <div className="flex flex-col h-full relative z-10">
                <div className="flex items-center gap-3 mb-4 shrink-0">
                    <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center overflow-hidden shrink-0 group-hover:shadow-md transition-shadow">
                        {item.logoUrl ? (
                            <img loading="lazy" src={item.logoUrl} alt={item.name} className="w-full h-full object-contain p-1.5" onError={(e: React.SyntheticEvent<HTMLImageElement>) => { const el = e.target as HTMLImageElement; el.style.display = 'none'; el.parentElement!.innerHTML = `<span class="text-sm font-black text-slate-900">${item.name.charAt(0)}</span>`; }} />
                        ) : (
                            <span className="text-sm font-black text-slate-900">{item.name.charAt(0)}</span>
                        )}
                    </div>
                    <div className="min-w-0">
                        <h4 className="text-white font-bold text-sm line-clamp-1">{item.name}</h4>
                        <p className="text-accent-violet text-[10px] font-bold tracking-widest uppercase truncate">{item.type}</p>
                    </div>
                </div>
                <div className="flex flex-wrap gap-1 mb-3">
                    {item.stages.map(s => (
                        <span key={s} className="text-[10px] whitespace-nowrap font-medium px-2 py-1 rounded-md border bg-accent-blue/10 text-accent-blue border-accent-blue/20">{s}</span>
                    ))}
                </div>
                <div className="flex flex-wrap gap-1 mb-4 flex-1">
                    {item.industries.slice(0, 3).map(ind => (
                        <span key={ind} className="text-[10px] whitespace-nowrap font-medium px-2 py-1 rounded-md border bg-accent-violet/10 text-accent-violet border-accent-violet/20">{ind}</span>
                    ))}
                    {item.industries.length > 3 && (
                        <span className="text-[9px] text-text-secondary py-0.5">+{item.industries.length - 3}</span>
                    )}
                </div>
                {item.investments && (
                    <div className="flex items-center gap-2 pt-3 border-t border-white/5 mt-auto shrink-0 text-text-secondary">
                        <span className="text-white font-bold text-sm">{item.investments}</span>
                        <span className="text-[10px]">investments</span>
                    </div>
                )}
            </div>
        </div>
    );
}

// ─── 3. All Tools Marquee Data ──────────────────────────────────────────
const ALL_TOOLS = [
    { name: "Incubator Search", desc: "Compare 50+ workspaces", icon: "fas fa-building", href: "/tools/incubators-accelerators", active: true },
    { name: "Investor Database", desc: "250+ active angels & VCs", icon: "fas fa-hand-holding-usd", href: "/tools/incubator-search/investors", active: true },
    { name: "Grants & Schemes", desc: "₹50Cr+ zero-equity funding", icon: "fas fa-award", href: "/tools/incubator-search/grants", active: true },
    { name: "Events Calendar", desc: "Top startup summits", icon: "fas fa-calendar-alt", href: "/tools/founder-calendar", active: true },
    { name: "Pitch Deck Library", desc: "Study 35+ funded decks", icon: "fas fa-file-powerpoint", href: "/tools", active: true },
    { name: "Financial Modeler", desc: "Runway projections", icon: "fas fa-chart-line", href: "#", active: false },
    { name: "Cap Table Simulator", desc: "Visualize equity dilution", icon: "fas fa-chart-pie", href: "#", active: false },
];

function BasicToolCard({ item }: { item: typeof ALL_TOOLS[0] }) {
    return (
        <div className={`flex flex-col justify-between flex-shrink-0 w-[85vw] sm:w-[300px] md:w-[360px] h-[180px] mx-2 md:mx-4 glass-card rounded-2xl p-6 border transition-all duration-300 relative overflow-hidden group ${item.active ? 'bg-bg-main/60 border-white/5 hover:border-accent-blue/30 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(100,150,255,0.15)]' : 'bg-[#0F111A] border-green-500/20 cursor-not-allowed border-dashed opacity-80 hover:border-green-500/40'}`}>
            {item.active ? (
                <Link href={item.href} className="absolute inset-0 z-20" />
            ) : null}

            {item.active && (
                <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-accent-violet/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"></div>
            )}
            {!item.active && (
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent pointer-events-none z-0"></div>
            )}

            <div className="flex items-start justify-between relative z-10 w-full shrink-0">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center shadow-lg ${item.active ? 'bg-white text-slate-900 group-hover:scale-105 transition-transform' : 'bg-green-500/20 text-green-400'}`}>
                    <i className={`${item.icon} text-2xl`}></i>
                </div>
                {!item.active && (
                    <span className="text-[10px] font-bold text-green-400 tracking-widest uppercase border border-green-500/30 bg-green-500/10 px-3 py-1.5 rounded-md self-start mt-1">Coming Soon</span>
                )}
            </div>

            <div className="relative z-10 mt-auto">
                <h4 className={`font-black text-xl mb-1.5 tracking-tight truncate ${item.active ? 'text-white' : 'text-green-500/80'}`}>{item.name}</h4>
                <p className={`text-sm truncate ${item.active ? 'text-accent-blue font-bold tracking-widest uppercase text-[11px]' : 'text-green-500/50 font-medium tracking-wide'}`}>{item.desc}</p>
            </div>
        </div>
    );
}

// ─── Main export ───────────────────────────────────────────────────────
export function ToolsShowcase() {
    const incubators = incubatorsData;

    return (
        <>
            {/* 1 & 2. Ecosystem Directories (Combined Incubators & Investors) */}
            <section className="pt-8 pb-4 bg-bg-main relative w-full">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-blue/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-accent-violet/5 rounded-full blur-[150px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 relative z-10 mb-3 text-center">
                    <span className="text-accent-blue text-[10px] font-bold tracking-[0.2em] uppercase mb-2 block">Ecosystem Directories</span>
                    <h2 className="text-3xl md:text-4xl font-black text-white tracking-[-0.04em] mb-2">
                        <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,var(--color-accent-blue),var(--color-accent-violet))]">Investors &amp; Incubators.</span>
                    </h2>
                    <p className="text-sm md:text-base text-text-secondary font-light max-w-2xl mx-auto">
                        A curated, crystal-clear directory of active angels, funds, and top workspaces.
                    </p>
                </div>

                <div className="mb-3">
                    <InteractiveMarquee speed={Math.max(40, incubators.length * 4)}>
                        {incubators.map((item, i) => <IncubatorCard key={`inc-${i}`} item={item} />)}
                    </InteractiveMarquee>
                </div>

                <InteractiveMarquee reverse speed={Math.max(40, 20 * 3)}>
                    {investorsData.slice(0, 20).map((item, i) => <InvestorCard key={`inv-${i}`} item={item} />)}
                </InteractiveMarquee>

                <div className="mt-4 text-center relative z-10 mb-3">
                    <Link href="/tools" className="group inline-flex items-center gap-3 bg-[linear-gradient(to_right,var(--color-accent-blue),var(--color-accent-violet))] hover:opacity-90 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 shadow-lg shadow-accent-violet/20">
                        Explore our all tools <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                    </Link>
                </div>
            </section>

            {/* 3. All Tools Marquee Slider */}
            <section className="pb-8 pt-0 bg-bg-main relative w-full border-b border-white/5">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-green-500/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="relative z-10">
                    <InteractiveMarquee speed={35}>
                        {ALL_TOOLS.map((item, i) => <BasicToolCard key={`tool-${i}`} item={item} />)}
                        {/* Duplicate to ensure enough width for seamless scrolling */}
                        {ALL_TOOLS.map((item, i) => <BasicToolCard key={`tool-dup-${i}`} item={item} />)}
                    </InteractiveMarquee>
                </div>
            </section>
        </>
    );
}
