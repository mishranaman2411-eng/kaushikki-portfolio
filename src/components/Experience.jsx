import React, { useState } from 'react';
import { 
  Briefcase, 
  Flame, 
  PhoneCall, 
  Users, 
  Target, 
  Sparkles, 
  ArrowUpRight, 
  CheckCircle2, 
  Layers, 
  FileText,
  MessageSquare,
  ShieldCheck
} from 'lucide-react';
import { 
  DoodleUnderline, 
  DoodleArrow, 
  DoodleCircle, 
  DoodleSparkle, 
  DoodleDivider, 
  TactileStamp, 
  PaperClip 
} from './HandDrawn';
import { playClick, playPop } from '../utils/sound';

export default function Experience() {
  const [expandedBrief, setExpandedBrief] = useState('taurus');

  const handleToggleExpand = (id) => {
    playClick();
    setExpandedBrief(expandedBrief === id ? null : id);
  };

  return (
    <section id="experience" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#121212] shadow-tactile rounded-full text-xs font-mono font-bold text-[#121212] mb-2.5">
            <Briefcase size={13} className="text-orange-600" />
            <span>FIELD DOSSIER • SALES & MARKETING</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#121212] tracking-tight flex items-center justify-center gap-2">
            <span>Tactile Experience Briefs</span>
            <DoodleSparkle className="w-7 h-7 text-[#1A1A1A] hidden sm:inline-block" strokeColor="#1A1A1A" />
          </h2>

          <div className="w-44 mx-auto mt-2">
            <DoodleUnderline className="w-full h-4 text-[#1A1A1A]" strokeColor="#1A1A1A" />
          </div>

          <p className="font-hand text-lg sm:text-xl text-stone-600 mt-2 max-w-xl mx-auto">
            Real clients, high-stakes pitching, and hundreds of outbound touchpoints.
          </p>
        </div>

        {/* Experience Dossier Cards Stack */}
        <div className="space-y-8">
          
          {/* Card 1: Team Taurus — Sales Intern */}
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
                    Live Client Sales
                  </span>
                  <span className="font-mono text-xs text-[#625E56]">
                    2026 – Present • Kolkata, India
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-[#121212] mt-2">
                  Team Taurus
                </h3>

                <p className="text-sm sm:text-base font-semibold text-orange-800">
                  Sales Intern — In-Person Pitching & Client Acquisition
                </p>
              </div>

              {/* 50+ Clients Badge Stamp with Hand-Drawn Circle Loop */}
              <div className="relative flex-shrink-0 self-start group/stamp mt-1 sm:mt-0">
                <div className="absolute -inset-3 pointer-events-none z-20">
                  <DoodleCircle className="w-full h-full text-[#1A1A1A]" strokeColor="#1A1A1A" />
                </div>
                <TactileStamp label="IN-PERSON PITCH" count="50+ CLIENTS" color="orange" />
              </div>
            </div>

            {/* Core Narrative & Highlights */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6">
              <div className="lg:col-span-8 space-y-4">
                <p className="text-sm sm:text-base text-[#282828] leading-relaxed">
                  Stepped directly into the high-stakes arena of client sales at <strong className="font-bold text-[#121212]">Team Taurus</strong>. Handled one-on-one discovery and presentation walkthroughs for premium real estate buyer portfolios, with meticulous attention to detail on pricing, structural specifications, and long-term investment value.
                </p>

                <div className="space-y-2.5 pt-1">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#625E56] flex items-center gap-1.5">
                    <Target size={14} className="text-orange-600" />
                    <span>Key Responsibilities & Operational Wins</span>
                  </h4>

                  <ul className="space-y-2 text-xs sm:text-sm text-[#282828]">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span><strong>50+ Live In-Person Pitches:</strong> Personally presented project portfolios to over 50 prospective buyers, diagnosing unique budget limits and aesthetic desires.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span><strong>High-Fidelity Attention to Detail:</strong> Memorized complex project architectural blueprints, payment milestones, and statutory clearances to address buyer skepticism instantly.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Consultative Objection Handling:</strong> Re-framed client hesitations on possession timelines and financing into clear risk-mitigated options, maintaining strong lead momentum.</span>
                    </li>
                  </ul>
                </div>

                {/* Behind the Pitch Drawer Toggle */}
                <div className="pt-2">
                  <button
                    onClick={() => handleToggleExpand('taurus')}
                    className="text-xs font-mono font-bold text-orange-900 bg-orange-50 hover:bg-orange-100 border border-orange-300 rounded-lg px-3 py-1.5 flex items-center gap-1.5 transition-colors"
                  >
                    <MessageSquare size={13} />
                    <span>{expandedBrief === 'taurus' ? 'Hide Pitch Playbook ▲' : 'Open Inside-the-Pitch Playbook ▼'}</span>
                  </button>

                  {expandedBrief === 'taurus' && (
                    <div className="mt-3 p-4 rounded-xl bg-[#FAF8F3] border border-[#E2DED5] text-xs space-y-2 animate-in fade-in duration-200">
                      <p className="font-bold text-[#121212]">
                        Tactical takeaway from Team Taurus:
                      </p>
                      <p className="text-stone-700 leading-relaxed">
                        "High-ticket buyers don't buy square footage; they buy confidence in the person standing across from them. By greeting each family with customized comparative sheets and addressing their unasked questions first, their guard drops within the first 4 minutes."
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column: Tactile Spec Box */}
              <div className="lg:col-span-4 bg-[#FAF8F5] rounded-2xl border-[1.5px] border-[#121212] p-4 sm:p-5 flex flex-col justify-between space-y-4">
                <div>
                  <div className="font-mono text-[11px] font-bold uppercase text-[#625E56] border-b border-[#E2DED5] pb-1.5 mb-2.5 flex items-center justify-between">
                    <span>Role Telemetry</span>
                    <span className="text-emerald-600">Active</span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div>
                      <span className="text-[#625E56] block text-[11px]">Primary Skill:</span>
                      <span className="font-bold text-[#121212]">In-Person Consultative Pitch</span>
                    </div>
                    <div>
                      <span className="text-[#625E56] block text-[11px]">Target Audience:</span>
                      <span className="font-bold text-[#121212]">HNW Families, Homebuyers & Investors</span>
                    </div>
                    <div>
                      <span className="text-[#625E56] block text-[11px]">Key Metric:</span>
                      <span className="font-bold text-orange-700 text-sm">50+ In-Person Pitches</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#E2DED5]">
                  <span className="font-hand text-xs text-stone-600 block">
                    Verified through live dealership & site floor presentations.
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Rough Index-Card Divider Line */}
          <div className="py-1 px-4">
            <DoodleDivider className="w-full h-3 text-[#1A1A1A]" strokeColor="#1A1A1A" />
          </div>

          {/* Card 2: Dublieu — Marketing Intern */}
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
                    Outbound & Growth
                  </span>
                  <span className="font-mono text-xs text-[#625E56]">
                    2023 – Dec 2024 • Kolkata / Remote
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-[#121212] mt-2">
                  Dublieu
                </h3>

                <p className="text-sm sm:text-base font-semibold text-emerald-800">
                  Marketing Intern — Cold Outreach, MUN Events & Small Business Partnerships
                </p>
              </div>

              {/* 200+ Clients Badge Stamp with Hand-Drawn Circle Loop */}
              <div className="relative flex-shrink-0 self-start group/stamp mt-1 sm:mt-0">
                <div className="absolute -inset-3 pointer-events-none z-20">
                  <DoodleCircle className="w-full h-full text-[#1A1A1A]" strokeColor="#1A1A1A" />
                </div>
                <TactileStamp label="COLD OUTREACH" count="200+ CLIENTS" color="green" />
              </div>
            </div>

            {/* Core Narrative & Highlights */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6">
              <div className="lg:col-span-8 space-y-4">
                <p className="text-sm sm:text-base text-[#282828] leading-relaxed">
                  Owned cold outbound marketing at <strong className="font-bold text-[#121212]">Dublieu</strong> across high-energy youth leadership conferences, MUN delegations, and local business sponsorships. Executed structured phone cadences and tailored email pitches to engage discerning parents, educators, and enterprise partners.
                </p>

                <div className="space-y-2.5 pt-1">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#625E56] flex items-center gap-1.5">
                    <Target size={14} className="text-emerald-700" />
                    <span>Outbound Engine & Deliverables</span>
                  </h4>

                  <ul className="space-y-2 text-xs sm:text-sm text-[#282828]">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span><strong>200+ Converted Leads & Delegates:</strong> Dialed hundreds of calls to parents and high school students, answering queries regarding academic accreditation, safety, and debate prestige.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Small Business Partner Invitations:</strong> Contacted and pitched local Kolkata cafe owners, merchandise creators, and educational publishers to sponsor youth summits.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Multi-Touch Cadence:</strong> Orchestrated email, phone, and WhatsApp sequences that achieved sustained response rates above industry benchmarks.</span>
                    </li>
                  </ul>
                </div>

                {/* Behind the Pitch Drawer Toggle */}
                <div className="pt-2">
                  <button
                    onClick={() => handleToggleExpand('dublieu')}
                    className="text-xs font-mono font-bold text-emerald-900 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-lg px-3 py-1.5 flex items-center gap-1.5 transition-colors"
                  >
                    <MessageSquare size={13} />
                    <span>{expandedBrief === 'dublieu' ? 'Hide Cold Call Script ▲' : 'Open Cold Calling Strategy ▼'}</span>
                  </button>

                  {expandedBrief === 'dublieu' && (
                    <div className="mt-3 p-4 rounded-xl bg-[#FAF8F3] border border-[#E2DED5] text-xs space-y-2 animate-in fade-in duration-200">
                      <p className="font-bold text-[#121212]">
                        Tactical outbound lesson from Dublieu:
                      </p>
                      <p className="text-stone-700 leading-relaxed">
                        "Parents aren't buying an MUN conference ticket; they are investing in their child's confidence, public speaking articulation, and college CV. When you open with how this event transforms timid speakers into school debaters, the sale becomes a collaborative decision."
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column: Tactile Spec Box */}
              <div className="lg:col-span-4 bg-[#FAF8F5] rounded-2xl border-[1.5px] border-[#121212] p-4 sm:p-5 flex flex-col justify-between space-y-4">
                <div>
                  <div className="font-mono text-[11px] font-bold uppercase text-[#625E56] border-b border-[#E2DED5] pb-1.5 mb-2.5 flex items-center justify-between">
                    <span>Campaign Telemetry</span>
                    <span className="text-emerald-600">Completed</span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div>
                      <span className="text-[#625E56] block text-[11px]">Outbound Channels:</span>
                      <span className="font-bold text-[#121212]">Phone, Email Sequences, WhatsApp</span>
                    </div>
                    <div>
                      <span className="text-[#625E56] block text-[11px]">Ecosystem:</span>
                      <span className="font-bold text-[#121212]">Model United Nations (MUN) & Vendors</span>
                    </div>
                    <div>
                      <span className="text-[#625E56] block text-[11px]">Converted Volume:</span>
                      <span className="font-bold text-emerald-700 text-sm">200+ Paid Clients & Delegates</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#E2DED5]">
                  <span className="font-hand text-xs text-stone-600 block">
                    Zero automation spam. Every email & call was tailored by hand.
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
