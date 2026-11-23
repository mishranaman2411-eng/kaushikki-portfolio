import React from 'react';


export default function PrintResume() {
  return (
    <div id="printable-resume" className="hidden print:block bg-white text-black font-sans leading-normal">
      {/* Print-only Resume Container */}
      <div className="max-w-4xl mx-auto py-2">
        {/* Header */}
        <header className="border-b-2 border-black pb-3 mb-4">
          <div className="flex justify-between items-baseline">
            <h1 className="text-3xl font-extrabold tracking-tight uppercase text-black">
              Koushhiki Roy
            </h1>
            <span className="text-xs font-semibold text-gray-700 uppercase tracking-widest">
              Digital Marketing & Sales
            </span>
          </div>

          <p className="text-xs text-gray-700 mt-1 flex flex-wrap gap-x-4 gap-y-1">
            <span>Kolkata, West Bengal, India</span>
            <span>•</span>
            <span>koushhikiroy@gmail.com</span>
            <span>•</span>
            <span>+91 898 1788 534</span>
            <span>•</span>
            <span>linkedin.com/in/koushhikiroy</span>
          </p>

          <p className="text-xs text-gray-800 mt-2.5 leading-relaxed text-justify">
            Ambitious Digital Marketing & Sales student at <strong>IIM Bangalore (BBA DBE)</strong> with a proven track record in high-conversion in-person pitching, cold outreach, and client acquisition. Successfully pitched to 50+ live clients at Team Taurus and drove cold campaigns for 200+ clients and families at Dublieu. Combines strategic business insight with creative visual execution in Canva, video editing, and modern AI tools.
          </p>
        </header>

        {/* Two column or stacked layout */}
        <div className="space-y-4">
          {/* Education */}
          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-black border-b border-gray-400 pb-0.5 mb-2 flex items-center gap-1.5">
              <span>Education</span>
            </h2>
            <div className="space-y-2 text-xs">
              <div>
                <div className="flex justify-between font-bold">
                  <span>Indian Institute of Management Bangalore (IIM Bangalore)</span>
                  <span className="font-semibold text-gray-700">2026 – 2029</span>
                </div>
                <div className="flex justify-between text-gray-800 italic">
                  <span>Bachelor of Business Administration in Digital Business & Entrepreneurship (BBA DBE)</span>
                  <span>Bangalore, India</span>
                </div>
                <p className="text-gray-700 text-[11px] mt-0.5">
                  Core coursework: Digital Growth Strategy, Consultative Sales & Negotiation, Market Analytics, Business Communications.
                </p>
              </div>

              <div>
                <div className="flex justify-between font-bold">
                  <span>Holy Mother’s Academy</span>
                  <span className="font-semibold text-gray-700">2026</span>
                </div>
                <div className="flex justify-between text-gray-800 italic">
                  <span>Higher Secondary Certificate (Class XII)</span>
                  <span>Kolkata, India</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between font-bold">
                  <span>Delhi Public School Megacity (DPS Megacity)</span>
                  <span className="font-semibold text-gray-700">2023</span>
                </div>
                <div className="flex justify-between text-gray-800 italic">
                  <span>Secondary School Examination (Class X)</span>
                  <span>Kolkata, India</span>
                </div>
              </div>
            </div>
          </section>

          {/* Work Experience */}
          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-black border-b border-gray-400 pb-0.5 mb-2">
              Professional Experience
            </h2>
            <div className="space-y-3 text-xs">
              <div>
                <div className="flex justify-between font-bold">
                  <span>Team Taurus</span>
                  <span className="font-semibold text-gray-700">2026 – Present</span>
                </div>
                <div className="flex justify-between text-gray-800 italic mb-1">
                  <span>Sales Intern</span>
                  <span>Kolkata, India</span>
                </div>
                <ul className="list-disc pl-4 space-y-1 text-gray-800 text-[11.5px]">
                  <li>
                    Conducted live in-person sales presentations and consultative walkthroughs for <strong>50+ prospective clients</strong>, maintaining meticulous attention to detail and personalized buyer requirements.
                  </li>
                  <li>
                    Navigated client objections with empathy and precision, building high-trust relationships that accelerated the closing pipeline.
                  </li>
                  <li>
                    Collaborated on real estate marketing collateral, pitch decks, and comparative market assessments to position luxury and commercial developments effectively.
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between font-bold">
                  <span>Dublieu</span>
                  <span className="font-semibold text-gray-700">2023 – Dec 2024</span>
                </div>
                <div className="flex justify-between text-gray-800 italic mb-1">
                  <span>Marketing Intern</span>
                  <span>Kolkata / Hybrid</span>
                </div>
                <ul className="list-disc pl-4 space-y-1 text-gray-800 text-[11.5px]">
                  <li>
                    Spearheaded targeted cold outreach campaigns via structured phone calls, personalized email sequences, and WhatsApp messaging, converting <strong>200+ clients, parents, and student delegates</strong> for educational events and Model United Nations (MUN).
                  </li>
                  <li>
                    Conducted outreach to local small business owners and community partners, securing invitations and co-sponsorships for youth leadership summits.
                  </li>
                  <li>
                    Refined high-impact call scripts, tracked conversion funnel metrics, and maintained customer databases with consistent follow-ups.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Certifications & Diplomas */}
          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-black border-b border-gray-400 pb-0.5 mb-2">
              Certifications & Leadership Programs
            </h2>
            <ul className="list-disc pl-4 space-y-1 text-xs text-gray-800">
              <li>
                <strong>Clever Harvey (Junior CEO / Junior CMO / Junior CFO):</strong> Intensive business simulation programs in strategy formulation, brand marketing campaigns, and financial decision-making.
              </li>
              <li>
                <strong>Diploma in Real Estate Marketing & Sales:</strong> Comprehensive training in client prospecting, value proposition articulation, and property transactions.
              </li>
              <li>
                <strong>AI Tools & Designing Certification:</strong> Applied generative AI workflows for marketing content creation, rapid graphic prototyping, and campaign automation.
              </li>
            </ul>
          </section>

          {/* Core Competencies & Technical Skills */}
          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-black border-b border-gray-400 pb-0.5 mb-2">
              Skills & Proficiencies
            </h2>
            <div className="text-xs space-y-1 text-gray-800">
              <p>
                <strong className="text-black">Sales & Marketing:</strong> In-Person Client Pitching, Cold Calling & Email Outreach, Client Conversion & Negotiation, Lead Generation, Event Promotion, Relationship Management.
              </p>
              <p>
                <strong className="text-black">Design & Productivity Stack:</strong> Canva (Pitch Decks, Social Graphics), Video Editing (Shorts, Reels, Promotional Cuts), Microsoft Excel (Data Analysis, Models), Microsoft PowerPoint, Microsoft Word.
              </p>
              <p>
                <strong className="text-black">Emerging Tech:</strong> Generative AI Prompting, Midjourney/DALL-E Asset Creation, Modern Productivity Systems.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
