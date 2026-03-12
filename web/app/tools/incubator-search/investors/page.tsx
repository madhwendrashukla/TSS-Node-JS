'use client';

import { useState, useMemo, useEffect } from 'react';
import { investorsData, Investor } from '@/lib/data/Investors/investors';
import { Search, MapPin, Globe, Linkedin, Twitter, Filter, ArrowLeft, Briefcase, TrendingUp, X, ExternalLink, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

/* ─── Detail Overlay ────────────────────────────── */
function InvestorDetail({ investor, onClose }: { investor: Investor; onClose: () => void }) {
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', onKey);
        document.body.style.overflow = 'hidden';
        return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
    }, [onClose]);

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
            <div className="absolute inset-0 bg-bg-main/80 backdrop-blur-2xl" />
            <div
                className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] border border-white/10 bg-bg-surface/95 backdrop-blur-xl shadow-2xl animate-in zoom-in-95 fade-in duration-200"
                onClick={e => e.stopPropagation()}
            >
                <button onClick={onClose} className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all">
                    <X size={20} />
                </button>

                <div className="p-8 md:p-12">
                    <div className="flex flex-col md:flex-row gap-8 items-start mb-10">
                        <div className="w-24 h-24 rounded-3xl bg-white flex items-center justify-center overflow-hidden shrink-0 shadow-2xl">
                            {investor.logoUrl ? (
                                <img src={investor.logoUrl} alt={investor.name} className="w-full h-full object-contain p-3" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; (e.target as HTMLImageElement).parentElement!.innerHTML = `<span class="text-3xl font-black text-slate-900">${investor.name.charAt(0)}</span>`; }} />
                            ) : (
                                <span className="text-3xl font-black text-slate-900">{investor.name.charAt(0)}</span>
                            )}
                        </div>
                        <div className="pt-2">
                            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-2">{investor.name}</h2>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">{investor.type}</span>
                                <span className="bg-accent-violet/10 border border-accent-violet/20 text-accent-violet text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">{investor.title}</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-8">
                            <div>
                                <h4 className="text-[10px] font-bold text-text-tertiary tracking-[0.2em] uppercase mb-4">About</h4>
                                <p className="text-white/70 text-base leading-relaxed font-light">{investor.about}</p>
                            </div>
                            <div>
                                <h4 className="text-[10px] font-bold text-text-tertiary tracking-[0.2em] uppercase mb-4">Focus Industries</h4>
                                <div className="flex flex-wrap gap-2">
                                    {investor.industries.map(ind => (
                                        <span key={ind} className="text-[11px] font-bold px-3 py-1.5 rounded-xl border border-white/5 bg-white/5 text-white/80">{ind}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="glass-card p-6 rounded-3xl border border-white/10 bg-white/5">
                                <h4 className="text-[10px] font-bold text-text-tertiary tracking-[0.2em] uppercase mb-4">Investment Strategy</h4>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-white/40">Ideal Stage</span>
                                        <span className="text-white font-bold">{investor.stages.join(' • ')}</span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-white/40">Portfolio Size</span>
                                        <span className="text-white font-bold">{investor.investments || 'N/A'} Companies</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                {investor.socials?.linkedin && <a href={investor.socials.linkedin} target="_blank" className="flex-1 flex items-center justify-center gap-2 bg-[#0077b5] hover:opacity-90 text-white py-3 rounded-2xl text-sm font-bold transition-all"><Linkedin size={18} /> LinkedIn</a>}
                                {investor.socials?.website && <a href={investor.socials.website} target="_blank" className="flex-1 flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white py-3 rounded-2xl text-sm font-bold transition-all border border-white/10"><Globe size={18} /> Website</a>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function InvestorsPage() {
    const [search, setSearch] = useState('');
    const [selectedIndustry, setSelectedIndustry] = useState('All Industries');
    const [selectedInvestor, setSelectedInvestor] = useState<Investor | null>(null);

    const industries = useMemo(() => {
        const ind = new Set<string>();
        investorsData.forEach(inv => inv.industries.forEach(i => ind.add(i)));
        return ['All Industries', ...Array.from(ind).sort()];
    }, []);

    const displayedInvestors = useMemo(() => {
        return investorsData.filter(inv => {
            const matchesSearch = inv.name.toLowerCase().includes(search.toLowerCase()) ||
                inv.about.toLowerCase().includes(search.toLowerCase());
            const matchesIndustry = selectedIndustry === 'All Industries' || inv.industries.includes(selectedIndustry);
            return matchesSearch && matchesIndustry;
        });
    }, [search, selectedIndustry]);

    return (
        <div className="pt-32 pb-20 min-h-screen bg-bg-main relative">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <Link href="/tools" className="inline-flex items-center text-text-tertiary hover:text-white transition-colors mb-8 text-sm group">
                    <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Tools
                </Link>

                <div className="mb-12">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="bg-accent-violet/20 text-accent-violet text-[10px] font-bold px-3 py-1 rounded-full border border-accent-violet/30 uppercase tracking-widest">Premium Database</span>
                        <div className="h-px bg-white/10 w-20"></div>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-white tracking-[-0.04em] mb-6">
                        Investors <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,var(--color-accent-blue),var(--color-accent-violet))]">Match.</span>
                    </h1>
                    <p className="text-xl text-text-secondary font-light max-w-2xl">
                        A curated database of 100+ top-tier VCs, Angel Networks, and Family Offices. Find the right capital for your mission.
                    </p>
                </div>


                {/* Unified Filter Bar */}
                <div className="glass-card p-4 md:p-6 rounded-[2rem] border border-white/10 bg-bg-surface/30 mb-12 flex flex-col lg:flex-row items-stretch lg:items-center gap-4">
                    <div className="flex items-center gap-4 px-4 border-r border-white/10 hidden lg:flex">
                        <Filter size={20} className="text-accent-blue" />
                        <span className="text-xs font-bold text-white uppercase tracking-widest whitespace-nowrap">Source Capital</span>
                    </div>

                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Industry Select */}
                        <div className="relative group">
                            <label className="absolute left-4 -top-2 px-2 bg-[#0A0A0B] text-[10px] font-bold text-text-tertiary uppercase tracking-wider z-20 transition-colors group-focus-within:text-accent-blue">Focus Area</label>
                            <select
                                value={selectedIndustry}
                                onChange={(e) => setSelectedIndustry(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-4 text-sm text-white focus:outline-none focus:border-accent-blue/50 transition-all appearance-none cursor-pointer"
                            >
                                {industries.map(ind => <option key={ind} value={ind} className="bg-bg-surface">{ind}</option>)}
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-text-tertiary">
                                <Search size={16} className="rotate-90" />
                            </div>
                        </div>

                        {/* Search Input */}
                        <div className="relative group">
                            <label className="absolute left-4 -top-2 px-2 bg-[#0A0A0B] text-[10px] font-bold text-text-tertiary uppercase tracking-wider z-20 transition-colors group-focus-within:text-accent-blue">Search Partners</label>
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-text-tertiary group-focus-within:text-accent-blue transition-colors">
                                <Search size={18} />
                            </div>
                            <input
                                type="text"
                                placeholder="Fund name, person, or mandate..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm text-white placeholder:text-text-tertiary focus:outline-none focus:border-accent-blue/50 transition-all"
                            />
                        </div>
                    </div>
                </div>

                {/* Grid Results */}
                <div className="flex items-center justify-between mb-8">
                    <p className="text-text-tertiary text-xs font-bold uppercase tracking-widest">
                        Available Matches: <span className="text-white ml-2">{displayedInvestors.length}</span>
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayedInvestors.map((inv, i) => (
                        <div
                            key={inv.name + i}
                            onClick={() => setSelectedInvestor(inv)}
                            className="glass-card p-8 rounded-3xl border border-white/10 hover:border-accent-blue/40 bg-bg-surface transition-all duration-300 group cursor-pointer flex flex-col relative overflow-hidden h-full"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none"></div>

                            <div className="flex justify-between items-start mb-6">
                                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center overflow-hidden shrink-0 shadow-xl group-hover:scale-110 transition-transform duration-300">
                                    {inv.logoUrl ? (
                                        <img src={inv.logoUrl} alt={inv.name} className="w-full h-full object-contain p-2" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; (e.target as HTMLImageElement).parentElement!.innerHTML = `<span class="text-xl font-bold text-slate-900">${inv.name.charAt(0)}</span>`; }} />
                                    ) : (
                                        <span className="text-xl font-bold text-slate-900">{inv.name.charAt(0)}</span>
                                    )}
                                </div>
                                <span className="text-accent-blue text-[10px] font-bold tracking-widest uppercase bg-accent-blue/10 px-3 py-1 rounded-full border border-accent-blue/20">{inv.type}</span>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-2 leading-tight group-hover:text-accent-blue transition-colors line-clamp-2">{inv.name}</h3>
                            <p className="text-text-secondary text-sm font-light mb-6 line-clamp-2 italic">"{inv.about}"</p>


                            <div className="mt-auto space-y-3 pt-6 border-t border-white/5">
                                <div className="flex items-center justify-between text-xs text-text-tertiary">
                                    <span className="flex items-center gap-2"><Briefcase size={14} /> Stage</span>
                                    <span className="text-white font-bold">{inv.stages.join(' • ')}</span>
                                </div>
                                <div className="flex items-center justify-between text-xs text-text-tertiary">
                                    <span className="flex items-center gap-2"><TrendingUp size={14} /> Focus</span>
                                    <span className="text-white font-bold truncate max-w-[150px]">{inv.industries[0]} & More</span>
                                </div>
                            </div>

                            <div className="mt-8 flex items-center justify-center gap-2 text-accent-blue text-xs font-bold uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                                View Mandate <ArrowUpRight size={14} />
                            </div>
                        </div>
                    ))}

                </div>

                {displayedInvestors.length === 0 && (
                    <div className="glass-card p-20 rounded-[3rem] border border-dashed border-white/10 text-center flex flex-col items-center justify-center min-h-[400px]">
                        <Search size={40} className="text-text-tertiary mb-6 opacity-30" />
                        <h3 className="text-2xl font-bold text-white mb-2">No matching partners</h3>
                        <p className="text-text-secondary font-light">Try expanding your industry focus or search terms.</p>
                    </div>
                )}
            </div>

            {selectedInvestor && (
                <InvestorDetail
                    investor={selectedInvestor}
                    onClose={() => setSelectedInvestor(null)}
                />
            )}
        </div>
    );
}
