import React, { useState } from 'react';
import {
  ChevronLeft,
  Share2,
  Copy,
  CheckCheck,
  Check
} from 'lucide-react';
import { playClick, playPop, playCheck } from '../utils/sound';
import { DoodleUnderline, DoodleSparkle } from './HandDrawn';

export default function AppleNotesAbout() {
  const [copiedNote, setCopiedNote] = useState(false);
  const [checkedItems, setCheckedItems] = useState({
    frontend: true,
    backend: true,
    systems: true,
    motion: true,
  });

  const toggleCheck = (id) => {
    playCheck();
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const copyNoteContent = () => {
    playPop();
    const text = `Naman Mishra: Studio & Engineering Memo

Based in Chandigarh. Currently a 3rd-year B.Tech student in Electronics & Communication Engineering at Chandigarh College of Engineering and Technology (CCET, Class of 2028) while building interactive websites and leading tech at ARAEL WEARS.

I hate generic, template-heavy web design. Whether I am engineering a 3D scroll sequence, building a custom storefront, or writing a Python CLI tool, I focus on performance, sharp editorial typography, and tactile interactions that feel intentional.

Working Stack:
- 3D & Frontend: Next.js, React Three Fiber, Three.js, GSAP ScrollTrigger, Tailwind CSS
- E-Commerce & Backend: Shopify Architecture, Razorpay Integrations, Qikink Fulfillment, SQLite
- Systems & Hardware: Python 3.11, MATLAB (DSP), Cadence Virtuoso & GHDL (CMOS VLSI)
- Motion & Media: Custom SVG Character Rigs, FFmpeg Automation, AI-Assisted Prototyping

Working Note:
Good software and good design share the same rule: strip out the bloat, respect the user's hardware, and make every interaction feel immediate.

Contact: mishranaman2411@gmail.com | +91 90154 99931`;

    navigator.clipboard.writeText(text);
    setCopiedNote(true);
    setTimeout(() => setCopiedNote(false), 2500);
  };

  return (
    <section id="about" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-3xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-[#121212] tracking-tight flex items-center justify-center gap-2">
            <span>The Studio &amp; Engineering Memo</span>
            <DoodleSparkle className="w-6 h-6 text-[#1A1A1A] hidden sm:inline-block" strokeColor="#1A1A1A" />
          </h2>

          <div className="w-36 mx-auto mt-2">
            <DoodleUnderline className="w-full h-3.5 text-[#1A1A1A]" strokeColor="#1A1A1A" />
          </div>

          <p className="font-hand text-lg text-stone-600 mt-2">
            Background, build philosophy, and technical stack.
          </p>
        </div>

        {/* Authentic Apple Notes Card */}
        <div className="relative bg-[#FCFBF7] border-[2px] border-[#121212] rounded-2xl shadow-notes overflow-hidden">
          
          {/* Notes Top Navigation Bar */}
          <div className="bg-[#F6F4ED] border-b border-[#E8E4D9] px-4 sm:px-6 py-2.5 flex items-center justify-between select-none">
            <div className="flex items-center gap-1 text-amber-700 font-medium text-xs sm:text-sm">
              <ChevronLeft size={18} className="stroke-[2.5]" />
              <span className="font-semibold">Notes</span>
            </div>

            <div className="flex items-center gap-3 text-[#625E56]">
              <button
                onClick={copyNoteContent}
                className="flex items-center gap-1 text-xs font-mono px-2.5 py-1 rounded border border-[#D5D0C5] bg-white hover:border-[#121212] text-[#121212] transition-colors"
                title="Copy note text"
              >
                {copiedNote ? <CheckCheck size={13} className="text-emerald-700" /> : <Copy size={13} />}
                <span>{copiedNote ? 'Copied' : 'Copy'}</span>
              </button>

              <button
                onClick={() => { playClick(); copyNoteContent(); }}
                className="p-1 rounded hover:bg-black/5 transition-colors"
                title="Share note"
                aria-label="Share note"
              >
                <Share2 size={16} />
              </button>
            </div>
          </div>

          {/* Notes Ruled Single-Column Paper Body */}
          <div className="apple-notes-paper p-6 sm:p-10 md:p-12 text-[#121212]">
            
            {/* Timestamp */}
            <div className="text-center pb-6">
              <span className="text-xs font-mono text-[#8C867A] uppercase tracking-wider">
                November 25, 2026 at 6:30 PM
              </span>
            </div>

            {/* Note Title */}
            <div className="pb-6">
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-[#121212] leading-tight">
                Naman Mishra: 3D Web, Product Systems &amp; ECE
              </h1>
            </div>

            {/* Thin 1px Horizontal Divider */}
            <div className="border-t border-[#E8E4D9] my-6" />

            {/* Single-Column Overview */}
            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[#282828]">
              <p>
                Based in{' '}
                <mark className="bg-[#FEF08A]/90 text-[#121212] px-1 py-0.5 rounded-sm font-semibold">
                  Chandigarh
                </mark>
                . Currently a 3rd-year B.Tech student in Electronics &amp; Communication Engineering at Chandigarh College of Engineering and Technology (
                <mark className="bg-[#FEF08A]/90 text-[#121212] px-1 py-0.5 rounded-sm font-semibold">
                  CCET, Class of 2028
                </mark>
                ) while building interactive websites and leading tech at{' '}
                <mark className="bg-[#FEF08A]/90 text-[#121212] px-1 py-0.5 rounded-sm font-semibold">
                  ARAEL WEARS
                </mark>
                .
              </p>

              <p>
                I hate generic, template-heavy web design. Whether I am engineering a{' '}
                <mark className="bg-[#FEF08A]/90 text-[#121212] px-1 py-0.5 rounded-sm font-semibold">
                  3D scroll sequence
                </mark>
                , building a custom storefront, or writing a Python CLI tool, I focus on performance, sharp editorial typography, and tactile interactions that feel intentional.
              </p>
            </div>

            {/* Thin 1px Horizontal Divider */}
            <div className="border-t border-[#E8E4D9] my-6" />

            {/* Section: Working Stack Checklist */}
            <div className="space-y-4">
              <div className="flex items-baseline justify-between">
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#625E56]">
                  Working Stack
                </h3>
                <span className="text-[11px] font-mono text-stone-400">
                  Tap circle to check off
                </span>
              </div>

              <div className="space-y-3.5">
                {[
                  {
                    id: 'frontend',
                    title: '3D & Frontend',
                    desc: 'Next.js, React Three Fiber, Three.js, GSAP ScrollTrigger, Tailwind CSS',
                  },
                  {
                    id: 'backend',
                    title: 'E-Commerce & Backend',
                    desc: 'Shopify Architecture, Razorpay Integrations, Qikink Fulfillment, SQLite',
                  },
                  {
                    id: 'systems',
                    title: 'Systems & Hardware',
                    desc: 'Python 3.11, MATLAB (DSP), Cadence Virtuoso & GHDL (CMOS VLSI)',
                  },
                  {
                    id: 'motion',
                    title: 'Motion & Media',
                    desc: 'Custom SVG Character Rigs, FFmpeg Automation, AI-Assisted Prototyping',
                  },
                ].map((item) => (
                  <div key={item.id} className="flex items-start gap-3 select-none">
                    <button
                      type="button"
                      onClick={() => toggleCheck(item.id)}
                      className={`mt-1 w-4 h-4 rounded-full border flex items-center justify-center flex-shrink-0 transition-colors ${
                        checkedItems[item.id]
                          ? 'border-amber-600 bg-amber-500 text-white'
                          : 'border-stone-400 bg-transparent'
                      }`}
                      aria-label={`Toggle ${item.title}`}
                    >
                      {checkedItems[item.id] && <Check size={11} className="stroke-[3]" />}
                    </button>

                    <div className="text-sm leading-relaxed">
                      <strong className={`font-bold text-[#121212] ${checkedItems[item.id] ? '' : 'line-through opacity-60'}`}>
                        {item.title}:
                      </strong>{' '}
                      <span className={`text-[#282828] ${checkedItems[item.id] ? '' : 'opacity-60'}`}>
                        {item.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Thin 1px Horizontal Divider */}
            <div className="border-t border-[#E8E4D9] my-6" />

            {/* Section: Working Note */}
            <div className="space-y-2 text-sm leading-relaxed text-[#282828]">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#625E56]">
                Working Note
              </h3>
              <p className="italic text-stone-700">
                "Good software and good design share the same rule: strip out the bloat, respect the user's hardware, and make every interaction feel immediate."
              </p>
            </div>

            {/* Note Bottom Metadata */}
            <div className="border-t border-[#E8E4D9] mt-8 pt-4 flex items-center justify-between text-[11px] font-mono text-[#8C867A]">
              <span>Last edited today</span>
              <span>Chandigarh, IN</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
