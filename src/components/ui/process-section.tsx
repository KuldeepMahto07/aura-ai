import { motion } from "framer-motion";
import { Brain, Cpu, Rocket } from "lucide-react";

export function ProcessSection() {
    return (
        <div className="w-full py-24 lg:py-40 bg-black text-white relative overflow-hidden">
            {/* Subtle deep background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-[2/1] bg-[radial-gradient(ellipse_at_center,rgba(120,0,255,0.03)_0%,transparent_70%)] rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="flex flex-col items-center justify-center text-center mb-20 lg:mb-32">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl lg:text-5xl tracking-tight font-display text-white mb-6"
                    >
                        From Prompt to Production
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-xl md:text-2xl text-white/50 tracking-wide font-light max-w-2xl"
                    >
                        A single idea is all it takes.<br />
                        Our system handles the rest.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">

                    {/* Card 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="group relative"
                    >
                        {/* Hover Glow Effect */}
                        <div className="absolute -inset-0.5 bg-gradient-to-br from-white/10 to-transparent rounded-[2rem] blur-md opacity-0 group-hover:opacity-100 transition duration-700" />
                        <div className="absolute -inset-0.5 bg-gradient-to-br from-[#8000FF]/20 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition duration-700 blur" />

                        <div className="relative h-full bg-[#050505] border border-white/5 rounded-[2rem] p-10 lg:p-12 transition-colors duration-500 group-hover:bg-[#080808] group-hover:border-white/10 flex flex-col">
                            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 mb-8 group-hover:scale-110 group-hover:border-white/20 transition-all duration-500">
                                <Brain className="w-5 h-5 text-white/80" strokeWidth={1.5} />
                            </div>

                            <h3 className="text-xl font-medium tracking-wide mb-3 text-white">Input Vision</h3>
                            <p className="text-sm text-white/70 leading-relaxed mb-6 font-medium">Describe your idea in one sentence.</p>

                            <div className="space-y-4 flex-grow mb-8">
                                <p className="text-sm text-white/40 leading-relaxed">No forms. No friction. Just intent.</p>
                                <p className="text-sm text-white/40 leading-relaxed">We interpret meaning — not just words.</p>
                            </div>

                            <div className="pt-6 border-t border-white/5 mt-auto">
                                <p className="text-[10px] tracking-widest uppercase text-white/30 font-semibold group-hover:text-white/50 transition-colors duration-500">
                                    Natural language → Structured blueprint
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="group relative"
                    >
                        <div className="absolute -inset-0.5 bg-gradient-to-br from-white/10 to-transparent rounded-[2rem] blur-md opacity-0 group-hover:opacity-100 transition duration-700" />
                        <div className="absolute -inset-0.5 bg-gradient-to-br from-[#8000FF]/20 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition duration-700 blur" />

                        <div className="relative h-full bg-[#050505] border border-white/5 rounded-[2rem] p-10 lg:p-12 transition-colors duration-500 group-hover:bg-[#080808] group-hover:border-white/10 flex flex-col">
                            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 mb-8 group-hover:scale-110 group-hover:border-white/20 transition-all duration-500">
                                <Cpu className="w-5 h-5 text-white/80" strokeWidth={1.5} />
                            </div>

                            <h3 className="text-xl font-medium tracking-wide mb-3 text-white">AI Architects It</h3>
                            <p className="text-sm text-white/70 leading-relaxed mb-6 font-medium">Structure, layout, UX, branding — generated instantly.</p>

                            <div className="space-y-4 flex-grow mb-8">
                                <p className="text-sm text-white/40 leading-relaxed">Thousands of variables processed in parallel to produce a coherent, conversion-ready foundation.</p>
                            </div>

                            <div className="pt-6 border-t border-white/5 mt-auto">
                                <p className="text-[10px] tracking-widest uppercase text-white/30 font-semibold group-hover:text-white/50 transition-colors duration-500">
                                    Parallel layout synthesis + UX optimization
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="group relative"
                    >
                        <div className="absolute -inset-0.5 bg-gradient-to-br from-white/10 to-transparent rounded-[2rem] blur-md opacity-0 group-hover:opacity-100 transition duration-700" />
                        <div className="absolute -inset-0.5 bg-gradient-to-br from-[#8000FF]/20 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition duration-700 blur" />

                        <div className="relative h-full bg-[#050505] border border-white/5 rounded-[2rem] p-10 lg:p-12 transition-colors duration-500 group-hover:bg-[#080808] group-hover:border-white/10 flex flex-col">
                            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 mb-8 group-hover:scale-110 group-hover:border-white/20 transition-all duration-500">
                                <Rocket className="w-5 h-5 text-white/80" strokeWidth={1.5} />
                            </div>

                            <h3 className="text-xl font-medium tracking-wide mb-3 text-white">Launch Instantly</h3>
                            <p className="text-sm text-white/70 leading-relaxed mb-6 font-medium">Deploy globally with one click.</p>

                            <div className="space-y-4 flex-grow mb-8">
                                <p className="text-sm text-white/40 leading-relaxed">Production-grade code. Optimized performance. Live in seconds.</p>
                            </div>

                            <div className="pt-6 border-t border-white/5 mt-auto">
                                <p className="text-[10px] tracking-widest uppercase text-white/30 font-semibold group-hover:text-white/50 transition-colors duration-500">
                                    Global edge deployment
                                </p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
}
