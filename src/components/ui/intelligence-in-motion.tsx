"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";

function TypingLine({ text, show, cursor = true }: { text: string; show: boolean; cursor?: boolean }) {
    if (!show) return null;
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center text-[#B4B4B4] font-mono text-sm tracking-wide leading-relaxed"
        >
            <span className="mr-2 text-[#8000FF]">❯</span>
            <span>{text}</span>
            {cursor && (
                <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="ml-1 w-2 h-4 bg-white/50 block"
                />
            )}
        </motion.div>
    );
}

export function IntelligenceInMotion() {
    const [step, setStep] = useState(-1);
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: false, amount: 0.3 });

    useEffect(() => {
        if (!isInView) {
            setStep(-1); // Reset when out of view
            return;
        }

        // Sequence of animations
        const sequence = async () => {
            setStep(0); // Interpreting intent...
            await new Promise((r) => setTimeout(r, 1200));

            setStep(1); // Generating layout structure...
            await new Promise((r) => setTimeout(r, 1800));

            setStep(2); // Optimizing visual hierarchy...
            await new Promise((r) => setTimeout(r, 1500));

            setStep(3); // Enhancing UX flow...
            await new Promise((r) => setTimeout(r, 1500));

            setStep(4); // Deploy-ready configuration complete.
            await new Promise((r) => setTimeout(r, 1000));

            setStep(5); // Show "Built in 3.2 seconds"
        };

        sequence();
    }, [isInView]);

    return (
        <section className="relative w-full py-32 bg-black overflow-hidden flex flex-col items-center">
            {/* Background Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_60%)] blur-[100px] pointer-events-none" />

            {/* Header */}
            <div className="text-center z-10 mb-16 relative">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-3xl md:text-5xl lg:text-5xl font-display font-medium text-white mb-4 tracking-tight"
                >
                    Watch Intelligence in Motion
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-white/50 text-lg tracking-wide max-w-xl mx-auto"
                >
                    See raw intent evolve into structured digital architecture.
                    <br />
                    No templates. No manual assembly.
                    <br />
                    Just intelligence applied in real time.
                </motion.p>
            </div>

            {/* Main Container */}
            <div
                ref={containerRef}
                className="relative z-10 w-full max-w-6xl mx-auto px-6"
            >
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 bg-[#050505] border border-white/10 rounded-3xl p-6 lg:p-10 shadow-[0_0_80px_rgba(255,255,255,0.03)] backdrop-blur-xl">

                    {/* Left Console */}
                    <div className="w-full lg:w-1/3 flex flex-col justify-center gap-4 bg-[#0a0a0a] rounded-2xl p-8 border border-white/5 font-mono shadow-inner relative overflow-hidden h-[400px]">
                        {/* Background processing grid that pulses on step 1 */}
                        <motion.div
                            animate={{ opacity: step === 1 ? 0.4 : 0 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"
                        />
                        <motion.div
                            animate={{ opacity: step === 1 ? [0, 0.2, 0] : 0 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-0 bg-[#8000FF]/5 pointer-events-none blur-xl"
                        />

                        {/* Subtle scanline sweep */}
                        <motion.div
                            animate={{ y: step === 1 ? ['0%', '100%'] : '0%', opacity: step === 1 ? 0.3 : 0 }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                            className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#8000FF] to-transparent pointer-events-none blur-[1px]"
                        />

                        <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] pointer-events-none opacity-20" />

                        <div className="text-xs text-[#555] mb-4 tracking-widest uppercase relative z-10">System Log</div>

                        <div className="flex flex-col gap-3 relative z-10">
                            <TypingLine text="Interpreting intent..." show={step >= 0} cursor={step === 0} />
                            <TypingLine text="Generating layout structure..." show={step >= 1} cursor={step === 1} />
                            <TypingLine text="Optimizing visual hierarchy..." show={step >= 2} cursor={step === 2} />
                            <TypingLine text="Enhancing UX flow..." show={step >= 3} cursor={step === 3} />
                            <TypingLine text="Deploy-ready configuration complete." show={step >= 4} cursor={step === 4 && step < 5} />
                        </div>

                        <AnimatePresence>
                            {step >= 5 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                    className="mt-8 pt-4 border-t border-white/10 text-xs font-sans text-white/50 tracking-widest uppercase flex items-center gap-2 relative z-10"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)] cursor-default">
                                        <motion.div animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 2, repeat: Infinity }} className="w-full h-full bg-green-500 rounded-full" />
                                    </span>
                                    Built in 3.2 seconds
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Right Visualizer */}
                    <div className="w-full lg:w-2/3 bg-[#0c0c0c] border border-white/5 rounded-2xl relative overflow-hidden h-[400px] flex items-center justify-center p-8 perspective-1000">

                        <AnimatePresence mode="popLayout">
                            {/* Step 1 & 2: Wireframe Phase */}
                            {step >= 1 && step < 4 && (
                                <motion.div
                                    key="wireframe"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, filter: "blur(10px)", scale: 1.05 }}
                                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    className="w-full max-w-md flex flex-col gap-6"
                                >
                                    {/* Header Wireframe */}
                                    <div className="flex justify-between items-center w-full border-b border-white/10 pb-4">
                                        <motion.div
                                            initial={{ width: 40, border: "1px solid rgba(255,255,255,0.2)", backgroundColor: "transparent" }}
                                            animate={{
                                                width: step >= 2 ? 60 : 40,
                                                backgroundColor: step >= 2 ? "rgba(255,255,255,0.1)" : "transparent",
                                                border: step >= 2 ? "1px solid transparent" : "1px solid rgba(255,255,255,0.2)"
                                            }}
                                            className="h-6 rounded-md transition-all duration-700"
                                        />
                                        <div className="flex gap-4">
                                            <motion.div
                                                className="h-4 w-12 rounded transition-all duration-700"
                                                initial={{ border: "1px solid rgba(255,255,255,0.2)", backgroundColor: "transparent" }}
                                                animate={{
                                                    opacity: step >= 2 ? 0.8 : 0.8,
                                                    backgroundColor: step >= 2 ? "rgba(255,255,255,0.05)" : "transparent",
                                                    border: step >= 2 ? "1px solid transparent" : "1px solid rgba(255,255,255,0.2)"
                                                }}
                                            />
                                            <motion.div
                                                className="h-4 w-12 rounded transition-all duration-700"
                                                initial={{ border: "1px solid rgba(255,255,255,0.2)", backgroundColor: "transparent" }}
                                                animate={{
                                                    opacity: step >= 2 ? 0.8 : 0.8,
                                                    backgroundColor: step >= 2 ? "rgba(255,255,255,0.05)" : "transparent",
                                                    border: step >= 2 ? "1px solid transparent" : "1px solid rgba(255,255,255,0.2)"
                                                }}
                                            />
                                        </div>
                                    </div>

                                    {/* Hero Wireframe */}
                                    <div className="flex flex-col items-center gap-4 mt-4">
                                        <motion.div
                                            initial={{ border: "1px solid rgba(255,255,255,0.2)", backgroundColor: "transparent" }}
                                            animate={{
                                                width: step >= 2 ? "80%" : "60%",
                                                height: step >= 2 ? 32 : 24,
                                                marginBottom: step >= 3 ? 16 : 0,
                                                backgroundColor: step >= 2 ? "rgba(255,255,255,0.1)" : "transparent",
                                                border: step >= 2 ? "1px solid transparent" : "1px solid rgba(255,255,255,0.2)"
                                            }}
                                            className="rounded-lg transition-all duration-1000"
                                        />
                                        <motion.div
                                            initial={{ width: "95%", height: 16, border: "1px solid rgba(255,255,255,0.2)", backgroundColor: "transparent" }}
                                            animate={{
                                                backgroundColor: step >= 2 ? "rgba(255,255,255,0.05)" : "transparent",
                                                border: step >= 2 ? "1px solid transparent" : "1px solid rgba(255,255,255,0.2)"
                                            }}
                                            className="rounded transition-all duration-1000"
                                        />
                                        <motion.div
                                            initial={{ width: "70%", height: 16, border: "1px solid rgba(255,255,255,0.2)", backgroundColor: "transparent" }}
                                            animate={{
                                                marginBottom: step >= 3 ? 24 : 8,
                                                backgroundColor: step >= 2 ? "rgba(255,255,255,0.05)" : "transparent",
                                                border: step >= 2 ? "1px solid transparent" : "1px solid rgba(255,255,255,0.2)"
                                            }}
                                            className="rounded transition-all duration-1000"
                                        />

                                        {/* Buttons */}
                                        <div className="flex gap-4">
                                            <motion.div
                                                initial={{ border: "1px solid rgba(255,255,255,0.2)", backgroundColor: "transparent" }}
                                                animate={{
                                                    width: step >= 3 ? 140 : 100,
                                                    height: step >= 3 ? 48 : 36,
                                                    backgroundColor: step >= 3 ? "rgba(255,255,255,0.2)" : (step >= 2 ? "rgba(255,255,255,0.1)" : "transparent"),
                                                    border: step >= 2 ? "1px solid transparent" : "1px solid rgba(255,255,255,0.2)"
                                                }}
                                                className="rounded-full transition-all duration-1000"
                                            />
                                            <motion.div
                                                initial={{ border: "1px solid rgba(255,255,255,0.2)", backgroundColor: "transparent" }}
                                                animate={{
                                                    width: step >= 3 ? 140 : 100,
                                                    height: step >= 3 ? 48 : 36,
                                                    backgroundColor: step >= 2 ? "rgba(255,255,255,0.05)" : "transparent",
                                                    border: step >= 2 ? "1px solid transparent" : "1px solid rgba(255,255,255,0.2)"
                                                }}
                                                className="rounded-full transition-all duration-1000"
                                            />
                                        </div>
                                    </div>

                                    {/* Content Blocks (Slide in on step 3) */}
                                    <div className="grid grid-cols-3 gap-4 mt-8">
                                        {[1, 2, 3].map((i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, y: 20, border: "1px solid rgba(255,255,255,0.2)", backgroundColor: "transparent" }}
                                                animate={{
                                                    opacity: step >= 3 ? 1 : 0.3,
                                                    y: step >= 3 ? 0 : 10,
                                                    height: step >= 3 ? 80 : 60,
                                                    backgroundColor: step >= 3 ? "rgba(255,255,255,0.05)" : "transparent",
                                                    border: step >= 3 ? "1px solid rgba(255,255,255,0.05)" : "1px solid rgba(255,255,255,0.2)"
                                                }}
                                                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                                className="rounded-xl"
                                            />
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {/* Step 4+: High Fidelity Rendered UI */}
                            {step >= 4 && (
                                <motion.div
                                    key="rendered"
                                    initial={{ opacity: 0, filter: "blur(20px)", scale: 0.98 }}
                                    animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                                    className="w-full max-w-md h-full bg-[#0a0a0a] rounded-xl border border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.05)] overflow-hidden relative flex flex-col"
                                >
                                    {/* Glossy overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-50 pointer-events-none" />

                                    {/* Header */}
                                    <div className="flex justify-between items-center p-5 border-b border-white/5">
                                        <div className="text-white font-bold text-sm tracking-widest">AURA</div>
                                        <div className="flex gap-4 text-[10px] text-white/50 tracking-wider">
                                            <span>FEATURES</span>
                                            <span>PRICING</span>
                                            <span className="text-white">LOGIN</span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 p-8 flex flex-col items-center justify-center text-center relative">
                                        {/* Background subtle mesh glow inside the mini UI */}
                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.1)_0%,transparent_50%)]" />

                                        <h1 className="text-3xl font-display text-white mb-4 leading-tight">
                                            The Future of<br /><span className="text-white/50">Digital Systems</span>
                                        </h1>
                                        <p className="text-xs text-white/40 mb-8 max-w-[200px] leading-relaxed">
                                            Engineered for precision. Built to scale instantly.
                                        </p>

                                        <div className="flex gap-3">
                                            <div className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                                                Get Started
                                            </div>
                                            <div className="px-5 py-2.5 bg-transparent border border-white/20 text-white text-xs font-medium rounded-full">
                                                View Demo
                                            </div>
                                        </div>

                                        {/* Cards row below */}
                                        <div className="grid grid-cols-2 gap-3 w-full mt-10">
                                            <div className="h-20 bg-white/5 rounded-xl border border-white/5 p-3 flex flex-col gap-2">
                                                <div className="w-6 h-6 rounded-full bg-white/10" />
                                                <div className="w-16 h-2 bg-white/20 rounded-full" />
                                                <div className="w-24 h-1.5 bg-white/10 rounded-full" />
                                            </div>
                                            <div className="h-20 bg-white/5 rounded-xl border border-white/5 p-3 flex flex-col gap-2">
                                                <div className="w-6 h-6 rounded-full bg-white/10" />
                                                <div className="w-16 h-2 bg-white/20 rounded-full" />
                                                <div className="w-24 h-1.5 bg-white/10 rounded-full" />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
}
