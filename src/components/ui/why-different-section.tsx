"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function WhyDifferentSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Parallax effect for the background text glow
    const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.4, 0]);

    const items = [
        "No templates.",
        "No drag & drop.",
        "No guesswork.",
        "No handoffs.",
    ];

    return (
        <section
            ref={containerRef}
            className="relative w-full min-h-screen py-32 bg-black text-white flex flex-col items-center justify-center overflow-hidden"
        >
            {/* Absolute dark void background to ensure deep contrast */}
            <div className="absolute inset-0 bg-[#020202] z-0" />

            {/* Massive subtle background glow tied to scroll */}
            <motion.div
                style={{ y, opacity }}
                className="absolute w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_50%)] rounded-full blur-[100px] z-0 pointer-events-none"
            />

            <div className="container mx-auto px-6 max-w-4xl relative z-10 flex flex-col items-center text-center">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-24 lg:mb-32"
                >
                    <h2 className="text-sm md:text-base tracking-[0.3em] uppercase font-semibold text-white/40">
                        Why Aura Is Different
                    </h2>
                </motion.div>

                {/* Stacked Statements */}
                <div className="flex flex-col gap-6 md:gap-8 mb-24 w-full">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{
                                duration: 1.2,
                                delay: index * 0.2, // Staggered delay
                                ease: [0.16, 1, 0.3, 1]
                            }}
                            className="text-4xl md:text-6xl lg:text-7xl font-display font-light tracking-tight text-white/50"
                        >
                            {item}
                        </motion.div>
                    ))}
                </div>

                {/* The Turn - Climax */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
                    whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{
                        duration: 1.8,
                        delay: items.length * 0.2 + 0.4, // Pauses after the list
                        ease: [0.16, 1, 0.3, 1]
                    }}
                    className="relative mb-20"
                >
                    {/* Deep dynamic climax glow */}
                    <div className="absolute inset-0 bg-[#8000FF]/40 blur-[80px] rounded-full scale-150 transform-gpu" />

                    {/* Core white intense glow */}
                    <div className="absolute inset-0 bg-white/20 blur-[30px] rounded-full scale-110 transform-gpu" />

                    <div className="text-5xl md:text-7xl lg:text-8xl font-display font-medium tracking-tight text-white relative z-10 scale-110 text-shadow-sm">
                        Just intelligence.
                    </div>
                </motion.div>

                {/* Closing micro-statement */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                        duration: 1.5,
                        delay: items.length * 0.15 + 1.2,
                        ease: "easeOut"
                    }}
                    className="w-full flex flex-col items-center opacity-30"
                >
                    <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent mb-8" />
                    <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase font-light text-white italic">
                        The future of web creation isn't manual.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
