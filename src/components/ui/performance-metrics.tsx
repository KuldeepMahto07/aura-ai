"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation, useSpring } from "framer-motion";

function AnimatedNumber({ value, prefix = "", suffix = "", isDecimal = false }: { value: number; prefix?: string; suffix?: string; isDecimal?: boolean }) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: false, margin: "-100px" });

    // Spring for smooth, decelerating count (cubic-bezier feel)
    const spring = useSpring(0, {
        stiffness: 40,
        damping: 15,
        mass: 1,
        restDelta: 0.001
    });

    useEffect(() => {
        if (inView) {
            spring.set(value);
        }
    }, [inView, spring, value]);

    useEffect(() => {
        return spring.on("change", (latest) => {
            if (ref.current) {
                if (isDecimal) {
                    ref.current.textContent = `${prefix}${latest.toFixed(1)}${suffix}`;
                } else {
                    ref.current.textContent = `${prefix}${Math.round(latest)}${suffix}`;
                }
            }
        });
    }, [spring, prefix, suffix, isDecimal]);

    return <span ref={ref}>{prefix}0{isDecimal ? ".0" : ""}{suffix}</span>;
}

export function PerformanceMetrics() {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: false, margin: "-100px" });

    return (
        <section className="relative w-full py-24 lg:py-40 bg-[url('https://pattern.tailwindcomponents.com/pattern/grid-neutral-800.svg')] bg-[length:40px_40px] bg-black text-white border-t border-white/5 overflow-hidden">

            {/* Dark overlay to soften the grid */}
            <div className="absolute inset-0 bg-black/95 z-0" />

            {/* Subtle central radial glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[40vh] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02)_0%,transparent_60%)] rounded-full blur-3xl z-0 pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10" ref={containerRef}>

                {/* Header */}
                <div className="flex flex-col mb-16 lg:mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-3xl md:text-5xl lg:text-5xl font-display tracking-tight text-white mb-4"
                    >
                        Performance & Intelligence Metrics
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-lg text-white/50 tracking-wide font-light max-w-2xl"
                    >
                        Real-time system diagnostics.
                    </motion.p>
                </div>

                {/* 4-Block Horizontal Display */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">

                    {/* Block 1: System Status */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="bg-[#050505] border border-white/5 rounded-2xl p-8 flex flex-col justify-between h-[200px] relative overflow-hidden group hover:border-white/10 transition-colors duration-500"
                    >
                        <div className="text-[10px] tracking-widest uppercase text-white/40 font-semibold mb-4">System Status</div>

                        <div className="flex items-center gap-4 mt-auto">
                            <div className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-20"></span>
                                <motion.span
                                    animate={{ opacity: [1, 0.4, 1] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.4)]"
                                />
                            </div>
                            <div className="text-4xl lg:text-5xl font-display tracking-tight text-white font-medium">
                                ONLINE
                            </div>
                        </div>

                        <div className="absolute bottom-8 left-8 right-8 h-px bg-white/5 mt-4" />
                        <div className="mt-4 text-xs text-white/40 tracking-wide pt-4 border-t border-white/5">All core modules operational.</div>
                    </motion.div>

                    {/* Block 2: Render Speed */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="bg-[#050505] border border-white/5 rounded-2xl p-8 flex flex-col justify-between h-[200px] relative overflow-hidden group hover:border-white/10 transition-colors duration-500"
                    >
                        <div className="text-[10px] tracking-widest uppercase text-white/40 font-semibold mb-4">Render Speed</div>

                        <div className="flex items-baseline mt-auto">
                            <div className="text-5xl lg:text-6xl font-display tracking-tight text-white font-medium">
                                <AnimatedNumber value={0.8} isDecimal={true} suffix="s" />
                            </div>
                        </div>

                        <div className="mt-4 text-xs text-white/40 tracking-wide pt-4 border-t border-white/5">Average layout synthesis time.</div>
                    </motion.div>

                    {/* Block 3: Optimization Score */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="bg-[#050505] border border-white/5 rounded-2xl p-8 flex flex-col justify-between h-[200px] relative overflow-hidden group hover:border-white/10 transition-colors duration-500"
                    >
                        <div className="text-[10px] tracking-widest uppercase text-white/40 font-semibold mb-4">Optimization Score</div>

                        {/* Thin circular progress arc */}
                        <svg className="absolute top-6 right-6 w-16 h-16 -rotate-90">
                            <circle cx="32" cy="32" r="28" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
                            <motion.circle
                                cx="32" cy="32" r="28" fill="none" stroke="url(#score-gradient)" strokeWidth="2" strokeLinecap="round"
                                strokeDasharray="175.93"
                                initial={{ strokeDashoffset: 175.93 }}
                                animate={isInView ? { strokeDashoffset: 175.93 * 0.02 } : { strokeDashoffset: 175.93 }}
                                transition={{ duration: 2, ease: "easeOut", delay: 0.6 }}
                            />
                            <defs>
                                <linearGradient id="score-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#8000FF" />
                                    <stop offset="100%" stopColor="#ffffff" />
                                </linearGradient>
                            </defs>
                        </svg>

                        <div className="flex items-baseline mt-auto">
                            <div className="text-5xl lg:text-6xl font-display tracking-tight text-white font-medium">
                                <AnimatedNumber value={98} suffix="%" />
                            </div>
                        </div>

                        <div className="mt-4 text-xs text-white/40 tracking-wide pt-4 border-t border-white/5">UX structure efficiency rating.</div>
                    </motion.div>

                    {/* Block 4: Deployment Time */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="bg-[#050505] border border-white/5 rounded-2xl p-8 flex flex-col justify-between h-[200px] relative overflow-hidden group hover:border-white/10 transition-colors duration-500"
                    >
                        <div className="text-[10px] tracking-widest uppercase text-white/40 font-semibold mb-4">Deployment Time</div>

                        <div className="flex items-baseline mt-auto">
                            <div className="text-5xl lg:text-6xl font-display tracking-tight text-white font-medium">
                                <AnimatedNumber value={12} suffix="s" />
                            </div>
                        </div>

                        <div className="mt-4 text-xs text-white/40 tracking-wide pt-4 border-t border-white/5">End-to-end production launch.</div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
