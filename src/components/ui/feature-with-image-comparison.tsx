import { CpuArchitecture } from "./cpu-architecture";
import { Zap, Layers, RefreshCw } from "lucide-react";
import { useState } from "react";

function Feature() {
    const [isCpuActive, setIsCpuActive] = useState(false);

    return (
        <div className="w-full py-20 lg:py-40">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left Column - Features Text */}
                    <div className="flex flex-col gap-8 order-2 lg:order-1">
                        <div className="flex flex-col gap-6">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tighter font-display text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 leading-[1.1]">
                                Core architecture defined by intelligence
                            </h2>

                            <p className="text-lg leading-relaxed tracking-wide text-white/60">
                                Aura Engine processes thousands of variables simultaneously to synthesize optimal layouts, fluid animations, and robust code architectures.
                            </p>
                        </div>

                        <div className="pt-8 flex flex-col gap-8 border-t border-white/10">
                            <div
                                className="flex items-start gap-4 p-4 -ml-4 rounded-2xl hover:bg-white/5 transition-colors cursor-default"
                                onMouseEnter={() => setIsCpuActive(true)}
                                onMouseLeave={() => setIsCpuActive(false)}
                            >
                                <div className="bg-white/10 p-3 rounded-2xl">
                                    <Zap className={`w-6 h-6 transition-colors duration-500 ${isCpuActive ? "text-[#8000FF]" : "text-white"}`} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-2 tracking-wide">Parallel Processing Core</h3>
                                    <p className="text-white/50 leading-relaxed text-sm">
                                        Design and code generation happen simultaneously, cutting development lifecycles from months to milliseconds.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5">
                                    <div className="bg-black/50 p-2 rounded-lg mix-blend-screen">
                                        <Layers className="w-5 h-5 text-white/70" />
                                    </div>
                                    <span className="text-sm font-semibold tracking-wide text-white/80">Neural Mapping</span>
                                </div>

                                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5">
                                    <div className="bg-black/50 p-2 rounded-lg mix-blend-screen">
                                        <RefreshCw className="w-5 h-5 text-white/70" />
                                    </div>
                                    <span className="text-sm font-semibold tracking-wide text-white/80">Continuous Sync</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - CPU Architecture */}
                    <div className="w-full relative order-1 lg:order-2 flex justify-center items-center p-8 lg:p-12">
                        {/* Soft background glow tied to hover */}
                        <div
                            className={`absolute inset-0 rounded-full blur-3xl -z-10 transition-all duration-1000 ${isCpuActive ? "bg-[radial-gradient(circle_at_center,rgba(128,0,255,0.15)_0%,transparent_60%)] scale-110" : "bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,transparent_60%)] scale-100"}`}
                        />

                        <div className="w-full max-w-lg aspect-square lg:aspect-auto">
                            <CpuArchitecture text="AURA" lineMarkerSize={12} isActive={isCpuActive} animateLines={false} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export { Feature };
