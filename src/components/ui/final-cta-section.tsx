"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export function FinalCtaSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: false, margin: "-100px" });
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section
            ref={containerRef}
            className="relative w-full h-[70vh] min-h-[500px] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#050505] to-black text-white"
        >
            {/* Very subtle radial center glow that expands on CTA hover */}
            <div
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[80px] z-0 pointer-events-none transition-all duration-1000 ease-out ${isHovered ? 'w-[1000px] h-[1000px] bg-[radial-gradient(circle_at_center,rgba(128,0,255,0.08)_0%,transparent_60%)]' : 'w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_60%)]'}`}
            />

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">

                {/* Headline */}
                <motion.h2
                    initial={{ opacity: 0, y: 16 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-4xl md:text-6xl lg:text-7xl font-display font-medium tracking-tight text-white mb-6 max-w-4xl"
                >
                    Ready to Architect the Future?
                </motion.h2>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                    className="text-lg text-white/50 tracking-wide font-light mb-12"
                >
                    Turn intent into intelligent architecture.
                </motion.p>

                {/* Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="relative group cursor-pointer"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Button Outer Glow - very soft */}
                    <div className="absolute -inset-1 bg-[#8000FF]/20 rounded-xl blur-xl opacity-0 transition duration-700 group-hover:opacity-100 z-0 pointer-events-none" />

                    <button className="relative z-10 flex items-center justify-center px-8 py-4 bg-[#0A0A0A] hover:bg-[#0d0d0d] border border-white/10 group-hover:border-[#8000FF]/50 rounded-xl scale-100 group-hover:scale-[1.05] group-hover:shadow-[0_0_40px_rgba(128,0,255,0.2)] transition-all duration-500">
                        <span className={`text-sm font-medium tracking-wide relative z-10 transition-colors duration-500 ${isHovered ? 'text-white' : 'text-white/80'}`}>
                            Initialize Project
                        </span>
                    </button>
                </motion.div>

                {/* Optional Micro Text */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                    className="mt-6 text-[10px] text-white/30 tracking-[0.2em] uppercase font-light"
                >
                    Launch in under 60 seconds.
                </motion.p>
            </div>
        </section>
    );
}
