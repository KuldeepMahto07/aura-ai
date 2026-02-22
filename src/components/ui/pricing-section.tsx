"use client";

import { motion, useMotionValue, useMotionTemplate } from "framer-motion";

const plans = [
    {
        name: "Starter",
        price: "$19",
        period: "/mo",
        description: "AI-powered generation for individuals.",
        features: [
            "Core layout engine",
            "Standard deployment",
            "Community support",
        ],
        buttonText: "Get Started",
        buttonStyle: "bg-white/5 hover:bg-white/10 text-white border border-white/10",
    },
    {
        name: "Pro",
        price: "$49",
        period: "/mo",
        description: "Optimized for performance and scale.",
        features: [
            "Advanced UX modeling",
            "Conversion intelligence",
            "Custom domain",
            "Priority infrastructure",
        ],
        buttonText: "Upgrade to Pro",
        buttonStyle: "bg-white text-black hover:bg-white/90",
        isPopular: true,
    },
    {
        name: "Enterprise",
        price: "Custom",
        period: "",
        description: "Built for organizations and scale.",
        features: [
            "Dedicated infrastructure",
            "Security & compliance",
            "Custom integrations",
            "SLA-backed support",
        ],
        buttonText: "Contact Sales",
        buttonStyle: "bg-white/5 hover:bg-white/10 text-white border border-white/10",
    },
];

export function PricingSection() {
    return (
        <section className="relative w-full py-24 lg:py-40 bg-black text-white flex flex-col items-center justify-center overflow-hidden">

            {/* Subtle deep background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[50vh] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02)_0%,transparent_60%)] rounded-full blur-[100px] z-0 pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                {/* Header */}
                <div className="flex flex-col items-center justify-center text-center mb-16 lg:mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-3xl md:text-5xl lg:text-5xl tracking-tight font-display text-white mb-4"
                    >
                        Pricing
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-lg md:text-xl text-white/50 tracking-wide font-light max-w-2xl"
                    >
                        Choose your level of intelligence.
                    </motion.p>
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-center max-w-6xl mx-auto mb-16">
                    {plans.map((plan, index) => (
                        <PricingCard key={plan.name} plan={plan} index={index} />
                    ))}
                </div>

                {/* Closing Micro Line */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="flex justify-center"
                >
                    <p className="text-[10px] uppercase tracking-[0.2em] font-light text-white/30">
                        Built for scale. Designed for clarity.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}

function PricingCard({ plan, index }: { plan: any, index: number }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    // Dynamic radial gradient that follows the cursor
    const background = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, ${plan.isPopular ? 'rgba(128,0,255,0.15)' : 'rgba(255,255,255,0.05)'}, transparent 80%)`;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1]
            }}
            className={`relative group flex flex-col h-full ${plan.isPopular ? 'lg:-my-4 z-10' : 'z-0'}`}
            onMouseMove={handleMouseMove}
        >
            {/* Magnetic Glow Border - visible on hover */}
            <motion.div
                className="absolute -inset-[1px] rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none"
                style={{ background }}
            />

            {/* Pro Soft Purple Edge Glow on Hover */}
            {plan.isPopular && (
                <div className="absolute -inset-1 bg-gradient-to-b from-[#8000FF]/30 to-[#8000FF]/5 rounded-[2rem] blur-xl opacity-0 transition duration-700 group-hover:opacity-100 z-0 pointer-events-none scale-95 group-hover:scale-105" />
            )}

            {/* Card Surface */}
            <div
                className={`relative z-10 flex flex-col h-full bg-[#050505] border transition-all duration-500 rounded-[2rem] p-10 lg:p-12 overflow-hidden
                    ${plan.isPopular
                        ? 'border-[#8000FF]/20 group-hover:border-[#8000FF]/40 shadow-[0_0_80px_rgba(128,0,255,0.03)] scale-100 lg:scale-[1.02] group-hover:lg:scale-[1.04]'
                        : 'border-white/5 group-hover:border-white/10 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]'
                    }`}
            >
                {/* Magnetic fill inside card */}
                <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
                    style={{ background, mixBlendMode: "screen" }}
                />

                {plan.isPopular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#0a0a0a] border border-[#8000FF]/30 rounded-full text-[9px] uppercase tracking-widest text-[#8000FF] font-semibold whitespace-nowrap shadow-[0_0_20px_rgba(128,0,255,0.2)] z-10">
                        Most Popular
                    </div>
                )}

                <div className="mb-8 border-b border-white/5 pb-8 relative z-10">
                    <h3 className="text-xl font-medium tracking-wide text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline gap-1 mb-4">
                        <span className="text-4xl md:text-5xl font-display tracking-tight text-white">{plan.price}</span>
                        <span className="text-sm font-medium text-white/40">{plan.period}</span>
                    </div>
                    <p className="text-sm text-white/50 leading-relaxed font-light">{plan.description}</p>
                </div>

                <ul className="flex flex-col gap-4 flex-grow mb-10 relative z-10">
                    {plan.features.map((feature: string, i: number) => (
                        <li key={i} className="flex items-start gap-3">
                            <span className="text-white/30 text-xs mt-1">●</span>
                            <span className="text-sm text-white/70 tracking-wide font-light">{feature}</span>
                        </li>
                    ))}
                </ul>

                <button className={`relative z-10 w-full py-4 rounded-full text-sm font-medium tracking-wide transition-all duration-300 backdrop-blur-md ${plan.buttonStyle}`}>
                    {plan.buttonText}
                </button>
            </div>
        </motion.div>
    );
}
