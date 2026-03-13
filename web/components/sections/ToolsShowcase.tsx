"use client";

import React from 'react';
import Link from 'next/link';
import { globalPitchDecksData, GlobalPitchDeck } from '@/lib/data/globalPitchDecks';
import { eventsData, FounderEvent, parseEventStringDates } from '@/lib/data/events';
import { CalendarPlus, ExternalLink } from 'lucide-react';
import { IcsDownloadButton } from '@/components/ecosystem/IcsDownloadButton';

function generateGoogleCalendarUrl(event: FounderEvent) {
    const text = encodeURIComponent(event.eventName);
    const details = encodeURIComponent(`Find out more: ${event.weblink || 'No link provided.'}\n\nDates: ${event.startDate} ${event.month}`);
    const location = encodeURIComponent(`${event.exhibitionCentre}, ${event.location}`);

    const datesInfo = parseEventStringDates(event);
    let datesParam = '';
    if (datesInfo) {
        datesParam = `&dates=${datesInfo.start}/${datesInfo.end}`;
    }

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&details=${details}&location=${location}${datesParam}`;
}

import { InteractiveMarquee } from '../ui/InteractiveMarquee';

function PitchDeckCard({ item }: { item: GlobalPitchDeck }) {
    // Generate a consistent yet colorful gradient based on the company name
    const colors = [
        'from-blue-500 to-indigo-600',
        'from-emerald-400 to-cyan-500',
        'from-amber-400 to-orange-500',
        'from-fuchsia-500 to-pink-600',
        'from-violet-500 to-purple-600',
        'from-rose-400 to-red-500'
    ];
    // Guess domain based on company name
    let domain = item.company.toLowerCase().replace(/[^a-z0-9.-]/g, '');
    if (!domain.includes('.')) {
        domain += '.com';
    }

    return (
        <a href={item.fileUrl} target="_blank" rel="noopener noreferrer" className="flex flex-col flex-shrink-0 w-[85vw] sm:w-[280px] md:w-[320px] h-[280px] mx-2 md:mx-3 glass-card rounded-2xl p-6 bg-bg-surface border border-white/5 hover:border-accent-blue/30 hover:shadow-[0_0_30px_rgba(100,150,255,0.15)] hover:-translate-y-2 transition-all duration-300 ease-out cursor-pointer relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            <div className="flex flex-col h-full relative z-10">
                <div className="flex items-center gap-3 mb-4 shrink-0">
                    <div className={`w-11 h-11 rounded-xl bg-white p-1 flex items-center justify-center overflow-hidden shrink-0 group-hover:shadow-md transition-shadow relative border border-white/10`}>
                        {/* Fetching actual company logo from Google Favicon, fallback to UI avatars */}
                        <img 
                            src={`https://www.google.com/s2/favicons?domain=${domain}&sz=128`} 
                            alt={`${item.company} logo`}
                            className="w-full h-full object-contain"
                            onError={(e) => {
                                // Fallback to initials if image load fails completely
                                const target = e.target as HTMLImageElement;
                                target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(item.company)}&background=random&color=fff&bold=true`;
                            }}
                        />
                    </div>
                    <div className="min-w-0">
                        <h4 className="text-white font-bold text-sm line-clamp-1">{item.company}</h4>
                        <p className="text-accent-blue text-[10px] font-bold tracking-widest uppercase truncate">{item.round} • {item.year}</p>
                    </div>
                </div>

                <div className="mb-3">
                    <p className="text-text-secondary text-xs line-clamp-2">{item.tagline}</p>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4 flex-1 items-start">
                    {item.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-[10px] whitespace-nowrap font-semibold px-2.5 py-1 rounded-full border bg-[#11131a] text-gray-300 border-white/10 shadow-sm">{tag}</span>
                    ))}
                </div>

                <div className="flex items-center gap-2 pt-3 border-t border-white/5 mt-auto shrink-0 text-text-secondary justify-between">
                    <div>
                        <span className="text-white font-bold text-md">{item.raisedThisRound}</span>
                        <span className="text-[10px] ml-1 uppercase tracking-widest font-semibold opacity-70">raised</span>
                    </div>
                    <span className="flex items-center gap-1.5 text-accent-blue text-xs font-semibold group-hover:text-white transition-colors border border-accent-blue/20 bg-accent-blue/10 px-3 py-1.5 rounded-full">
                        <i className="fas fa-file-pdf"></i> View Deck
                    </span>
                </div>
            </div>
        </a>
    );
}

// ─── 2. Event Cards ─────────────────────────────────────────────────
function EventCard({ item }: { item: FounderEvent }) {
    return (
        <a href={"/tools/founder-calendar"} className="flex flex-col flex-shrink-0 w-[85vw] sm:w-[300px] md:w-[340px] h-[360px] mx-2 md:mx-3 glass-card rounded-2xl p-6 bg-bg-surface border border-white/5 hover:border-accent-violet/30 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] hover:-translate-y-2 transition-all duration-300 ease-out cursor-pointer relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-violet/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            <div className="flex flex-col h-full relative z-10">
                <div className="flex items-center gap-3 mb-4 shrink-0">
                    <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center overflow-hidden shrink-0 group-hover:bg-accent-violet/20 transition-colors border border-white/10 group-hover:border-accent-violet/30">
                        <i className="fas fa-calendar-alt text-lg text-accent-violet"></i>
                    </div>
                    <div className="min-w-0">
                        <h4 className="text-white font-bold text-sm line-clamp-2">{item.eventName}</h4>
                    </div>
                </div>
                
                <div className="space-y-2 mb-4 flex-1">
                    <div className="flex items-center gap-2 text-text-secondary text-xs">
                        <i className="fas fa-map-marker-alt w-4 text-center text-accent-violet/70"></i>
                        <span className="line-clamp-1">{item.exhibitionCentre}, {item.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-text-secondary text-xs">
                        <i className="fas fa-clock w-4 text-center text-accent-violet/70"></i>
                        <span>{item.startDate} {item.month}</span>
                    </div>
                </div>

                <div className="mt-auto flex flex-col gap-3 pt-3 border-t border-white/5 w-full">
                    <button
                        onClick={(e) => { e.preventDefault(); window.open(generateGoogleCalendarUrl(item), '_blank'); }}
                        className="w-full flex items-center justify-center gap-2 bg-[linear-gradient(to_right,var(--color-accent-blue),var(--color-accent-violet))] hover:opacity-90 text-white py-2.5 px-4 rounded-xl text-sm font-bold transition-opacity"
                    >
                        <CalendarPlus className="w-4 h-4" />
                        Google Calendar
                    </button>
                    <div className="grid grid-cols-2 gap-3 w-full">
                        <div onClick={(e) => { e.preventDefault(); return false; }} className="w-full h-full"> 
                            {/* Inner wrapper to stop propagation for iCal button internally */}
                            <IcsDownloadButton event={item} />
                        </div>
                        {item.weblink && !item.weblink.includes('gtm.whr.ai') ? (
                            <button
                                onClick={(e) => { e.preventDefault(); window.open(item.weblink, '_blank'); }}
                                className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white py-2.5 px-4 rounded-xl text-sm font-medium transition-colors border border-white/5 hover:border-white/10"
                            >
                                <ExternalLink className="w-4 h-4" />
                                Details
                            </button>
                        ) : (
                            <div className="flex items-center justify-center gap-2 bg-white/5 opacity-50 text-white py-2.5 px-4 rounded-xl text-sm font-medium border border-white/5 cursor-not-allowed">
                                No Link
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </a>
    );
}

// ─── 3. All Tools Marquee Data ──────────────────────────────────────────
const ALL_TOOLS = [
    { name: "Incubators & Accelerators", desc: "An intelligent mapping tool to discover workspaces across the startup landscape.", icon: "fas fa-building", href: "/tools/incubators-accelerators", active: false },
    { name: "Investor Database", desc: "250+ active angels & VCs", icon: "fas fa-hand-holding-usd", href: "/tools/incubator-search/investors", active: false },
    { name: "Grants & Schemes", desc: "Explore government-backed hubs, universities, and pure grants asking for 0% equity.", icon: "fas fa-award", href: "/tools/incubator-search/grants", active: false },
    { name: "Events Calendar", desc: "Top startup summits", icon: "fas fa-calendar-alt", href: "/tools/founder-calendar", active: true },
    { name: "Pitch Deck Library", desc: "Study 35+ funded decks", icon: "fas fa-file-powerpoint", href: "/tools/pitch-decks", active: true },
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
                    <span className="text-[10px] font-bold text-green-400 tracking-widest uppercase border border-green-500/30 bg-green-500/10 px-3 py-1.5 rounded-md self-start mt-1 shadow-[0_0_10px_rgba(34,197,94,0.2)]">Coming Soon</span>
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
    return (
        <>
            {/* 1 & 2. Ecosystem Directories (Combined Pitch Decks & Events) */}
            <section className="pt-8 pb-4 bg-bg-main relative w-full">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-blue/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-accent-violet/5 rounded-full blur-[150px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 relative z-10 mb-3 text-center">
                    <span className="text-accent-blue text-[10px] font-bold tracking-[0.2em] uppercase mb-2 block">Premium Resources</span>
                    <h2 className="text-3xl md:text-4xl font-black text-white tracking-[-0.04em] mb-2">
                        <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,var(--color-accent-blue),var(--color-accent-violet))]">Tools &amp; Resources.</span>
                    </h2>
                    <p className="text-sm md:text-base text-text-secondary font-light max-w-2xl mx-auto">
                        Study the best pitch decks from global unicorns, and discover top B2B events across India.
                    </p>
                </div>

                <div className="mb-3">
                    <InteractiveMarquee speed={Math.max(40, globalPitchDecksData.slice(0, 15).length * 4)}>
                        {globalPitchDecksData.slice(0, 15).map((item, i) => <PitchDeckCard key={`deck-${i}`} item={item} />)}
                    </InteractiveMarquee>
                </div>

                <InteractiveMarquee reverse speed={Math.max(40, 20 * 3)}>
                    {eventsData.slice(0, 20).map((item, i) => <EventCard key={`evt-${i}`} item={item} />)}
                </InteractiveMarquee>

                <div className="mt-4 text-center relative z-10 mb-3">
                    <Link href="/tools" className="group inline-flex items-center gap-3 bg-[linear-gradient(to_right,var(--color-accent-blue),var(--color-accent-violet))] hover:opacity-90 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 shadow-lg shadow-accent-violet/20">
                        Explore all tools <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
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
