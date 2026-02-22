"use client";

import { motion } from "framer-motion";

export function FooterSection() {
    return (
        <footer className="w-full bg-[#050505] text-white pt-24 pb-8 overflow-hidden relative">

            {/* Absolute dark fade top to blend evenly */}
            <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-black to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col items-center">





                {/* Middle Grid - 4 Columns */}
                <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-8 mb-24">

                    {/* Column 1: Product */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-[10px] uppercase tracking-widest text-white/70 font-semibold mb-2">Product</h4>
                        <div className="flex flex-col gap-4">
                            {['AI Engine', 'Architecture', 'Showcase', 'Pricing', 'Enterprise'].map((link) => (
                                <a key={link} href="#" className="text-sm text-white/40 hover:text-white transition-colors duration-300 w-fit">
                                    {link}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Company */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-[10px] uppercase tracking-widest text-white/70 font-semibold mb-2">Company</h4>
                        <div className="flex flex-col gap-4">
                            {['About', 'Method', 'Careers', 'Contact'].map((link) => (
                                <a key={link} href="#" className="text-sm text-white/40 hover:text-white transition-colors duration-300 w-fit">
                                    {link}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 3: Resources */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-[10px] uppercase tracking-widest text-white/70 font-semibold mb-2">Resources</h4>
                        <div className="flex flex-col gap-4">
                            {['Documentation', 'API', 'Changelog', 'Blog'].map((link) => (
                                <a key={link} href="#" className="text-sm text-white/40 hover:text-white transition-colors duration-300 w-fit">
                                    {link}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 4: System (Tech Panel Style) */}
                    <div className="flex flex-col h-full bg-[#080808] border border-white/5 p-6 rounded-xl font-mono relative overflow-hidden group hover:border-white/10 transition-colors duration-500">
                        {/* Subtle scanline */}
                        <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] pointer-events-none opacity-10" />

                        <h4 className="text-[10px] uppercase tracking-widest text-white/50 font-semibold mb-8 relative z-10">System</h4>

                        <div className="flex flex-col gap-5 text-xs relative z-10 flex-grow">

                            <div className="flex items-center justify-between border-b border-white/5 pb-2">
                                <span className="text-white/40">Status</span>
                                <div className="flex items-center gap-2">
                                    <div className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-40"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></span>
                                    </div>
                                    <span className="text-emerald-500 font-medium">ONLINE</span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between border-b border-white/5 pb-2">
                                <span className="text-white/40">Version</span>
                                <span className="text-white/70">v1.0</span>
                            </div>

                            <div className="flex items-center justify-between border-b border-white/5 pb-2">
                                <span className="text-white/40">Node</span>
                                <span className="text-white/70">Global</span>
                            </div>

                            <div className="flex items-center justify-between pb-2">
                                <span className="text-white/40">Security</span>
                                <span className="text-white/70">Active</span>
                            </div>

                        </div>
                    </div>

                </div>

                {/* 1px Divider */}
                <div className="w-full h-px bg-white/5 mb-8" />

                {/* Bottom Strip */}
                <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 text-xs tracking-wide">
                    <p className="text-white/30 font-light">
                        © 2026 Aura Studio. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4 text-white/40 font-medium">
                        <a href="#" className="hover:text-white transition-colors duration-300">Twitter</a>
                        <span className="text-white/10">·</span>
                        <a href="#" className="hover:text-white transition-colors duration-300">LinkedIn</a>
                        <span className="text-white/10">·</span>
                        <a href="#" className="hover:text-white transition-colors duration-300">GitHub</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}
