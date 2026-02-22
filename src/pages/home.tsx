import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { LogoCloud } from "../components/ui/logo-cloud-3";
import { Feature } from "../components/ui/feature-with-image-comparison";
import { ProcessSection } from "../components/ui/process-section";
import { IntelligenceInMotion } from "../components/ui/intelligence-in-motion";
import { EngineCapabilities } from "../components/ui/engine-capabilities";
import { PerformanceMetrics } from "../components/ui/performance-metrics";
import { WhyDifferentSection } from "../components/ui/why-different-section";
import { PricingSection } from "../components/ui/pricing-section";
import { FinalCtaSection } from "../components/ui/final-cta-section";

const logos = [
    {
        src: "https://svgl.app/library/nvidia-wordmark-light.svg",
        alt: "Nvidia Logo",
    },
    {
        src: "https://svgl.app/library/supabase_wordmark_light.svg",
        alt: "Supabase Logo",
    },
    {
        src: "https://svgl.app/library/openai_wordmark_light.svg",
        alt: "OpenAI Logo",
    },
    {
        src: "https://svgl.app/library/turso-wordmark-light.svg",
        alt: "Turso Logo",
    },
    {
        src: "https://svgl.app/library/vercel_wordmark.svg",
        alt: "Vercel Logo",
    },
    {
        src: "https://svgl.app/library/github_wordmark-light.svg",
        alt: "GitHub Logo",
    },
];

export function Home() {
    return (
        <>
            {/* Hero Content */}
            <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="flex items-center justify-center gap-2 mb-8 inline-flex px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                        <Sparkles className="w-4 h-4 text-purple-400" />
                        <span className="text-sm font-medium text-white/80">Magic Web V2 is now live</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium tracking-tight text-white mb-8 leading-[1.1]">
                        We design <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">magic</span>
                        <br /> for the web.
                    </h1>

                    <p className="text-xl md:text-2xl text-white/50 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                        Create stunning, high-performance websites in seconds with our AI-powered design engine.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:bg-white/90 transition-colors flex items-center gap-2 group w-full sm:w-auto justify-center">
                            Start Creating
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <Link to="/architectures" className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto">
                            <Globe className="w-5 h-5 opacity-70" />
                            View Deployments
                        </Link>
                    </div>
                </motion.div>
            </main>

            {/* Logo Cloud Section */}
            <section className="relative z-10 mx-auto max-w-5xl py-20 px-6 mt-10 md:mt-24 flex flex-col items-center">
                <div className="w-full absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent pointer-events-none" />
                <p className="text-sm font-medium text-white/40 uppercase tracking-widest mb-10 text-center relative z-10">
                    Trusted by innovative teams worldwide
                </p>
                <LogoCloud logos={logos} />
            </section>

            {/* Feature Image Comparison Section */}
            <section className="relative z-10 w-full bg-black">
                <Feature />
            </section>

            {/* Process Section */}
            <ProcessSection />

            {/* Intelligence In Motion Section */}
            <IntelligenceInMotion />

            {/* Engine Capabilities Section */}
            <EngineCapabilities />

            {/* Performance Metrics Section */}
            <PerformanceMetrics />

            {/* Why Aura Is Different Section */}
            <WhyDifferentSection />

            {/* Pricing Section */}
            <PricingSection />

            {/* Final CTA Section */}
            <FinalCtaSection />
        </>
    );
}
