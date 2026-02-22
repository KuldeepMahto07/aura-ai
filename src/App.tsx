/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, useMotionValue, useSpring, useMotionTemplate } from "motion/react";
import { useEffect } from "react";
import { ArrowRight, Sparkles, Globe } from "lucide-react";
import { LogoCloud } from "./components/ui/logo-cloud-3";
import { Feature } from "./components/ui/feature-with-image-comparison";
import { ProcessSection } from "./components/ui/process-section";
import { IntelligenceInMotion } from "./components/ui/intelligence-in-motion";
import { EngineCapabilities } from "./components/ui/engine-capabilities";
import { PerformanceMetrics } from "./components/ui/performance-metrics";
import { WhyDifferentSection } from "./components/ui/why-different-section";
import { PricingSection } from "./components/ui/pricing-section";
import { FinalCtaSection } from "./components/ui/final-cta-section";
import { FooterSection } from "./components/ui/footer-section";
import { MagneticText } from "./components/ui/morphing-cursor";

const logos = [
  {
    src: "https://svgl.app/library/clerk_logo_white.svg",
    alt: "Clerk",
  },
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
];

function CustomCursor() {
  const SPRING = {
    mass: 0.1,
    damping: 10,
    stiffness: 131,
  };

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const opacity = useMotionValue(0);
  const scale = useMotionValue(0);

  const smoothX = useSpring(cursorX, SPRING);
  const smoothY = useSpring(cursorY, SPRING);
  const smoothOpacity = useSpring(opacity, SPRING);
  const smoothScale = useSpring(scale, SPRING);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      opacity.set(1);

      if (e.target instanceof Element && e.target.closest('button, a, [role="button"]')) {
        scale.set(1.5);
      } else {
        scale.set(1);
      }
    };

    const handleMouseLeave = () => {
      opacity.set(0);
      scale.set(0);
    };

    window.addEventListener('mousemove', moveCursor);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.style.cursor = 'auto';
    };
  }, [cursorX, cursorY, scale, opacity]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 bg-white rounded-[2rem] pointer-events-none z-[9999] mix-blend-difference"
      style={{
        x: smoothX,
        y: smoothY,
        translateX: "-50%",
        translateY: "-50%",
        scale: smoothScale,
        opacity: smoothOpacity
      }}
    />
  );
}

export default function App() {
  // 1. Intelligent Text Shift
  const { scrollY } = useScroll();
  const magicOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const magicY = useTransform(scrollY, [0, 300], [0, 20]);
  const robotsY = useTransform(scrollY, [0, 300], [0, -20]);
  const robotsOpacity = useTransform(scrollY, [0, 300], [0.9, 0]);

  // 1. Reactive Globe & Trail
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cursorX = useSpring(useMotionValue(0), { damping: 30, stiffness: 200 });
  const cursorY = useSpring(useMotionValue(0), { damping: 30, stiffness: 200 });

  const springConfig = { damping: 30, stiffness: 100 };
  const globeRotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [2, -2]), springConfig);
  const globeRotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-2, 2]), springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    cursorX.set(clientX);
    cursorY.set(clientY);

    const { innerWidth, innerHeight } = window;
    const x = clientX / innerWidth - 0.5;
    const y = clientY / innerHeight - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  // Subtle pulsing radial glow following cursor
  const lightTrailBackground = useMotionTemplate`radial-gradient(600px circle at ${cursorX}px ${cursorY}px, rgba(120, 80, 255, 0.05), transparent 80%)`;

  return (
    <>
      <CustomCursor />
      <motion.div
        initial={{ opacity: 0, y: 10, filter: "brightness(0.8)" }}
        animate={{ opacity: 1, y: 0, filter: "brightness(1)" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="min-h-screen bg-black text-white selection:bg-white/20 relative flex flex-col"
        onMouseMove={handleMouseMove}
      >

        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center border-b border-white/5 bg-[#050505]/30 backdrop-blur-md">
          <div className="flex items-center gap-3 text-lg tracking-[0.2em] uppercase text-white font-medium">
            <Globe className="w-5 h-5 text-white/80" />
            <span>Aura<span className="font-light text-white/60">Studio</span></span>
          </div>
          <div className="hidden md:flex items-center gap-10 text-[9px] font-bold tracking-[0.2em] uppercase text-white/50">
            <a href="#" className="hover:text-white transition-colors">Work</a>
            <a href="#" className="hover:text-white transition-colors">Method</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          <button className="hidden md:flex items-center gap-3 px-6 py-2.5 bg-black/40 border border-white/10 rounded-full text-[9px] font-bold tracking-[0.2em] uppercase text-white hover:bg-white/10 transition-colors">
            Start <ArrowRight className="w-3 h-3" />
          </button>
        </nav>

        {/* Left Axis Text */}
        <div className="fixed left-4 top-1/2 -translate-y-1/2 -rotate-90 origin-left text-[8px] uppercase tracking-[0.4em] text-white/20 font-mono z-40 hidden xl:block mix-blend-difference">
          AURA ENGINE V2.0
        </div>

        {/* Global Grain Overlay (Task 9) */}
        <div
          className="fixed inset-0 z-50 pointer-events-none opacity-[0.04] mix-blend-overlay"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        />

        {/* Global Video Background - Slow Parallax */}
        <div className="fixed inset-0 z-0 overflow-hidden bg-black pointer-events-none perspective-[1000px]">
          {/* Slow Background Parallax */}
          <motion.div
            className="absolute inset-x-0 top-[20vh] mx-auto w-[90vw] max-w-[1200px] h-[80vw] max-h-[1200px] rounded-full transform-gpu"
            style={{
              y: useTransform(scrollY, [0, 2000], [0, 200]) // Slow scroll
            }}
          >
            {/* Intense Top Highlight Glow matching reference */}
            <div className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[80%] h-[40%] bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.4)_0%,transparent_70%)] rounded-full blur-[60px] z-10 mix-blend-screen pointer-events-none" />

            {/* Core Deep Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-[radial-gradient(circle_at_center,rgba(128,0,255,0.15)_0%,transparent_70%)] rounded-full blur-[80px] pointer-events-none" />

            {/* Globe Video with enhanced contrast/brightness for the highlight effect */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-100 mix-blend-screen rounded-full"
              style={{ filter: "contrast(1.4) brightness(1.8) saturate(1.2) drop-shadow(0 0 60px rgba(168,85,247,0.5))" }}
            >
              <source src="/globe-animation-new.mp4" type="video/mp4" />
            </video>

            {/* Inner Shadow to create the 3D sphere illusion over the flat video */}
            <div className="absolute inset-0 rounded-full shadow-[inset_0_40px_100px_rgba(0,0,0,0.6),inset_0_-40px_100px_rgba(0,0,0,1)] pointer-events-none" />
          </motion.div>

          {/* Fast Particles Parallax */}
          <motion.div
            className="absolute inset-0 w-full h-full mix-blend-screen pointer-events-none"
            style={{ y: useTransform(scrollY, [0, 2000], [0, -400]) }} // Fast scroll
          >
            <div className="absolute w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.8)_1px,transparent_1px),radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.8)_1px,transparent_1px),radial-gradient(circle_at_40%_80%,rgba(255,255,255,0.8)_1px,transparent_1px),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.8)_1px,transparent_1px)] bg-[length:120px_120px] opacity-20" />
          </motion.div>

          {/* Dark overlay to blend boundaries */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#000_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/90 to-transparent" />
        </div>

        {/* Hero Content */}
        <main className="relative z-10 flex flex-col items-center justify-center min-h-[90vh] px-4 text-center pt-24 pb-12 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl mx-auto flex flex-col items-center"
          >
            <div className="flex items-center justify-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-white/10 bg-black/40 backdrop-blur-md">
              <Sparkles className="w-3 h-3 text-white/60" />
              <span className="text-[8px] font-bold text-white/60 uppercase tracking-[0.3em]">Intelligence In Motion</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-display font-medium tracking-tight text-white mb-8 leading-[1.05] flex flex-col items-center">
              <motion.span style={{ opacity: magicOpacity, y: magicY }}>
                <MagneticText text="Magic Websites" hoverText="Aura Engine" />
              </motion.span>
              <motion.span style={{ opacity: robotsOpacity, y: robotsY }} className="font-serif italic font-light text-white/90">
                <MagneticText text="Built by Robots" hoverText="Intelligence" />
              </motion.span>
            </h1>

            <div className="text-base md:text-xl text-white/70 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              <p className="mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                We deploy advanced computational models to architect your<br className="hidden md:block" />
                digital presence. Unprecedented speed. Effortless execution.<br className="hidden md:block" />
                Flawless aesthetics.
              </p>
              <p className="text-white font-medium tracking-wide drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] md:text-2xl mt-6">
                Elevate your standards.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full text-[10px] font-bold tracking-[0.2em] uppercase hover:scale-[1.02] transition-transform shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                Initialize Project
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-black border border-white/20 text-white rounded-full text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-white/5 transition-colors">
                View Showcase
              </button>
            </div>
          </motion.div>
        </main>

        {/* Logo Cloud Section */}
        <section className="relative z-10 mx-auto max-w-5xl pb-16 px-6 flex flex-col items-center">
          <p className="text-[8px] font-bold text-white/40 uppercase tracking-[0.3em] mb-10 text-center relative z-10">
            POWERING THE NEXT GENERATION OF DIGITAL EXPERIENCES
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

        {/* Footer Section */}
        <FooterSection />

        {/* Premium Footer Elements */}
        <div className="fixed bottom-0 left-0 right-0 z-50 p-8 flex justify-between items-end pointer-events-none">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex flex-col gap-1 text-[10px] font-mono text-white/30 tracking-widest uppercase mix-blend-difference"
          >
            <span>Sys.Status: <span className="text-emerald-400">Online</span></span>
            <span>Latency: 12ms</span>
          </motion.div>
        </div>

      </motion.div>
    </>
  );
}
