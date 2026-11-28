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
            <span>My Works</span>
            <DoodleSparkle className="w-7 h-7 text-[#1A1A1A] hidden sm:inline-block" strokeColor="#1A1A1A" />
          </h2>

          <div className="w-44 mx-auto mt-2">
            <DoodleUnderline className="w-full h-4 text-[#1A1A1A]" strokeColor="#1A1A1A" />
          </div>

          <p className="font-hand text-lg sm:text-xl text-stone-600 mt-2 max-w-xl mx-auto">
            Creative websites, online stores, and interactive designs.
          </p>
        </div>

        {/* Experience Dossier Cards Stack */}
        <div className="space-y-8">
          
          {/* Card 1: Weerolliinn — Founder & Owner */}
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
                    Web Studio
                  </span>
                  <span className="font-mono text-xs text-[#625E56]">
                    Chandigarh, India
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-[#121212] mt-2">
                  Weerolliinn
                </h3>

                <p className="text-sm sm:text-base font-semibold text-emerald-800">
                  Founder &amp; Owner
                </p>
              </div>

              {/* Stamp with Hand-Drawn Circle Loop */}
              <div className="relative flex-shrink-0 self-start group/stamp mt-1 sm:mt-0">
                <div className="absolute -inset-3 pointer-events-none z-20">
                  <DoodleCircle className="w-full h-full text-[#1A1A1A]" strokeColor="#1A1A1A" />
                </div>
                <TactileStamp label="WEB STUDIO" count="CREATIVE" sublabel="custom websites" color="green" />
              </div>
            </div>

            {/* Core Narrative & Highlights */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6">
              <div className="lg:col-span-8 space-y-4">
                <p className="text-sm sm:text-base text-[#282828] leading-relaxed">
                  My web studio for creative, interactive websites that help a brand look polished and earn visitors' trust.
                </p>

                <div className="space-y-2.5 pt-1">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#625E56] flex items-center gap-1.5">
                    <Target size={14} className="text-emerald-700" />
                    <span>What I Built</span>
                  </h4>

                  <ul className="space-y-2 text-xs sm:text-sm text-[#282828]">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Clean Dark Designs:</strong> Built sharp dark-themed pages with custom fonts and clear spacing.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Smooth Scroll Animations:</strong> Added smooth scroll motion that keeps visitors engaged without slowing down the page.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Interactive Product Page:</strong> Built a product showcase with a simple 2-step order and receipt screen.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column: Tactile Summary Card */}
              <div className="lg:col-span-4 bg-[#FAF8F5] rounded-2xl border-[1.5px] border-[#121212] p-4 sm:p-5 flex flex-col justify-between space-y-4">
                <div>
                  <div className="font-mono text-[11px] font-bold uppercase text-[#625E56] border-b border-[#E2DED5] pb-1.5 mb-2.5 flex items-center justify-between">
                    <span>PROJECT NOTES</span>
                    <span className="text-emerald-600">ACTIVE</span>
                  </div>

                  <div className="space-y-2.5 text-xs">
                    <div>
                      <span className="text-[#625E56] block text-[11px]">Focus:</span>
                      <span className="font-bold text-[#121212]">Creative &amp; Interactive Websites</span>
                    </div>
                    <div>
                      <span className="text-[#625E56] block text-[11px]">Style:</span>
                      <span className="font-bold text-[#121212]">Clean Dark Layouts &amp; Custom Fonts</span>
                    </div>
                    <div>
                      <span className="text-[#625E56] block text-[11px]">Highlight:</span>
                      <span className="font-bold text-emerald-700 text-sm">2-Step Order &amp; Receipt Screen</span>
                    </div>
                    <div>
                      <span className="text-[#625E56] block text-[11px]">Approach:</span>
                      <span className="font-semibold text-[#282828] leading-snug block">
                        Custom Design • Smooth Scroll • Clear Layout • Fast Loading
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#E2DED5] flex flex-wrap gap-1.5">
                  {['Next.js', 'GSAP', 'Three.js', 'CSS'].map((tool) => (
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

          {/* Card 2: ARAEL WEARS — Chief Technical Officer */}
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
                    Online Store
                  </span>
                  <span className="font-mono text-xs text-[#625E56]">
                    Chandigarh, India
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-[#121212] mt-2">
                  ARAEL WEARS
                </h3>

                <p className="text-sm sm:text-base font-semibold text-orange-800">
                  Chief Technical Officer
                </p>
              </div>

              {/* Tactile Badge Stamp with Hand-Drawn Circle Loop */}
              <div className="relative flex-shrink-0 self-start group/stamp mt-1 sm:mt-0">
                <div className="absolute -inset-3 pointer-events-none z-20">
                  <DoodleCircle className="w-full h-full text-[#1A1A1A]" strokeColor="#1A1A1A" />
                </div>
                <TactileStamp label="ONLINE STORE" count="STREETWEAR" sublabel="brand & store" color="orange" />
              </div>
            </div>

            {/* Core Narrative & Highlights */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6">
              <div className="lg:col-span-8 space-y-4">
                <p className="text-sm sm:text-base text-[#282828] leading-relaxed">
                  Built the streetwear brand's online store so shoppers can browse easily on any screen and trust what they see.
                </p>

                <div className="space-y-2.5 pt-1">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#625E56] flex items-center gap-1.5">
                    <Target size={14} className="text-orange-600" />
                    <span>What I Built</span>
                  </h4>

                  <ul className="space-y-2 text-xs sm:text-sm text-[#282828]">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Product Pop-ups:</strong> Added close-up pop-ups so visitors can look closely at items before buying.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Phone-Friendly Lookbook:</strong> Designed a clean, fast lookbook made for browsing comfortably on phones.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Retro PlayStation-Style Intros:</strong> Created nostalgic PlayStation-style intro animations that give the brand a distinct feel.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column: Tactile Summary Card */}
              <div className="lg:col-span-4 bg-[#FAF8F5] rounded-2xl border-[1.5px] border-[#121212] p-4 sm:p-5 flex flex-col justify-between space-y-4">
                <div>
                  <div className="font-mono text-[11px] font-bold uppercase text-[#625E56] border-b border-[#E2DED5] pb-1.5 mb-2.5 flex items-center justify-between">
                    <span>PROJECT NOTES</span>
                    <span className="text-emerald-600">LIVE</span>
                  </div>

                  <div className="space-y-2.5 text-xs">
                    <div>
                      <span className="text-[#625E56] block text-[11px]">Focus:</span>
                      <span className="font-bold text-[#121212]">Online Store &amp; Brand Look</span>
                    </div>
                    <div>
                      <span className="text-[#625E56] block text-[11px]">Experience:</span>
                      <span className="font-bold text-[#121212]">Phone-Friendly Browsing</span>
                    </div>
                    <div>
                      <span className="text-[#625E56] block text-[11px]">Highlight:</span>
                      <span className="font-bold text-orange-700 text-sm">Product Pop-Ups &amp; Retro Intros</span>
                    </div>
                    <div>
                      <span className="text-[#625E56] block text-[11px]">Approach:</span>
                      <span className="font-semibold text-[#282828] leading-snug block">
                        Close-Up Previews • Mobile Lookbook • Custom Motion
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#E2DED5] flex flex-wrap gap-1.5">
                  {['Next.js', 'React', 'Tailwind', 'Git'].map((tool) => (
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

          {/* Card 3: My Portfolio Website */}
          <div className="relative bg-white border-[2px] border-[#121212] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-tactile-lg transition-all hover:shadow-tactile-hover group">
            
            {/* Corner Washi Tape */}
            <div className="absolute -top-3 left-10 washi-tape pointer-events-none" />

            {/* Paperclip top right */}
            <div className="absolute -top-3 right-8 pointer-events-none hidden sm:block">
              <PaperClip className="w-6 h-12" />
            </div>

            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-[#E2DED5] pb-6">
              <div>
                <div className="flex items-center gap-2.5 flex-wrap">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-900 border border-blue-300">
                    Personal Site
                  </span>
                  <span className="font-mono text-xs text-[#625E56]">
                    Interactive Showcase
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-[#121212] mt-2">
                  My Portfolio Website
                </h3>

                <p className="text-sm sm:text-base font-semibold text-blue-800">
                  Design &amp; Code
                </p>
              </div>

              {/* Stamp with Hand-Drawn Circle Loop */}
              <div className="relative flex-shrink-0 self-start group/stamp mt-1 sm:mt-0">
                <div className="absolute -inset-3 pointer-events-none z-20">
                  <DoodleCircle className="w-full h-full text-[#1A1A1A]" strokeColor="#1A1A1A" />
                </div>
                <TactileStamp label="PORTFOLIO" count="THIS SITE" sublabel="custom built" color="blue" />
              </div>
            </div>

            {/* Core Narrative & Highlights */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6">
              <div className="lg:col-span-8 space-y-4">
                <p className="text-sm sm:text-base text-[#282828] leading-relaxed">
                  This site—designed to feel warm, clear, and personal rather than like a generic web template.
                </p>

                <div className="space-y-2.5 pt-1">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#625E56] flex items-center gap-1.5">
                    <Target size={14} className="text-blue-700" />
                    <span>What I Built</span>
                  </h4>

                  <ul className="space-y-2 text-xs sm:text-sm text-[#282828]">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Interactive Flip Card:</strong> A tactile ID card at the top of the page that flips over when you click it.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Clean Editorial Look:</strong> Warm paper styling, hand-drawn ink details, and a smooth winding scroll path.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Helpful Contact Section:</strong> An iOS-style mail card with topic buttons that write an email draft for you.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column: Tactile Summary Card */}
              <div className="lg:col-span-4 bg-[#FAF8F5] rounded-2xl border-[1.5px] border-[#121212] p-4 sm:p-5 flex flex-col justify-between space-y-4">
                <div>
                  <div className="font-mono text-[11px] font-bold uppercase text-[#625E56] border-b border-[#E2DED5] pb-1.5 mb-2.5 flex items-center justify-between">
                    <span>PROJECT NOTES</span>
                    <span className="text-emerald-600">LIVE</span>
                  </div>

                  <div className="space-y-2.5 text-xs">
                    <div>
                      <span className="text-[#625E56] block text-[11px]">Focus:</span>
                      <span className="font-bold text-[#121212]">Editorial Look &amp; Clear Copy</span>
                    </div>
                    <div>
                      <span className="text-[#625E56] block text-[11px]">Interactive:</span>
                      <span className="font-bold text-[#121212]">Flip Card &amp; Scroll Path</span>
                    </div>
                    <div>
                      <span className="text-[#625E56] block text-[11px]">Contact Tool:</span>
                      <span className="font-bold text-blue-700 text-sm">Auto-Draft Email Card</span>
                    </div>
                    <div>
                      <span className="text-[#625E56] block text-[11px]">Approach:</span>
                      <span className="font-semibold text-[#282828] leading-snug block">
                        No Templates • Simple Words • Phone Friendly
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#E2DED5] flex flex-wrap gap-1.5">
                  {['React', 'GSAP', 'Tailwind', 'Lenis'].map((tool) => (
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
