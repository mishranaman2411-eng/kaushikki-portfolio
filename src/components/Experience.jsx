import React from 'react';
import {
  Target,
  CheckCircle2
} from 'lucide-react';
import {
  DoodleUnderline,
  DoodleCircle,
  DoodleSparkle,
  DoodleDivider,
  TactileStamp,
  PaperClip
} from './HandDrawn';

export default function Experience() {
  return (
    <section id="experience" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#121212] tracking-tight flex items-center justify-center gap-2">
            <span>Builds &amp; Leadership</span>
            <DoodleSparkle className="w-7 h-7 text-[#1A1A1A] hidden sm:inline-block" strokeColor="#1A1A1A" />
          </h2>

          <div className="w-44 mx-auto mt-2">
            <DoodleUnderline className="w-full h-4 text-[#1A1A1A]" strokeColor="#1A1A1A" />
          </div>

          <p className="font-hand text-lg sm:text-xl text-stone-600 mt-2 max-w-xl mx-auto">
            Production storefronts, 3D web architecture, and engineering systems.
          </p>
        </div>

        {/* Experience Dossier Cards Stack */}
        <div className="space-y-8">
          
          {/* Card 1: ARAEL WEARS — Chief Technology Officer (CTO) */}
          <div className="relative bg-white border-[2px] border-[#121212] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-tactile-lg transition-all hover:shadow-tactile-hover group">
            
            {/* Corner Washi Tape */}
            <div className="absolute -top-3 left-10 washi-tape washi-tape-coral pointer-events-none" />

            {/* Paperclip top right */}
            <div className="absolute -top-3 right-8 pointer-events-none hidden sm:block">
              <PaperClip className="w-6 h-12" />
            </div>

            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-[#E2DED5] pb-6">
              <div>
                <div className="flex items-center gap-2.5 flex-wrap">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-900 border border-orange-300">
                    E-Commerce &amp; Brand Tech
                  </span>
                  <span className="font-mono text-xs text-[#625E56]">
                    2026 – Present • Chandigarh, India
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-[#121212] mt-2">
                  ARAEL WEARS
                </h3>

                <p className="text-sm sm:text-base font-semibold text-orange-800">
                  Chief Technology Officer (CTO)
                </p>
              </div>

              {/* Tactile Badge Stamp with Hand-Drawn Circle Loop */}
              <div className="relative flex-shrink-0 self-start group/stamp mt-1 sm:mt-0">
                <div className="absolute -inset-3 pointer-events-none z-20">
                  <DoodleCircle className="w-full h-full text-[#1A1A1A]" strokeColor="#1A1A1A" />
                </div>
                <TactileStamp label="STREETWEAR TECH" count="300 GSM POD" sublabel="CTO • full-stack" color="orange" />
              </div>
            </div>

            {/* Core Narrative & Highlights */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6">
              <div className="lg:col-span-8 space-y-4">
                <p className="text-sm sm:text-base text-[#282828] leading-relaxed">
                  Leading end-to-end technical architecture and storefront engineering for ARAEL WEARS, a streetwear label focused on heavyweight 300 GSM hoodies.
                </p>

                <div className="space-y-2.5 pt-1">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#625E56] flex items-center gap-1.5">
                    <Target size={14} className="text-orange-600" />
                    <span>Architecture &amp; Engineering Deliverables</span>
                  </h4>

                  <ul className="space-y-2 text-xs sm:text-sm text-[#282828]">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Custom E-Commerce Storefront:</strong> Engineered a high-conversion web storefront with interactive product inspection modals and mobile-first lookbook layouts.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Fulfillment &amp; Payment Pipeline:</strong> Architected automated print-on-demand order routing via Qikink alongside seamless Razorpay checkout integration.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Retro Cutscene Visual Direction:</strong> Produced custom 16:9 and 9:16 lookbook hero animations styled after classic PS2/PS4-era cutscenes.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column: Tactile Scorecard */}
              <div className="lg:col-span-4 bg-[#FAF8F5] rounded-2xl border-[1.5px] border-[#121212] p-4 sm:p-5 flex flex-col justify-between space-y-4">
                <div>
                  <div className="font-mono text-[11px] font-bold uppercase text-[#625E56] border-b border-[#E2DED5] pb-1.5 mb-2.5 flex items-center justify-between">
                    <span>SYSTEM OVERVIEW</span>
                    <span className="text-emerald-600">ACTIVE</span>
                  </div>

                  <div className="space-y-2.5 text-xs">
                    <div>
                      <span className="text-[#625E56] block text-[11px]">Primary Focus:</span>
                      <span className="font-bold text-[#121212]">E-Commerce Architecture &amp; Brand Tech</span>
                    </div>
                    <div>
                      <span className="text-[#625E56] block text-[11px]">Product Line:</span>
                      <span className="font-bold text-[#121212]">300 GSM Heavyweight Streetwear</span>
                    </div>
                    <div>
                      <span className="text-[#625E56] block text-[11px]">Key Deliverable:</span>
                      <span className="font-bold text-orange-700 text-sm">Full-Stack Storefront &amp; POD Pipeline</span>
                    </div>
                    <div>
                      <span className="text-[#625E56] block text-[11px]">Build Flow:</span>
                      <span className="font-semibold text-[#282828] leading-snug block">
                        01. UI Prototyping • 02. Storefront Engineering • 03. Qikink &amp; Razorpay Sync • 04. Lookbook Media
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#E2DED5] flex flex-wrap gap-1.5">
                  {['Next.js', 'Git', 'Razorpay', 'Qikink'].map((tool) => (
                    <span
                      key={tool}
                      className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white border border-[#D5D0C5] text-[#121212]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Rough Index-Card Divider Line */}
          <div className="py-1 px-4">
            <DoodleDivider className="w-full h-3 text-[#1A1A1A]" strokeColor="#1A1A1A" />
          </div>

          {/* Card 2: Independent Engineering Builds — 3D Web & Systems Developer */}
          <div className="relative bg-white border-[2px] border-[#121212] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-tactile-lg transition-all hover:shadow-tactile-hover group">
            
            {/* Corner Washi Tape */}
            <div className="absolute -top-3 left-10 washi-tape washi-tape-mint pointer-events-none" />

            {/* Paperclip top right */}
            <div className="absolute -top-3 right-8 pointer-events-none hidden sm:block">
              <PaperClip className="w-6 h-12" />
            </div>

            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-[#E2DED5] pb-6">
              <div>
                <div className="flex items-center gap-2.5 flex-wrap">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300">
                    3D Web &amp; Tooling
                  </span>
                  <span className="font-mono text-xs text-[#625E56]">
                    2025 – Present • Chandigarh, India
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-[#121212] mt-2">
                  Independent Engineering Builds
                </h3>

                <p className="text-sm sm:text-base font-semibold text-emerald-800">
                  3D Web &amp; Systems Developer
                </p>
              </div>

              {/* 120-Frame Stamp with Hand-Drawn Circle Loop */}
              <div className="relative flex-shrink-0 self-start group/stamp mt-1 sm:mt-0">
                <div className="absolute -inset-3 pointer-events-none z-20">
                  <DoodleCircle className="w-full h-full text-[#1A1A1A]" strokeColor="#1A1A1A" />
                </div>
                <TactileStamp label="SCROLL WEBGL" count="120-FRAME" sublabel="60fps scrub" color="green" />
              </div>
            </div>

            {/* Core Narrative & Highlights */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6">
              <div className="lg:col-span-8 space-y-4">
                <p className="text-sm sm:text-base text-[#282828] leading-relaxed">
                  Designing and engineering interactive 3D web experiences, editorial brand concepts, and local Python developer tools.
                </p>

                <div className="space-y-2.5 pt-1">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#625E56] flex items-center gap-1.5">
                    <Target size={14} className="text-emerald-700" />
                    <span>Selected Builds &amp; Systems</span>
                  </h4>

                  <ul className="space-y-2 text-xs sm:text-sm text-[#282828]">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Scroll-Scrubbed 3D Product Experience:</strong> Built a 120-frame scroll-driven 360° interactive 3D showcase paired with a two-step interactive order and receipt checkout UI.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Dark Editorial Web Architecture:</strong> Designed and engineered high-contrast minimalist web concepts with custom typography and GSAP scroll choreography.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span><strong>NSE/BSE Equity Research CLI:</strong> Engineered a local Python 3.11 command-line financial analysis tool using pandas, yfinance, SQLite, and pydantic.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column: Tactile Scorecard */}
              <div className="lg:col-span-4 bg-[#FAF8F5] rounded-2xl border-[1.5px] border-[#121212] p-4 sm:p-5 flex flex-col justify-between space-y-4">
                <div>
                  <div className="font-mono text-[11px] font-bold uppercase text-[#625E56] border-b border-[#E2DED5] pb-1.5 mb-2.5 flex items-center justify-between">
                    <span>BUILD TELEMETRY</span>
                    <span className="text-emerald-600">SHIPPED</span>
                  </div>

                  <div className="space-y-2.5 text-xs">
                    <div>
                      <span className="text-[#625E56] block text-[11px]">Core Craft:</span>
                      <span className="font-bold text-[#121212]">Scroll-Driven 3D &amp; Editorial UI</span>
                    </div>
                    <div>
                      <span className="text-[#625E56] block text-[11px]">Deployments:</span>
                      <span className="font-bold text-[#121212]">GitHub, Vercel &amp; Local CLI</span>
                    </div>
                    <div>
                      <span className="text-[#625E56] block text-[11px]">Key Benchmark:</span>
                      <span className="font-bold text-emerald-700 text-sm">120-Frame 60fps Scroll Scrubbing</span>
                    </div>
                    <div>
                      <span className="text-[#625E56] block text-[11px]">Pipeline:</span>
                      <span className="font-semibold text-[#282828] leading-snug block">
                        01. Wireframe &amp; Type • 02. 3D/GSAP Motion • 03. Asset Optimization • 04. Production Deploy
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#E2DED5] flex flex-wrap gap-1.5">
                  {['Three.js', 'GSAP', 'Python', 'GitHub'].map((tool) => (
                    <span
                      key={tool}
                      className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white border border-[#D5D0C5] text-[#121212]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
