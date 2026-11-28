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
    design: true,
    frontend: true,
    motion: true,
    stores: true,
  });

  const toggleCheck = (id) => {
    playCheck();
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const copyNoteContent = () => {
    playPop();
    const text = `Naman Mishra: Studio Memo

Based in Chandigarh. I am a creative web designer, founder of Weerolliinn, CTO at ARAEL WEARS, and a 3rd-year B.Tech ECE student at Chandigarh College of Engineering and Technology (CCET, Class of 2028).

I hate generic, template-heavy design. When someone visits your website, it only takes a few seconds for them to decide if your brand feels real. I focus on good design, smooth interactions, and fast loading so visitors trust your business right away.

Tools I Use:
- Design & Layout: Custom fonts, clean spacing, and mobile-friendly pages
- Web Fundamentals: HTML, CSS, JavaScript, TypeScript, React, Next.js
- Smooth Motion: GSAP scroll animations, interactive buttons, and Three.js (3D) when a project calls for it
- Online Stores: Product pop-ups, lookbooks, and clear checkout flows

Working Note:
Good design is simple: load fast, make every interaction feel smooth, and help visitors trust the brand.

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
            <span>The Studio Memo</span>
            <DoodleSparkle className="w-6 h-6 text-[#1A1A1A] hidden sm:inline-block" strokeColor="#1A1A1A" />
          </h2>

          <div className="w-36 mx-auto mt-2">
            <DoodleUnderline className="w-full h-3.5 text-[#1A1A1A]" strokeColor="#1A1A1A" />
          </div>

          <p className="font-hand text-lg text-stone-600 mt-2">
            Background, how I work, and the tools I use.
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
                November 28, 2026 at 12:30 PM
              </span>
            </div>

            {/* Note Title */}
            <div className="pb-6">
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-[#121212] leading-tight">
                Naman Mishra: Creative Web Designer
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
                . I am a creative web designer, founder of{' '}
                <mark className="bg-[#FEF08A]/90 text-[#121212] px-1 py-0.5 rounded-sm font-semibold">
                  Weerolliinn
                </mark>
                , CTO at{' '}
                <mark className="bg-[#FEF08A]/90 text-[#121212] px-1 py-0.5 rounded-sm font-semibold">
                  ARAEL WEARS
                </mark>
                , and a 3rd-year B.Tech ECE student at CCET Chandigarh (Class of 2028).
              </p>

              <p>
                I hate generic, template-heavy design. When a customer lands on your site, it takes just a few seconds to decide if your brand feels real. I focus on{' '}
                <mark className="bg-[#FEF08A]/90 text-[#121212] px-1 py-0.5 rounded-sm font-semibold">
                  good design, smooth interactions, and fast loading
                </mark>{' '}
                so visitors trust what you offer from the first click.
              </p>
            </div>

            {/* Thin 1px Horizontal Divider */}
            <div className="border-t border-[#E8E4D9] my-6" />

            {/* Section: Tools I Use Checklist */}
            <div className="space-y-4">
              <div className="flex items-baseline justify-between">
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#625E56]">
                  Tools &amp; Skills
                </h3>
                <span className="text-[11px] font-mono text-stone-400">
                  Tap circle to check off
                </span>
              </div>

              <div className="space-y-3.5">
                {[
                  {
                    id: 'design',
                    title: 'Design & Layout',
                    desc: 'Custom fonts, clean dark or light styles, and phone-friendly pages',
                  },
                  {
                    id: 'frontend',
                    title: 'Web Fundamentals',
                    desc: 'HTML, CSS, JavaScript, TypeScript, React, Next.js, Tailwind CSS',
                  },
                  {
                    id: 'motion',
                    title: 'Motion & Interactive',
                    desc: 'GSAP scroll animations, interactive cards, and Three.js (3D) when a site needs it',
                  },
                  {
                    id: 'stores',
                    title: 'Online Stores',
                    desc: 'Product detail pop-ups, lookbooks, and simple order screens',
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
                "Good design is simple: make the page load fast, make every interaction feel smooth, and help visitors trust the brand right away."
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
