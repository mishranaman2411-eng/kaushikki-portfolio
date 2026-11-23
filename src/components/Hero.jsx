import React, { useState } from 'react';
import { 
  ArrowDownRight, 
  Sparkles, 
  MapPin, 
  Send, 
  TrendingUp, 
  Flame, 
  PhoneCall, 
  Award,
  CheckCircle2,
  FileDown
} from 'lucide-react';
import { 
  DoodleUnderline, 
  DoodleArrow, 
  DoodleCircle, 
  DoodleSparkle, 
  DoodleDivider,
  PaperClip, 
  Sparkle, 
  TactileStamp 
} from './HandDrawn';
import { playClick, playPop } from '../utils/sound';

export default function Hero({ onOpenContact }) {
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
                IIM Bangalore BBA DBE ’29
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#FEF08A] border border-[#121212] text-xs font-hand font-bold text-[#121212] rotate-[1deg]">
                <MapPin size={12} className="stroke-[2.5]" />
                Kolkata, India
              </span>
            </div>

            {/* Expressive Editorial Headline with Ink-Black Underline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black tracking-tight leading-[1.12] text-[#121212]">
                B2B & B2C sales, outbound growth, and pitch strategy.
              </h1>
              <div className="w-56 sm:w-72 pt-1">
                <DoodleUnderline className="w-full h-4 text-[#1A1A1A]" strokeColor="#1A1A1A" />
              </div>
            </div>

            {/* Sub-headline / Narrative with squiggly underline beneath Koushhiki Roy */}
            <p className="text-base sm:text-lg text-[#282828] leading-relaxed max-w-xl font-normal">
              I’m{' '}
              <span className="relative inline-block font-black text-[#121212]">
                <span>Koushhiki Roy</span>
                <span className="absolute -bottom-2 left-0 w-full pointer-events-none">
                  <DoodleUnderline className="w-full h-3 text-[#1A1A1A]" strokeColor="#1A1A1A" />
                </span>
              </span>{' '}
              — an IIM Bangalore BBA DBE student focused on sales and growth marketing. I’ve closed 200+ leads through cold outreach and delivered 50+ live client pitches across real estate and youth events.
            </p>

            {/* Tactile Key Metrics Ribbon with Looped Circles */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
              <div className="tactile-card p-3 rounded-xl bg-white border-[1.5px] border-[#121212]">
                <div className="flex items-center justify-between text-[#625E56] text-[11px] font-mono">
                  <span>IN-PERSON</span>
                  <Flame size={13} className="text-orange-500" />
                </div>
                <div className="mt-1 relative inline-block">
                  <span className="font-black text-2xl tracking-tight text-[#121212] relative z-10">50+</span>
                  <div className="absolute -inset-1.5 pointer-events-none">
                    <DoodleCircle className="w-full h-full text-[#1A1A1A]" strokeColor="#1A1A1A" />
                  </div>
                </div>
                <p className="text-[11px] font-medium text-[#625E56] leading-tight mt-1">
                  Live buyer pitches at Team Taurus
                </p>
              </div>

              <div className="tactile-card p-3 rounded-xl bg-white border-[1.5px] border-[#121212]">
                <div className="flex items-center justify-between text-[#625E56] text-[11px] font-mono">
                  <span>OUTBOUND</span>
                  <PhoneCall size={13} className="text-emerald-600" />
                </div>
                <div className="mt-1 relative inline-block">
                  <span className="font-black text-2xl tracking-tight text-[#121212] relative z-10">200+</span>
                  <div className="absolute -inset-1.5 pointer-events-none">
                    <DoodleCircle className="w-full h-full text-[#1A1A1A]" strokeColor="#1A1A1A" />
                  </div>
                </div>
                <p className="text-[11px] font-medium text-[#625E56] leading-tight mt-1">
                  Cold calling & email conversions
                </p>
              </div>

              <div className="tactile-card p-3 rounded-xl bg-amber-50/60 border-[1.5px] border-[#121212] col-span-2 sm:col-span-1">
                <div className="flex items-center justify-between text-[#625E56] text-[11px] font-mono">
                  <span>FELLOWSHIPS</span>
                  <Award size={13} className="text-amber-600" />
                </div>
                <div className="mt-1 font-black text-2xl tracking-tight text-[#121212]">3x</div>
                <p className="text-[11px] font-medium text-[#625E56] leading-tight mt-1">
                  Junior CEO, CMO & CFO (Clever Harvey)
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
                <span>View Live Pitch History</span>
                <ArrowDownRight size={16} />
              </button>

              <button
                onClick={() => {
                  playClick();
                  window.print();
                }}
                className="tactile-btn flex items-center gap-1.5 px-3.5 py-3 rounded-xl bg-[#FEF08A] border-[1.5px] border-[#121212] text-[#121212] text-xs font-bold hover:bg-[#FDE047]"
                title="Print or export 1-page PDF resume"
              >
                <FileDown size={14} />
                <span>Save Resume PDF</span>
              </button>
            </div>

            {/* Hand-drawn note under CTA with Doodle Sparkle */}
            <div className="flex items-center gap-2 pt-1 text-sm font-hand text-stone-700">
              <DoodleSparkle className="w-4 h-4 text-[#1A1A1A]" strokeColor="#1A1A1A" />
              <span className="font-bold">Available for Summer / Off-Cycle Sales & Growth Internships</span>
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
                /* Front Side: Stylized Portrait Placeholder */
                <div className="space-y-3">
                  <div className="relative aspect-[4/4.3] w-full rounded-xl overflow-hidden bg-gradient-to-b from-[#F2EFE8] to-[#E5E0D5] border-[1.5px] border-[#121212] flex flex-col items-center justify-center p-6 text-center shadow-inner">
                    
                    {/* Warm stylized avatar graphic */}
                    <div className="relative w-36 h-36 rounded-full bg-amber-100 border-2 border-[#121212] flex items-center justify-center shadow-sm mb-3">
                      <svg viewBox="0 0 100 100" className="w-28 h-28">
                        {/* Soft background glow */}
                        <circle cx="50" cy="50" r="46" fill="#FDE68A" />
                        {/* Stylized hair */}
                        <path d="M26 44C26 28 36 16 50 16C64 16 74 28 74 44C74 54 72 65 69 74C65 77 60 80 50 80C40 80 35 77 31 74C28 65 26 54 26 44Z" fill="#292524" />
                        {/* Face */}
                        <circle cx="50" cy="46" r="21" fill="#FBBF24" opacity="0.2" />
                        <ellipse cx="50" cy="47" rx="19" ry="22" fill="#FCD34D" />
                        {/* Glasses */}
                        <circle cx="43" cy="45" r="7" fill="none" stroke="#1C1917" strokeWidth="2.5" />
                        <circle cx="57" cy="45" r="7" fill="none" stroke="#1C1917" strokeWidth="2.5" />
                        <path d="M50 45H50.5" stroke="#1C1917" strokeWidth="2.5" />
                        {/* Eyes */}
                        <circle cx="43" cy="45" r="2.2" fill="#1C1917" />
                        <circle cx="57" cy="45" r="2.2" fill="#1C1917" />
                        {/* Smile */}
                        <path d="M44 57C47 60 53 60 56 57" stroke="#1C1917" strokeWidth="2.5" strokeLinecap="round" />
                        {/* Blazer / Collar */}
                        <path d="M30 84C32 72 40 68 50 68C60 68 68 72 70 84" fill="#047857" stroke="#1C1917" strokeWidth="2.5" />
                        <polygon points="50,68 45,82 55,82" fill="#FFFFFF" />
                      </svg>

                      {/* Small badge overlay */}
                      <span className="absolute -bottom-1 -right-1 bg-amber-400 text-[#121212] border border-[#121212] text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-full shadow-sm">
                        IIMB ’29
                      </span>
                    </div>

                    <p className="font-mono text-xs font-semibold text-[#121212] tracking-tight">
                      Koushhiki Roy
                    </p>
                    <p className="font-hand text-base text-stone-600 mt-0.5">
                      "pitching with empathy & clarity"
                    </p>

                    {/* Stamp overlay */}
                    <div className="absolute bottom-2.5 right-2.5 rotate-[-8deg]">
                      <div className="px-2 py-0.5 border border-dashed border-red-700 bg-red-50/90 text-red-700 font-mono text-[9px] font-bold tracking-wider rounded uppercase">
                        Kolkata, IN
                      </div>
                    </div>
                  </div>

                  {/* Polaroid Bottom Caption */}
                  <div className="pt-2 text-center">
                    <p className="font-hand text-2xl font-bold text-[#121212] tracking-wide flex items-center justify-center gap-1">
                      <span>Koushhiki in Kolkata 📍</span>
                      <DoodleSparkle className="w-4 h-4 text-[#1A1A1A] inline-block" strokeColor="#1A1A1A" />
                    </p>
                    <p className="text-[11px] font-mono text-[#625E56] mt-0.5">
                      Click card to flip ↺
                    </p>
                  </div>
                </div>
              ) : (
                /* Back Side: Tactile Quick Pitch Brief */
                <div className="space-y-3 min-h-[340px] flex flex-col justify-between p-2">
                  <div>
                    <div className="flex items-center justify-between border-b border-dashed border-[#121212] pb-2 mb-3">
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-800">
                        ⚡ Quick Dossier
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 bg-neutral-100 rounded border border-neutral-300">
                        Profile KR-26
                      </span>
                    </div>

                    <h3 className="font-black text-base text-[#121212]">
                      Why hire Koushhiki for Sales & Growth?
                    </h3>

                    <ul className="mt-3 space-y-2 text-xs text-[#282828]">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span><strong>In-Person Gravitas:</strong> Comfortable addressing senior buyers and discerning families in live real estate settings.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Outreach Discipline:</strong> Dialed hundreds of cold calls, refined objection scripts, and closed 200+ delegates.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Visual Asset Mastery:</strong> Designs executive-grade pitch decks in Canva/PPT & edits high-performing social video.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-[#E2DED5] flex items-center justify-between">
                    <span className="font-hand text-sm text-stone-600">
                      IIM Bangalore BBA DBE
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
