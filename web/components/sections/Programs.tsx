import Link from 'next/link';

export function Programs() {
    return (
        <section id="programs" className="py-32 w-full bg-bg-main border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-accent-violet text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                        Now Accepting Applications
                    </span>
                    <h2 className="text-3xl md:text-4xl font-black text-white tracking-[-0.04em] mb-5">
                        Programs <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,var(--color-accent-blue),var(--color-accent-violet))]">Launching Soon.</span>
                    </h2>
                </div>


                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-20 items-stretch">

                    {/* Program 1 */}
                    <div className="glass-card hover-glow rounded-[2rem] p-8 sm:p-10 lg:p-14 border border-white/5 flex flex-col justify-between group h-full">
                        <div>
                            <div className="text-accent-blue text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-8">PROGRAM I</div>
                            <h3 className="text-2xl md:text-3xl font-black text-white tracking-[-0.04em] mb-6 leading-tight">The Spark:<br />3-Day Ignition Sprint</h3>
                            <p className="text-text-secondary text-lg leading-relaxed mb-10">
                                Validate your startup idea over one intense weekend with rigorous teardowns and expert mentorship.
                            </p>

                            <div className="w-full h-[1px] bg-white/10 mb-8 max-w-[200px]"></div>

                            <div className="space-y-4 mb-12">
                                <div className="flex items-center text-text-secondary font-medium tracking-wide">
                                    <span className="w-2 h-2 rounded-full bg-accent-blue mr-4"></span> Mumbai
                                </div>
                                <div className="flex items-center text-text-secondary font-medium tracking-wide">
                                    <span className="w-2 h-2 rounded-full bg-accent-blue mr-4"></span> Delhi / NCR
                                </div>
                            </div>
                        </div>
                        <Link href="/#contact" className="w-full text-center bg-white/5 hover:bg-white text-white hover:text-black border border-white/10 font-bold py-4 rounded-xl transition duration-300 backdrop-blur-md">
                            Show your interest
                        </Link>
                    </div>

                    {/* Program 2 */}
                    <div className="glass-card hover-glow rounded-[2rem] p-8 sm:p-10 lg:p-14 border border-accent-violet/30 flex flex-col justify-between group h-full relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-accent-violet/5 to-transparent z-0 pointer-events-none"></div>
                        <div className="relative z-10 flex flex-col h-full">
                            <div>
                                <div className="text-accent-violet text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-8">PROGRAM II</div>
                                <h3 className="text-2xl md:text-3xl font-black text-white tracking-[-0.04em] mb-6 leading-tight">The Transformation:<br />30-Days Deep-Dive</h3>
                                <p className="text-text-secondary text-lg leading-relaxed mb-10">
                                    100-day acceleration packed into 30 days. Build your MVP, secure early customers, and refine your pitch.
                                </p>

                                <div className="w-full h-[1px] bg-white/10 mb-8 max-w-[200px]"></div>

                                <div className="space-y-4 mb-12 flex-grow">
                                    <div className="flex items-center text-white font-medium tracking-wide">
                                        <span className="w-2 h-2 rounded-full bg-accent-violet mr-4 shadow-[0_0_10px_rgba(217,70,239,0.8)]"></span> Mumbai Exclusive
                                    </div>
                                </div>
                            </div>
                            <Link href="/#contact" className="w-full text-center bg-accent-violet hover:bg-white text-white hover:text-black font-bold py-4 rounded-xl transition duration-300 mt-auto">
                                Show your interest
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
