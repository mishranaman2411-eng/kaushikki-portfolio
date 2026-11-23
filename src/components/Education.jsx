import React, { useState } from 'react';
import { 
  GraduationCap, 
  Award, 
  Calendar, 
  MapPin, 
  CheckCircle, 
  ExternalLink, 
  Sparkles,
  BookOpen,
  BriefcaseBusiness,
  Bot
} from 'lucide-react';
import { 
  DoodleUnderline, 
  DoodleSparkle, 
  DoodleDivider, 
  Sparkle 
} from './HandDrawn';
import { playClick, playPop } from '../utils/sound';

export default function Education() {
  const [activeFilter, setActiveFilter] = useState('all');

  const educationList = [
    {
      institution: "Indian Institute of Management Bangalore (IIM Bangalore)",
      degree: "Bachelor of Business Administration in Digital Business & Entrepreneurship (BBA DBE)",
      period: "2026 – 2029",
      location: "Bangalore, India",
      tag: "Undergraduate • Top B-School",
      status: "In Progress",
      color: "bg-emerald-50 border-emerald-300 text-emerald-950",
      accent: "text-emerald-800",
      details: [
        "Rigorous coursework in digital business models, consultative sales negotiation, corporate finance, and entrepreneurial ventures.",
        "Hands-on case study approach solving real-world go-to-market and distribution challenges.",
        "Developing analytical frameworks for digital customer acquisition, lifetime value, and brand strategy."
      ]
    },
    {
      institution: "Holy Mother’s Academy",
      degree: "Higher Secondary Certificate (Class XII)",
      period: "2026",
      location: "Kolkata, India",
      tag: "Senior Secondary",
      status: "Graduated",
      color: "bg-white border-[#121212] text-[#121212]",
      accent: "text-amber-800",
      details: [
        "Focused academic curriculum strengthening analytical thinking, commerce, and communication foundations.",
        "Active participation in speech, debate, and school cultural initiatives."
      ]
    },
    {
      institution: "Delhi Public School Megacity (DPS Megacity)",
      degree: "Secondary School Examination (Class X)",
      period: "2023",
      location: "Kolkata, India",
      tag: "Foundational Secondary",
      status: "Graduated",
      color: "bg-white border-[#121212] text-[#121212]",
      accent: "text-stone-800",
      details: [
        "Comprehensive holistic secondary schooling across languages, sciences, and humanities.",
        "Early involvement in Model United Nations (MUN) events that sparked a passion for persuasive public speaking."
      ]
    }
  ];

  const certificationsList = [
    {
      title: "Clever Harvey Business Fellowships",
      role: "Junior CEO • Junior CMO • Junior CFO",
      issuer: "Clever Harvey",
      tag: "Strategic Leadership & Finance",
      icon: BriefcaseBusiness,
      badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
      summary: "Three rigorous industry simulations solving strategic leadership crises, multi-channel marketing campaigns, and financial balance sheet forecasting."
    },
    {
      title: "Diploma in Real Estate Marketing & Sales",
      role: "Specialized Professional Certification",
      issuer: "Industry Accredited",
      tag: "High-Ticket Client Acquisition",
      icon: Award,
      badgeColor: "bg-orange-100 text-orange-900 border-orange-300",
      summary: "Comprehensive practical study on luxury property positioning, client psychology, comparative market analysis, and high-value contract closing."
    },
    {
      title: "AI Tools & Designing Certification",
      role: "Applied Generative AI & Visual Workflow",
      issuer: "Professional AI & Design Institute",
      tag: "Emerging Tech & Creative Automation",
      icon: Bot,
      badgeColor: "bg-purple-100 text-purple-900 border-purple-300",
      summary: "Mastery of generative AI prompting, visual prototyping in Canva/Midjourney, and leveraging modern AI workflows for high-velocity marketing pipelines."
    }
  ];

  return (
    <section id="credentials" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#121212] shadow-tactile rounded-full text-xs font-mono font-bold text-[#121212] mb-2.5">
            <GraduationCap size={13} className="text-amber-600" />
            <span>ACADEMIC & PROFESSIONAL CREDENTIALS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#121212] tracking-tight flex items-center justify-center gap-2">
            <span>Stacked Index Cards</span>
            <DoodleSparkle className="w-7 h-7 text-[#1A1A1A] hidden sm:inline-block" strokeColor="#1A1A1A" />
          </h2>

          <div className="w-48 mx-auto mt-2">
            <DoodleUnderline className="w-full h-4 text-[#1A1A1A]" strokeColor="#1A1A1A" />
          </div>

          <p className="font-hand text-lg sm:text-xl text-stone-600 mt-2 max-w-xl mx-auto">
            Rigorous business training at IIM Bangalore paired with certified marketing specializations.
          </p>
        </div>

        {/* Part 1: Education Stacked Index Cards */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#121212] pb-2">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#121212] flex items-center gap-2">
              <BookOpen size={14} className="text-amber-700" />
              <span>Academic Pathway</span>
            </span>
            <span className="text-xs font-mono text-[#625E56]">3 Milestones</span>
          </div>

          <div className="space-y-4">
            {educationList.map((edu, idx) => (
              <div
                key={edu.institution}
                className={`tactile-card p-6 sm:p-7 rounded-2xl border-[1.8px] ${edu.color} relative overflow-hidden`}
              >
                {/* Index Card Tab Style Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E2DED5] pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#121212] text-white font-mono text-xs font-bold flex items-center justify-center">
                      0{idx + 1}
                    </span>
                    <span className="font-mono text-xs font-bold uppercase tracking-wide px-2 py-0.5 rounded bg-white/80 border border-[#D5D0C5]">
                      {edu.tag}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 font-mono text-xs text-[#625E56]">
                    <span className="flex items-center gap-1">
                      <Calendar size={13} />
                      {edu.period}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin size={13} />
                      {edu.location}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-black text-[#121212] tracking-tight">
                    {edu.institution}
                  </h3>
                  <p className={`text-sm sm:text-base font-semibold ${edu.accent}`}>
                    {edu.degree}
                  </p>

                  <ul className="pt-2 space-y-1.5 text-xs sm:text-sm text-[#282828]">
                    {edu.details.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <CheckCircle size={14} className="text-emerald-700 mt-1 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2: Certifications & Diplomas */}
        <div className="mt-14 space-y-6">
          <div className="flex items-center justify-between border-b border-[#121212] pb-2">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#121212] flex items-center gap-2">
              <Award size={14} className="text-orange-700" />
              <span>Certifications & Specialized Diplomas</span>
            </span>
            <span className="text-xs font-mono text-[#625E56]">Verified Diplomas</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {certificationsList.map((cert) => {
              const Icon = cert.icon;
              return (
                <div
                  key={cert.title}
                  className="tactile-card p-5 sm:p-6 rounded-2xl bg-white border-[1.8px] border-[#121212] flex flex-col justify-between space-y-4 hover:shadow-tactile-hover transition-all"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="p-2.5 rounded-xl bg-neutral-100 border border-[#121212] text-[#121212]">
                        <Icon size={20} />
                      </div>
                      <span className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded border ${cert.badgeColor}`}>
                        Verified
                      </span>
                    </div>

                    <div>
                      <h4 className="text-base font-black text-[#121212] leading-snug">
                        {cert.title}
                      </h4>
                      <p className="text-xs font-bold text-amber-800 mt-0.5">
                        {cert.role}
                      </p>
                      <span className="text-[11px] font-mono text-[#625E56] block mt-0.5">
                        Issuer: {cert.issuer}
                      </span>
                    </div>

                    <p className="text-xs text-[#282828] leading-relaxed pt-1 border-t border-[#E8E4DA]">
                      {cert.summary}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#E8E4DA] flex items-center justify-between">
                    <span className="text-[10px] font-mono font-semibold text-[#8C867A] uppercase">
                      {cert.tag}
                    </span>
                    <Sparkle className="w-3.5 h-3.5 text-amber-500" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
