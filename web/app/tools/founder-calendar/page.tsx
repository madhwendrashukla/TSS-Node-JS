'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { CalendarPlus, MapPin, ExternalLink, Filter, Search, Star, Info, X } from 'lucide-react';
import { eventsData, FounderEvent, parseEventStringDates } from '@/lib/data/events';
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

// Map event names/tags to broad sectors
function getSectorFromEvent(event: FounderEvent): string {
    const name = event.eventName.toLowerCase();

    if (name.includes('tech') || name.includes('ai ') || name.includes('software') || name.includes('data') || name.includes('iot') || name.includes('internet of things') || name.includes('digital') || name.includes('cyber')) return 'Tech & AI';
    if (name.includes('health') || name.includes('medical') || name.includes('pharma') || name.includes('arogya') || name.includes('bio') || name.includes('neuro') || name.includes('radiology')) return 'Healthcare & Lifesciences';
    if (name.includes('auto') || name.includes('motor') || name.includes('ev ') || name.includes('mobility') || name.includes('vehicle')) return 'Automotive & Mobility';
    if (name.includes('startup') || name.includes('fintech') || name.includes('invest') || name.includes('fund') || name.includes('vc') || name.includes('pitch')) return 'Startups & Finance';
    if (name.includes('agri') || name.includes('food') || name.includes('horti') || name.includes('farm') || name.includes('gau')) return 'Agriculture & Food';
    if (name.includes('smart') || name.includes('city') || name.includes('infra') || name.includes('build') || name.includes('construct') || name.includes('real estate')) return 'Infrastructure & Real Estate';
    if (name.includes('manufactur') || name.includes('machine') || name.includes('equip') || name.includes('hardware') || name.includes('tool') || name.includes('plastic') || name.includes('pack') || name.includes('corr') || name.includes('paper') || name.includes('boiler') || name.includes('refractory')) return 'Manufacturing & Materials';
    if (name.includes('retail') || name.includes('fashion') || name.includes('garment') || name.includes('textile') || name.includes('life') || name.includes('wedding') || name.includes('shoe') || name.includes('footwear') || name.includes('sport')) return 'Retail & Lifestyle';
    if (name.includes('travel') || name.includes('tour') || name.includes('hotel') || name.includes('hospitality')) return 'Travel & Hospitality';
    if (name.includes('energy') || name.includes('power') || name.includes('electric') || name.includes('gas') || name.includes('oil')) return 'Energy & Utilities';
    if (name.includes('edu') || name.includes('learn') || name.includes('school')) return 'Education';
    if (name.includes('art') || name.includes('media') || name.includes('content') || name.includes('game') || name.includes('amuse')) return 'Media & Entertainment';

    return 'General B2B';
}

// Basic date parser for formats like "13-15 Mar", "29-Mar", "27 Feb To 1 Mar"
// Defaults to March 2026 if parsing fails so it doesn't break
function parseEventSortDate(event: FounderEvent): Date {
    let year = 2026;
    let monthIdx = 2; // Default Mar
    let day = 1;

    const str = `${event.startDate}`.toLowerCase().trim();
    const monthStr = (event.month || '').toLowerCase();

    // Try to extract year (2024-2027)
    const yearMatch = str.match(/\b(202[4567])\b/);
    if (yearMatch) {
        year = parseInt(yearMatch[1], 10);
    }

    // Identify if it's a "TBA-style" event (no specific day)
    const isExplicitTBA = str.includes('tba') || str.includes('tbd') || monthStr === 'tba';
    
    // Check if there's a day mentioned (ignore the year)
    const allNumbers = str.match(/\d+/g) || [];
    const hasSpecificDay = allNumbers.some(n => n !== year.toString() && n.length <= 2);

    if (isExplicitTBA || !hasSpecificDay) {
        // Use 2099 for sorting but keep month info for filtering
        const monthOrder = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
        for (let i = 0; i < monthOrder.length; i++) {
            if (str.includes(monthOrder[i]) || monthStr.includes(monthOrder[i])) {
                monthIdx = i;
                break;
            }
        }
        return new Date(2099, monthIdx, 31);
    }

    // Extract day
    const dayMatch = allNumbers.find(n => n !== year.toString() && n.length <= 2);
    if (dayMatch) {
        day = parseInt(dayMatch, 10);
    }

    const monthOrder = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
    for (let i = 0; i < monthOrder.length; i++) {
        if (str.includes(monthOrder[i])) {
            monthIdx = i;
            break;
        }
    }

    if (monthIdx === 2 && !str.includes('mar')) {
        for (let i = 0; i < monthOrder.length; i++) {
            if (monthStr.includes(monthOrder[i])) {
                monthIdx = i;
                break;
            }
        }
    }

    return new Date(year, monthIdx, day);
}

export default function FounderCalendar() {
    const [selectedLocation, setSelectedLocation] = useState<string>('All Locations');
    const [selectedSector, setSelectedSector] = useState<string>('All Sectors');
    const [selectedMonth, setSelectedMonth] = useState<string>('All Months');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [showMustAttendOnly, setShowMustAttendOnly] = useState<boolean>(false);

    const mappedEvents = useMemo(() => {
        return eventsData.map(ev => ({
            ...ev,
            sector: getSectorFromEvent(ev),
            parsedDate: parseEventSortDate(ev)
        }));
    }, []);

    const uniqueLocations = useMemo(() => {
        const locs = Array.from(new Set(eventsData.map(e => e.location))).filter(Boolean).sort();
        return ['All Locations', ...locs];
    }, []);

    const uniqueSectors = useMemo(() => {
        const secs = Array.from(new Set(mappedEvents.map(e => e.sector))).filter(Boolean).sort();
        return ['All Sectors', ...secs];
    }, [mappedEvents]);

    const uniqueMonths = useMemo(() => {
        const monthOrder = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const months = Array.from(new Set(eventsData.map(e => e.month))).filter(m => monthOrder.includes(m as string));
        const sortedMonths = months.sort((a, b) => monthOrder.indexOf(a as string) - monthOrder.indexOf(b as string));
        return ['All Months', ...sortedMonths];
    }, []);

    const filteredAndSortedEvents = useMemo(() => {
        // 1. Filter
        let filtered = mappedEvents;

        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonthIdx = now.getMonth(); // 0-indexed

        const monthOrder = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

        // Remove stale events (passed dates or stale TBA)
        filtered = filtered.filter(e => {
            const evYear = e.parsedDate.getFullYear();
            const evMonth = e.parsedDate.getMonth();
            const isTBA = evYear === 2099;

            if (isTBA) {
                const str = `${e.startDate}`.toLowerCase();
                const yearMatch = str.match(/\b(202\d)\b/);
                const tbaYear = yearMatch ? parseInt(yearMatch[1], 10) : 2026;

                if (tbaYear < currentYear) return false;
                if (tbaYear === currentYear && evMonth < currentMonthIdx) return false;
            } else {
                // If the event year is in the past, remove it
                if (evYear < currentYear) return false;
                // If it's the current year but a past month, it should be in 'past' 
                // but the user wants them gone if they are confusing.
                // For safety, let's just make sure they don't show on top.
            }
            return true;
        });
        
        if (selectedLocation !== 'All Locations') {
            filtered = filtered.filter(e => e.location === selectedLocation);
        }
        if (selectedSector !== 'All Sectors') {
            filtered = filtered.filter(e => e.sector === selectedSector);
        }
        if (selectedMonth !== 'All Months') {
            filtered = filtered.filter(e => (e.month || '').toLowerCase() === selectedMonth.toLowerCase());
        }
        if (showMustAttendOnly) {
            filtered = filtered.filter(e => e.priority?.toLowerCase().includes('must attend'));
        }
        if (searchQuery.trim()) {
            const queries = searchQuery.toLowerCase().split(/\s+/).filter(Boolean);
            filtered = filtered.filter(e => {
                const combinedText = `${e.eventName} ${e.location} ${e.sector} ${e.description} ${e.exhibitionCentre} ${e.tag}`.toLowerCase();
                return queries.every(q => combinedText.includes(q));
            });
        }
        // 2. Sort by date proximity
        const nowTime = now.getTime();
        
        // Identify TBA events (year 2099)
        const tbaThreshold = new Date(2098, 0, 1).getTime();
        
        const allUpcoming = filtered.filter(e => e.parsedDate.getTime() >= nowTime);
        
        const upcomingDated = allUpcoming
            .filter(e => e.parsedDate.getTime() < tbaThreshold)
            .sort((a, b) => a.parsedDate.getTime() - b.parsedDate.getTime());
            
        const upcomingTBA = allUpcoming
            .filter(e => e.parsedDate.getTime() >= tbaThreshold)
            .sort((a, b) => a.eventName.localeCompare(b.eventName));

        const past = filtered.filter(e => e.parsedDate.getTime() < nowTime)
            .sort((a, b) => b.parsedDate.getTime() - a.parsedDate.getTime());

        return { upcoming: [...upcomingDated, ...upcomingTBA], past };
    }, [mappedEvents, selectedLocation, selectedSector, selectedMonth, searchQuery, showMustAttendOnly]);

    const EventCard = ({ event, isPast }: { event: ReturnType<typeof getSectorFromEvent> & FounderEvent & { sector: string }, isPast?: boolean }) => {
        const isMustAttend = event.priority?.toLowerCase().includes('must attend');
        
        return (
            <div className={`glass-card p-6 md:p-8 rounded-3xl border border-white/10 hover:border-accent-blue/40 transition-all group flex flex-col bg-bg-surface ${isPast ? 'opacity-60 saturate-50' : ''}`}>
                <div className="flex justify-between items-start mb-6">
                    <div className="flex flex-wrap gap-2">
                        <span className="bg-white/5 border border-white/10 text-text-secondary text-[10px] px-3 py-1 rounded-full uppercase tracking-widest">{event.sector}</span>
                        {isMustAttend && (
                            <span className="bg-red-500/20 border border-red-500/30 text-red-400 text-[10px] px-3 py-1 rounded-full uppercase tracking-widest flex items-center gap-1">
                                <Star className="w-3 h-3 fill-current" />
                                MUST ATTEND
                            </span>
                        )}
                    </div>
                    <span className={`font-bold text-sm px-3 py-1 rounded-full whitespace-nowrap ${isPast ? 'text-gray-400 bg-gray-500/10 border border-gray-500/20' : 'text-accent-blue bg-accent-blue/10 border border-accent-blue/20'}`}>
                        {event.startDate}{String(event.startDate).includes(event.month) ? '' : ` ${event.month}`}
                    </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-accent-blue transition-colors line-clamp-3">{event.eventName}</h3>

                <div className="space-y-4 mb-8 flex-1">
                    <div className="flex items-start gap-2 text-sm text-text-secondary font-light">
                        <MapPin className="w-5 h-5 text-accent-violet shrink-0 mt-0.5" />
                        <span>{event.exhibitionCentre}<br /><span className="text-white/40">{event.location}</span></span>
                    </div>

                    {event.description && (
                        <div className="bg-white/5 border border-white/5 p-4 rounded-xl text-xs text-text-secondary leading-relaxed italic">
                            {event.description}
                        </div>
                    )}
                </div>

                <div className="flex flex-col gap-3 pt-4 border-t border-white/5">
                    <a
                        href={generateGoogleCalendarUrl(event)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 bg-[linear-gradient(to_right,var(--color-accent-blue),var(--color-accent-violet))] hover:opacity-90 text-white py-3 px-4 rounded-xl text-sm font-bold transition-opacity"
                    >
                        <CalendarPlus className="w-4 h-4" />
                        Google Calendar
                    </a>
                    <div className="grid grid-cols-2 gap-3">
                        <IcsDownloadButton event={event} />
                        {event.weblink && event.weblink.length > 5 ? (
                            <a
                                href={event.weblink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white py-2.5 px-4 rounded-xl text-sm font-medium transition-colors border border-white/5 hover:border-white/10"
                            >
                                <ExternalLink className="w-4 h-4" />
                                Details
                            </a>
                        ) : (
                            <div className="flex items-center justify-center gap-2 bg-white/5 opacity-50 text-white py-2.5 px-4 rounded-xl text-sm font-medium border border-white/5 cursor-not-allowed">
                                No Link
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    };

    const hasEvents = filteredAndSortedEvents.upcoming.length > 0 || filteredAndSortedEvents.past.length > 0;

    return (
        <div className="pt-32 pb-20 min-h-screen bg-bg-main relative flex flex-col items-center">
            {/* Extremely Subtle Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-blue/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-6xl relative z-10 w-full">
                <div className="mb-12">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                        <Link href="/tools" className="text-text-secondary hover:text-white transition-colors text-sm font-medium flex items-center gap-2">
                            <span>&larr;</span> Back to Tools
                        </Link>
                        <span className="text-white/20 hidden md:inline">|</span>
                        <span className="bg-accent-violet/20 text-accent-violet text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest border border-accent-violet/30 animate-pulse">New Active Tool</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
                        Founder <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,var(--color-accent-blue),var(--color-accent-violet))]">Events Calendar.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-text-secondary font-light max-w-3xl leading-relaxed">
                        Never miss a crucial opportunity. We've mapped out the highest-leverage B2B events, exhibitions, and networking hubs for this month.
                        Add them to your calendar so you always know where you need to be.
                    </p>
                </div>

                {/* Filters */}
                <div className="glass-card p-4 md:p-6 mb-12 rounded-2xl border border-white/10 flex flex-col gap-6 bg-bg-surface/80 backdrop-blur-md sticky top-24 z-20">
                    <div className="flex flex-col md:flex-row gap-4 items-center w-full">
                        <div className="flex items-center gap-3 text-text-secondary hidden md:flex min-w-fit">
                            <Filter className="w-5 h-5 text-accent-blue" />
                            <span className="font-bold uppercase tracking-widest text-xs">Search & Filter</span>
                            <div className="h-6 w-px bg-white/10 mx-2"></div>
                        </div>

                        {/* Search Bar */}
                        <div className="relative w-full">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                            <input 
                                type="text"
                                placeholder="Search events, locations, keywords..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-accent-blue/50 focus:bg-white/10 transition-all font-light"
                            />
                            {searchQuery && (
                                <button 
                                    onClick={() => setSearchQuery('')}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 hover:text-white text-white/30 transition-colors"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            )}
                        </div>

                        {/* Must Attend Toggle */}
                        <button 
                            onClick={() => setShowMustAttendOnly(!showMustAttendOnly)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-xl border transition-all whitespace-nowrap w-full md:w-auto justify-center ${showMustAttendOnly ? 'bg-red-500/20 border-red-500/50 text-red-400' : 'bg-white/5 border-white/10 text-white/50 hover:bg-white/10'}`}
                        >
                            <Star className={`w-4 h-4 ${showMustAttendOnly ? 'fill-current' : ''}`} />
                            <span className="text-xs font-bold uppercase tracking-widest">Must Attend</span>
                        </button>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 w-full pt-4 border-t border-white/5">
                        <div className="flex-1 w-full">
                            <label className="text-[10px] uppercase tracking-widest text-text-secondary font-bold mb-2 block px-1">Location</label>
                            <select
                                value={selectedLocation}
                                onChange={(e) => setSelectedLocation(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-blue/50 focus:bg-white/10 transition-all font-light appearance-none cursor-pointer"
                            >
                                {uniqueLocations.map(loc => <option key={loc} value={loc} className="bg-bg-surface">{loc}</option>)}
                            </select>
                        </div>
                        <div className="flex-1 w-full">
                            <label className="text-[10px] uppercase tracking-widest text-text-secondary font-bold mb-2 block px-1">Sector</label>
                            <select
                                value={selectedSector}
                                onChange={(e) => setSelectedSector(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-violet/50 focus:bg-white/10 transition-all font-light appearance-none cursor-pointer"
                            >
                                {uniqueSectors.map(sec => <option key={sec} value={sec} className="bg-bg-surface">{sec}</option>)}
                            </select>
                        </div>
                        <div className="flex-1 w-full">
                            <label className="text-[10px] uppercase tracking-widest text-text-secondary font-bold mb-2 block px-1">Month</label>
                            <select
                                value={selectedMonth}
                                onChange={(e) => setSelectedMonth(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-blue/50 focus:bg-white/10 transition-all font-light appearance-none cursor-pointer"
                            >
                                {uniqueMonths.map(m => <option key={m} value={m} className="bg-bg-surface">{m}</option>)}
                            </select>
                        </div>
                    </div>
                </div>

                {!hasEvents && (
                    <div className="text-center py-20 border border-dashed border-white/10 rounded-3xl bg-white/5">
                        <h3 className="text-2xl text-white font-bold mb-2">No events found</h3>
                        <p className="text-text-secondary font-light">Try adjusting your filters to see more results.</p>
                        <button
                            onClick={() => { setSelectedLocation('All Locations'); setSelectedSector('All Sectors'); setSelectedMonth('All Months'); setSearchQuery(''); setShowMustAttendOnly(false); }}
                            className="mt-6 text-accent-blue font-bold tracking-widest uppercase text-sm px-6 py-2 border border-accent-blue/20 rounded-full hover:bg-accent-blue/10 transition-colors"
                        >
                            Reset Filters
                        </button>
                    </div>
                )}

                {hasEvents && (
                    <div className="flex flex-col gap-16">
                        {/* Upcoming Events */}
                        {filteredAndSortedEvents.upcoming.length > 0 && (
                            <div>
                                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                                    <h2 className="text-3xl font-black text-white flex items-center gap-4">
                                        Upcoming Events
                                        <span className="bg-white/10 text-white/50 text-xs px-3 py-1 rounded-full font-medium">{filteredAndSortedEvents.upcoming.length}</span>
                                    </h2>
                                    {selectedMonth === 'All Months' && (
                                        <p className="text-text-secondary text-sm font-light">Sorted by date proximity</p>
                                    )}
                                </div>

                                {selectedMonth === 'All Months' ? (
                                    <div className="space-y-16">
                                        {(() => {
                                            const monthOrder = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "TBA"];
                                            const grouped = filteredAndSortedEvents.upcoming.reduce((acc, event) => {
                                                const m = event.month || 'TBA';
                                                if (!acc[m]) acc[m] = [];
                                                acc[m].push(event);
                                                return acc;
                                            }, {} as Record<string, typeof filteredAndSortedEvents.upcoming>);

                                            return monthOrder
                                                .filter(m => grouped[m] && grouped[m].length > 0)
                                                .map(m => (
                                                    <div key={m}>
                                                        <div className="flex items-center gap-4 mb-8">
                                                            <div className="h-px flex-1 bg-white/5"></div>
                                                            <h3 className="text-xl font-bold text-accent-blue uppercase tracking-[0.3em] px-4">
                                                                {m === 'TBA' ? 'Dates To Be Announced' : `${m} 2026`}
                                                            </h3>
                                                            <div className="h-px flex-1 bg-white/5"></div>
                                                        </div>
                                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                                            {grouped[m].map((event, idx) => (
                                                                <EventCard key={`up-${m}-${idx}`} event={event as any} />
                                                            ))}
                                                        </div>
                                                    </div>
                                                ));
                                        })()}
                                    </div>
                                ) : (
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {filteredAndSortedEvents.upcoming.map((event, idx) => (
                                            <EventCard key={`up-${idx}`} event={event as any} />
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Past Events */}
                        {filteredAndSortedEvents.past.length > 0 && (
                            <div>
                                <h2 className="text-3xl font-black text-white/50 mb-6 flex items-center gap-4">
                                    Past Events
                                    <span className="bg-white/5 border border-white/5 text-white/30 text-xs px-3 py-1 rounded-full font-medium">{filteredAndSortedEvents.past.length}</span>
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {filteredAndSortedEvents.past.map((event, idx) => (
                                        <EventCard key={`past-${idx}`} event={event as any} isPast={true} />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
