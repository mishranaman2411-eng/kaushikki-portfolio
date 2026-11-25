import React, { useState } from 'react';
import { 
  ArrowDownRight, 
  MapPin, 
  Send, 
  Box, 
  Terminal, 
  Code2, 
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react';
import { 
  DoodleUnderline, 
  DoodleArrow, 
  DoodleCircle, 
  DoodleSparkle, 
  PaperClip,
  GithubIcon
} from './HandDrawn';
import { playClick, playPop } from '../utils/sound';
import namanPortrait from '../assets/naman-portrait.jpg';

export default function Hero() {
  const [polaroidFlipped, setPolaroidFlipped] = useState(false);

  const handleFlip = () => {
    playPop();
    setPolaroidFlipped(!polaroidFlipped);
  };

  const scrollToSection = (id) => {
    playClick();
    const element = document.getElementById(id);
    if (element) {
      if (window.__lenis) {
        window.__lenis.scrollTo(element, { offset: -70 });
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="hero" className="relative pt-6 pb-16 sm:pt-10 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Expressive Headline & Intro */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            
            {/* Status Pills */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#121212] shadow-tactile text-xs font-mono font-bold text-[#121212]">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                B.Tech ECE ’28 • CCET
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#FEF08A] border border-[#121212] text-xs font-hand font-bold text-[#121212] rotate-[1deg]">
                <MapPin size={12} className="stroke-[2.5]" />
                Chandigarh, India
              </span>
            </div>

            {/* Expressive Editorial Headline with Ink-Black Underline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black tracking-tight leading-[1.12] text-[#121212]">
                3D web engineering, product systems, and tactile UI.
              </h1>
              <div className="w-56 sm:w-72 pt-1">
                <DoodleUnderline className="w-full h-4 text-[#1A1A1A]" strokeColor="#1A1A1A" />
              </div>
            </div>

            {/* Sub-headline / Narrative with squiggly underline beneath Naman Mishra */}
            <p className="text-base sm:text-lg text-[#282828] leading-relaxed max-w-xl font-normal">
              I’m{' '}
              <span className="relative inline-block font-black text-[#121212]">
                <span>Naman Mishra</span>
                <span className="absolute -bottom-2 left-0 w-full pointer-events-none">
                  <DoodleUnderline className="w-full h-3 text-[#1A1A1A]" strokeColor="#1A1A1A" />
                </span>
              </span>{' '}
              — Founder &amp; Owner of Weerolliinn, CTO at ARAEL WEARS, and a 3rd-year B.Tech ECE student at CCET Chandigarh building scroll-driven 3D web experiences and full-stack storefronts.
            </p>

            {/* Tactile Key Metrics Ribbon with Looped Circles */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
              <div className="tactile-card p-3 rounded-xl bg-white border-[1.5px] border-[#121212]">
                <div className="flex items-center justify-between text-[#625E56] text-[11px] font-mono">
                  <span>WEBGL & 3D</span>
                  <Box size={13} className="text-orange-500" />
                </div>
                <div className="mt-1 relative inline-block">
                  <span className="font-black text-xl sm:text-2xl tracking-tight text-[#121212] relative z-10">120-Frame</span>
                  <div className="absolute -inset-1.5 pointer-events-none">
                    <DoodleCircle className="w-full h-full text-[#1A1A1A]" strokeColor="#1A1A1A" />
                  </div>
                </div>
                <p className="text-[11px] font-medium text-[#625E56] leading-tight mt-1">
                  Scroll-scrubbed interactive 3D architecture
                </p>
              </div>

              <div className="tactile-card p-3 rounded-xl bg-white border-[1.5px] border-[#121212]">
                <div className="flex items-center justify-between text-[#625E56] text-[11px] font-mono">
                  <span>LEADERSHIP</span>
                  <Terminal size={13} className="text-emerald-600" />
                </div>
                <div className="mt-1 relative inline-block">
                  <span className="font-black text-xl sm:text-2xl tracking-tight text-[#121212] relative z-10">CTO</span>
                  <div className="absolute -inset-1.5 pointer-events-none">
                    <DoodleCircle className="w-full h-full text-[#1A1A1A]" strokeColor="#1A1A1A" />
                  </div>
                </div>
                <p className="text-[11px] font-medium text-[#625E56] leading-tight mt-1">
                  Tech & storefront architecture at ARAEL WEARS
                </p>
              </div>

              <div className="tactile-card p-3 rounded-xl bg-amber-50/60 border-[1.5px] border-[#121212] col-span-2 sm:col-span-1">
                <div className="flex items-center justify-between text-[#625E56] text-[11px] font-mono">
                  <span>CORE STACK</span>
                  <Code2 size={13} className="text-amber-600" />
                </div>
                <div className="mt-1 font-black text-xl sm:text-2xl tracking-tight text-[#121212]">Full-Stack</div>
                <p className="text-[11px] font-medium text-[#625E56] leading-tight mt-1">
                  Next.js, Three.js, GSAP & Python CLI
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="tactile-btn flex items-center gap-2 px-5 py-3 rounded-xl bg-[#121212] text-[#F8F7F4] text-sm font-bold hover:bg-neutral-800 transition-all shadow-tactile active:scale-[0.98]"
              >
                <Send size={15} className="stroke-[2.5]" />
                <span>Say Hello via iOS Mail</span>
              </button>

              <button
                onClick={() => scrollToSection('experience')}
                className="tactile-btn flex items-center gap-2 px-4 py-3 rounded-xl bg-white border-[1.5px] border-[#121212] text-[#121212] text-sm font-bold hover:bg-[#F4F1EA] transition-all"
              >
                <span>View Selected Builds</span>
                <ArrowDownRight size={16} />
              </button>

              <a
                href="https://github.com/mishranaman2411-eng"
                target="_blank"
                rel="noreferrer"
                className="tactile-btn flex items-center gap-1.5 px-3.5 py-3 rounded-xl bg-[#FEF08A] border-[1.5px] border-[#121212] text-[#121212] text-xs font-bold hover:bg-[#FDE047]"
                title="View Naman Mishra's GitHub repositories"
              >
                <GithubIcon size={14} />
                <span>View GitHub</span>
                <ArrowUpRight size={13} className="stroke-[2.5]" />
              </a>
            </div>

            {/* Hand-drawn note under CTA with Doodle Sparkle */}
            <div className="flex items-center gap-2 pt-1 text-sm font-hand text-stone-700">
              <DoodleSparkle className="w-4 h-4 text-[#1A1A1A]" strokeColor="#1A1A1A" />
              <span className="font-bold">Open for Freelance 3D/Web Builds & 7th-Sem Tech Internships</span>
            </div>
          </div>

          {/* Right Column: Tactile Polaroid Photo Card Placeholder */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative mt-6 lg:mt-0">
            
            {/* Washi tape on top of polaroid */}
            <div className="washi-tape washi-tape-coral z-30"></div>

            {/* Doodled arrow pointing to card */}
            <div className="absolute -top-12 -right-4 hidden sm:flex items-center gap-2 pointer-events-none">
              <span className="font-hand text-base font-bold text-[#1A1A1A] rotate-[6deg]">
                click to flip! ↷
              </span>
              <DoodleArrow className="w-9 h-9 text-[#1A1A1A]" strokeColor="#1A1A1A" />
            </div>

            {/* Polaroid Frame */}
            <div 
              onClick={handleFlip}
              className="cursor-pointer group relative w-full max-w-sm bg-white border-[2px] border-[#121212] p-4 pb-6 rounded-2xl shadow-polaroid transform -rotate-1 hover:rotate-0 transition-transform duration-300"
            >
              {/* Metal Paper Clip at Top-Right */}
              <div className="absolute -top-4 right-6 z-20 pointer-events-none">
                <PaperClip className="w-6 h-12" />
              </div>

              {!polaroidFlipped ? (
                /* Front Side: Candid Portrait Polaroid */
                <div className="space-y-3">
                  <div className="relative aspect-[4/4.3] w-full rounded-xl overflow-hidden bg-[#181613] border-[1.5px] border-[#121212] shadow-inner">
                    <img
                      src={namanPortrait}
                      alt="Naman Mishra portrait"
                      className="w-full h-full object-cover object-top"
                    />

                    {/* Subtle warm Polaroid bottom gradient for overlay legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent pointer-events-none" />

                    {/* Top-left CCET ’28 badge overlay */}
                    <span className="absolute top-2.5 left-2.5 bg-amber-400 text-[#121212] border border-[#121212] text-[10px] font-mono font-bold px-2 py-0.5 rounded-full shadow-sm">
                      CCET ’28
                    </span>

                    {/* Bottom-left identity overlay */}
                    <div className="absolute bottom-2.5 left-3 right-24 text-left pointer-events-none">
                      <p className="font-mono text-xs font-semibold text-white tracking-tight leading-tight">
                        Naman Mishra
                      </p>
                      <p className="font-hand text-sm text-amber-200 leading-tight">
                        Founder @ Weerolliinn • CTO @ ARAEL WEARS
                      </p>
                    </div>

                    {/* Stamp overlay */}
                    <div className="absolute bottom-2.5 right-2.5 rotate-[-8deg]">
                      <div className="px-2 py-0.5 border border-dashed border-red-700 bg-red-50/95 text-red-700 font-mono text-[9px] font-bold tracking-wider rounded uppercase">
                        Chandigarh, IN
                      </div>
                    </div>
                  </div>

                  {/* Polaroid Bottom Caption */}
                  <div className="pt-2 text-center">
                    <p className="font-hand text-2xl font-bold text-[#121212] tracking-wide flex items-center justify-center gap-1">
                      <span>Naman in Chandigarh 📍</span>
                      <DoodleSparkle className="w-4 h-4 text-[#1A1A1A] inline-block" strokeColor="#1A1A1A" />
                    </p>
                    <p className="text-[11px] font-mono text-[#625E56] mt-0.5">
                      Click card to flip ↺
                    </p>
                  </div>
                </div>
              ) : (
                /* Back Side: Tactile 3 Core Pillars */
                <div className="space-y-3 min-h-[340px] flex flex-col justify-between p-2">
                  <div>
                    <div className="flex items-center justify-between border-b border-dashed border-[#121212] pb-2 mb-3">
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-800">
                        ⚡ Quick Dossier
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 bg-neutral-100 rounded border border-neutral-300">
                        Profile NM-28
                      </span>
                    </div>

                    <h3 className="font-black text-base text-[#121212]">
                      3 Core Engineering Pillars
                    </h3>

                    <ul className="mt-3 space-y-2.5 text-xs text-[#282828]">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span><strong>01. 3D & Motion Web:</strong> Three.js, React Three Fiber, and GSAP scroll-driven choreography.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span><strong>02. Full-Stack Storefronts & UI Systems:</strong> Next.js storefronts, Razorpay checkouts, and Qikink POD pipelines.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span><strong>03. Electronics, VLSI & Python Tooling:</strong> Cadence Virtuoso, GHDL, MATLAB DSP, and local CLI automation.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-[#E2DED5] flex items-center justify-between">
                    <span className="font-hand text-sm text-stone-600">
                      CCET Chandigarh • B.Tech ECE ’28
                    </span>
                    <span className="text-[10px] font-mono text-amber-700 underline font-semibold">
                      Flip back ↻
                    </span>
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
