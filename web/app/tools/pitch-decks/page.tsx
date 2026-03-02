import { Metadata } from 'next';
import Link from 'next/link';
import { globalPitchDecksData } from '@/lib/data/globalPitchDecks';

export const metadata: Metadata = {
    title: 'Pitch Deck Repository | The Startup School',
    description: 'Explore the definitive list of winning pitch decks from global unicorns and YC startups.',
};

export default function PitchDecksPage() {
    return (
        <div className="pt-32 pb-20 min-h-screen bg-bg-main relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent-blue/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="mb-12">
                    <Link href="/tools" className="text-text-secondary hover:text-white transition-colors text-sm font-medium tracking-wide flex items-center gap-2 mb-8 w-fit">
                        <span>&larr;</span> Back to Tools
                    </Link>
                    <span className="text-accent-blue text-sm font-bold tracking-[0.2em] uppercase mb-4 block">Ecosystem Assets</span>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                        Pitch Deck <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-violet">Repo.</span>
                    </h1>
                    <p className="text-xl text-text-secondary font-light max-w-2xl">
                        Study the original pitch decks that raised millions for the world's most successful startups.
                        View them instantly or download for offline research.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {globalPitchDecksData.map((deck) => (
                        <Link
                            key={deck.id}
                            href={`/tools/pitch-decks/${deck.id}`}
                            className="glass-card p-6 md:p-8 rounded-3xl border border-white/10 hover:border-accent-blue/50 transition-colors group relative overflow-hidden bg-[#050505] flex flex-col h-full"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none"></div>

                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-accent-blue transition-colors">
                                        {deck.company}
                                    </h3>
                                    <span className="text-xs text-text-tertiary font-mono tracking-wider">{deck.year} • {deck.round}</span>
                                </div>
                                <span className="text-xl font-light text-text-secondary bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                                    {deck.raisedThisRound}
                                </span>
                            </div>

                            <p className="text-text-secondary text-sm leading-relaxed mb-6 font-light italic border-l-2 border-white/10 pl-4">
                                "{deck.tagline}"
                            </p>

                            <div className="mt-auto space-y-4">
                                <div className="flex flex-wrap gap-2">
                                    {deck.tags.slice(0, 3).map(tag => (
                                        <span key={tag} className="text-[10px] text-accent-blue font-mono bg-accent-blue/10 px-2 py-1 rounded uppercase tracking-wider">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-sm">
                                    <span className="text-text-tertiary">Sector: <span className="text-white">{deck.sector}</span></span>
                                    <span className="text-accent-blue font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                                        View PDF <span>&rarr;</span>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
