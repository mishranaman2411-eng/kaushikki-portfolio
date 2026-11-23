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
    pitch: true,
    outreach: true,
    objections: true,
    followup: true,
  });

  const toggleCheck = (id) => {
    playCheck();
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const copyNoteContent = () => {
    playPop();
    const text = `Koushhiki Roy: Strategic Sales & Digital Marketing

Based in Kolkata. Currently pursuing a Bachelor of Business Administration in Digital Business & Entrepreneurship (BBA DBE) at IIM Bangalore (2026–2029).

In the Field:
- In-person client pitching: Presented property portfolios to 50+ live clients at Team Taurus. Handled high-stakes presentations and answered buyer questions on the spot.
- Cold outreach & client conversion: Reached out to parents, students, and businesses at Dublieu, converting 200+ clients across cold calling and email sequences.
- Objection handling: Dissecting hesitation around pricing and timing to resolve concerns with clarity.
- Consistent follow-through: Structured follow-ups and lead tracking.

Daily Stack:
- Canva & Video Editing: Client pitch decks, visual campaign assets, and narrative video edits.
- Microsoft Excel: Lead tracking, data organization, and outreach conversion analysis.
- Microsoft PowerPoint & Word: Structured client briefs and presentation decks.
- Generative AI: Prompt engineering for research and creative ideation.

Working Note:
A good pitch isn't a speech. It is a conversation where the client discovers their own need before you even suggest the solution.

Contact: koushhikiroy@gmail.com | +91 898 1788 534`;

    navigator.clipboard.writeText(text);
    setCopiedNote(true);
    setTimeout(() => setCopiedNote(false), 2500);
  };

  return (
    <section id="about" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-3xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-neutral-100 border border-[#121212] rounded-full text-xs font-mono font-bold text-[#121212] mb-2.5">
            <span>APPLE NOTES ENTRY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-[#121212] tracking-tight flex items-center justify-center gap-2">
            <span>The About Me Memo</span>
            <DoodleSparkle className="w-6 h-6 text-[#1A1A1A] hidden sm:inline-block" strokeColor="#1A1A1A" />
          </h2>

          <div className="w-36 mx-auto mt-2">
            <DoodleUnderline className="w-full h-3.5 text-[#1A1A1A]" strokeColor="#1A1A1A" />
          </div>

          <p className="font-hand text-lg text-stone-600 mt-2">
            Personal notes, background, and operational approach.
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
                November 24, 2026 at 10:42 AM
              </span>
            </div>

            {/* Note Title */}
            <div className="pb-6">
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-[#121212] leading-tight">
                Koushhiki Roy: Strategic Sales & Digital Marketing
              </h1>
            </div>

            {/* Thin 1px Horizontal Divider */}
            <div className="border-t border-[#E8E4D9] my-6" />

            {/* Single-Column Overview */}
            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[#282828]">
              <p>
                Based in{' '}
                <mark className="bg-[#FEF08A]/90 text-[#121212] px-1 py-0.5 rounded-sm font-semibold">
                  Kolkata
                </mark>
                . Currently studying in the Bachelor of Business Administration in Digital Business & Entrepreneurship (BBA DBE) program at{' '}
                <mark className="bg-[#FEF08A]/90 text-[#121212] px-1 py-0.5 rounded-sm font-semibold">
                  IIM Bangalore (2026–2029)
                </mark>
                .
              </p>

              <p>
                I focus on consultative selling, outbound outreach, and hands-on digital marketing. Most people find cold outreach intimidating; I find it clarifying. When I am presenting to a client or picking up the phone, my focus is not on pitching harder—it is on uncovering what the buyer actually values, addressing their doubt directly, and building trust that lasts beyond a single transaction.
              </p>
            </div>

            {/* Thin 1px Horizontal Divider */}
            <div className="border-t border-[#E8E4D9] my-6" />

            {/* Section: In the Field */}
            <div className="space-y-4">
              <div className="flex items-baseline justify-between">
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#625E56]">
                  In the Field
                </h3>
                <span className="text-[11px] font-mono text-stone-400">
                  Tap circle to check off
                </span>
              </div>

              <div className="space-y-3.5">
                {[
                  {
                    id: 'pitch',
                    title: 'In-person client pitching',
                    desc: (
                      <>
                        Presented high-value property portfolios to{' '}
                        <mark className="bg-[#FEF08A]/90 text-[#121212] px-1 py-0.5 rounded-sm font-semibold">
                          50+ live clients
                        </mark>{' '}
                        at Team Taurus. Learned how to read body language, break down pricing structures without hesitation, and keep high-stakes conversations grounded.
                      </>
                    ),
                  },
                  {
                    id: 'outreach',
                    title: 'Cold outreach & client conversion',
                    desc: (
                      <>
                        Rebuilt outbound scripts at Dublieu, reaching out directly to parents, students, and small businesses to convert over{' '}
                        <mark className="bg-[#FEF08A]/90 text-[#121212] px-1 py-0.5 rounded-sm font-semibold">
                          200+ clients
                        </mark>{' '}
                        for regional summits and educational events.
                      </>
                    ),
                  },
                  {
                    id: 'objections',
                    title: 'Consultative objection handling',
                    desc: 'Treating buyer hesitation around pricing, delivery dates, or trust as a diagnostic tool rather than a dead end.',
                  },
                  {
                    id: 'followup',
                    title: 'Pipeline follow-through',
                    desc: 'Maintaining structured lead logs and disciplined follow-ups so conversations actually lead to decisions.',
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

            {/* Section: Working Stack */}
            <div className="space-y-3">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#625E56]">
                Working Stack
              </h3>

              <ul className="space-y-2 text-sm leading-relaxed text-[#282828] list-none pl-0">
                <li className="flex items-start gap-2">
                  <span className="text-[#8C867A] font-mono">•</span>
                  <span>
                    <strong className="text-[#121212]">Canva & Video Editing:</strong> Designing high-conversion sales decks, marketing collateral, and narrative short-form video cuts for campaigns.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8C867A] font-mono">•</span>
                  <span>
                    <strong className="text-[#121212]">Microsoft Excel:</strong> Structuring lead databases, tracking conversion ratios, and managing clean pipeline records.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8C867A] font-mono">•</span>
                  <span>
                    <strong className="text-[#121212]">Microsoft PowerPoint & Word:</strong> Crafting client pitch presentations, proposals, and executive briefing notes.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8C867A] font-mono">•</span>
                  <span>
                    <strong className="text-[#121212]">Generative AI:</strong> Prompting workflows for market research, message variation testing, and creative brainstorming.
                  </span>
                </li>
              </ul>
            </div>

            {/* Thin 1px Horizontal Divider */}
            <div className="border-t border-[#E8E4D9] my-6" />

            {/* Section: Working Note */}
            <div className="space-y-2 text-sm leading-relaxed text-[#282828]">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#625E56]">
                Working Note
              </h3>
              <p className="italic text-stone-700">
                "Selling is not persuading someone to buy something they do not need. It is asking the right questions so they can see their own problem clearly, and having the discipline and product knowledge to solve it."
              </p>
            </div>

            {/* Note Bottom Metadata */}
            <div className="border-t border-[#E8E4D9] mt-8 pt-4 flex items-center justify-between text-[11px] font-mono text-[#8C867A]">
              <span>Last edited today</span>
              <span>Kolkata, IN</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
