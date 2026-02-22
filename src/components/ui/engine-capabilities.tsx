import { motion } from "framer-motion";
import { Activity, LayoutTemplate, Layers, Target, Shield, Globe } from "lucide-react";

const capabilities = [
    {
        title: "Real-Time Rendering",
        description: "Instant interface synthesis powered by parallel computation. Every structural decision rendered in milliseconds.",
        detail: "Live adaptive layout engine",
        icon: Activity,
    },
    {
        title: "Neural Layout Optimization",
        description: "Intelligent hierarchy modeling based on interaction patterns and visual weight analysis.",
        detail: "Dynamic grid refinement",
        icon: LayoutTemplate,
    },
    {
        title: "Autonomous Design System",
        description: "Automatically generated typography scales, spacing systems, and component logic — unified and consistent.",
        detail: "Self-assembling design tokens",
        icon: Layers,
    },
    {
        title: "Built-in Conversion Intelligence",
        description: "Strategic CTA placement and user-flow optimization guided by behavioral data models.",
        detail: "Predictive engagement mapping",
        icon: Target,
    },
    {
        title: "Secure Cloud Deployment",
        description: "Production-grade infrastructure with encrypted pipelines and hardened environments.",
        detail: "Zero-touch provisioning",
        icon: Shield,
    },
    {
        title: "Global Performance Network",
        description: "Edge-distributed delivery architecture ensuring low-latency performance worldwide.",
        detail: "Multi-region edge optimization",
        icon: Globe,
    },
];

export function EngineCapabilities() {
    return (
        <section className="relative w-full py-24 lg:py-40 bg-black text-white overflow-hidden">
            {/* Background Subtle Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03)_0%,transparent_70%)] rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                {/* Optional Enhancement: Small horizontal divider with micro-line */}
                <div className="flex flex-col items-center justify-center text-center mb-16 lg:mb-24">
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="flex items-center gap-4 mb-12 w-full max-w-sm opacity-50"
                    >
                        <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent to-white/20" />
                        <span className="text-[9px] uppercase tracking-[0.3em] font-medium text-white/50 whitespace-nowrap">Intelligence at every layer</span>
                        <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent to-white/20" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl md:text-5xl lg:text-5xl font-display tracking-tight text-white mb-6"
                    >
                        Engine Capabilities
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-lg md:text-xl text-white/50 tracking-wide font-light max-w-2xl"
                    >
                        A modular architecture designed for speed, clarity, and scale.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {capabilities.map((capability, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="group relative"
                        >
                            {/* Outer Glow Effect on Hover */}
                            <div className="absolute -inset-0.5 bg-gradient-to-br from-white/10 to-transparent rounded-3xl blur-md opacity-0 group-hover:opacity-100 transition duration-500" />

                            {/* Card Surface */}
                            <div className="relative h-full bg-[#050505] hover:bg-[#080808] border border-white/5 group-hover:border-white/10 rounded-3xl p-8 lg:p-10 flex flex-col transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-[1.01] overflow-hidden">

                                {/* Soft radial glow behind icon */}
                                <div className="absolute top-0 left-0 w-32 h-32 bg-white/[0.02] group-hover:bg-white/[0.04] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 transition-colors duration-500" />

                                <div className="mb-8 relative">
                                    <capability.icon className="w-6 h-6 text-white/70 group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                                </div>

                                <h3 className="text-xl font-medium tracking-wide mb-4 text-white group-hover:text-white transition-colors duration-500">
                                    {capability.title}
                                </h3>

                                <p className="text-sm text-white/40 leading-relaxed mb-8 font-light flex-grow group-hover:text-white/60 transition-colors duration-500">
                                    {capability.description}
                                </p>

                                <div className="pt-6 border-t border-white/5 mt-auto">
                                    <p className="text-[10px] tracking-[0.2em] uppercase text-white/30 font-semibold group-hover:text-white/50 transition-colors duration-500">
                                        {capability.detail}
                                    </p>
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
