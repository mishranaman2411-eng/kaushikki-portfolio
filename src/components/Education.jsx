import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  GraduationCap, 
  BookOpen, 
  Award, 
  BriefcaseBusiness, 
  Compass, 
  Bot 
} from 'lucide-react';
import { DoodleUnderline, DoodleSparkle } from './HandDrawn';

export default function Education() {
  const containerRef = useRef(null);
  const desktopPathRef = useRef(null);
  const mobilePathRef = useRef(null);
  const nodeRefs = useRef([]);

  const stops = [
    {
      number: "01",
      titlePart1: "IIM",
      titlePart2: "BANGALORE",
      side: "right",
      icon: GraduationCap,
      tag: "2026 – 2029 • Bangalore",
      degree: "BBA in Digital Business & Entrepreneurship (BBA DBE)",
      desc: "Digital business models, sales negotiation, corporate finance & go-to-market strategy.",
    },
    {
      number: "02",
      titlePart1: "HOLY",
      titlePart2: "MOTHER’S ACADEMY",
      side: "left",
      icon: BookOpen,
      tag: "2026 • Kolkata",
      degree: "Higher Secondary (Class XII)",
      desc: "Commerce, analytical foundations, speech & debate.",
    },
    {
      number: "03",
      titlePart1: "DPS",
      titlePart2: "MEGACITY",
      side: "right",
      icon: Award,
      tag: "2023 • Kolkata",
      degree: "Secondary School (Class X)",
      desc: "Languages, sciences, humanities & early MUN public speaking.",
    },
    {
      number: "04",
      titlePart1: "CLEVER",
      titlePart2: "HARVEY",
      side: "left",
      icon: BriefcaseBusiness,
      tag: "Fellowships",
      degree: "Junior CEO, Junior CMO & Junior CFO",
      desc: "Industry simulations in leadership, multi-channel campaigns & financial forecasting.",
    },
    {
      number: "05",
      titlePart1: "REAL ESTATE",
      titlePart2: "SALES",
      side: "right",
      icon: Compass,
      tag: "Diploma",
      degree: "Diploma in Real Estate Marketing & Sales",
      desc: "Property positioning, comparative market analysis, buyer psychology & high-ticket closing.",
    },
    {
      number: "06",
      titlePart1: "AI &",
      titlePart2: "DESIGNING",
      side: "left",
      icon: Bot,
      tag: "Certification",
      degree: "Applied Generative Workflows",
      desc: "Generative AI prompting, Canva visual prototyping & fast marketing workflows.",
    },
  ];

  // Desktop S-bend SVG ribbon path with circular loops
  const desktopPathString = `
    M 500 20
    C 520 60, 600 80, 660 140
    C 730 200, 780 260, 740 300
    C 700 340, 630 300, 650 240
    C 670 180, 730 220, 680 320
    C 610 440, 420 370, 340 440
    C 270 500, 230 570, 260 610
    C 290 650, 360 620, 350 560
    C 340 500, 270 520, 340 640
    C 430 780, 610 680, 670 750
    C 740 820, 760 890, 710 940
    C 660 990, 580 970, 610 900
    C 640 830, 710 880, 650 990
    C 550 1100, 410 1010, 340 1070
    C 270 1130, 240 1200, 280 1240
    C 320 1280, 390 1250, 380 1190
    C 370 1130, 300 1150, 360 1260
    C 450 1400, 600 1310, 670 1370
    C 740 1440, 750 1520, 660 1580
    C 550 1650, 410 1590, 340 1660
    C 280 1720, 320 1770, 400 1780
    C 480 1790, 500 1770, 500 1800
  `;

  // Mobile winding SVG path running down the side with loops
  const mobilePathString = `
    M 25 10
    C 35 100, 15 200, 25 320
    C 38 350, 45 390, 38 420
    C 30 450, 12 430, 18 400
    C 24 370, 36 390, 25 460
    C 15 580, 35 700, 25 820
    C 38 850, 45 890, 38 920
    C 30 950, 12 930, 18 900
    C 24 870, 36 890, 25 960
    C 15 1080, 35 1200, 25 1320
    C 38 1350, 45 1390, 38 1420
    C 30 1450, 12 1430, 18 1400
    C 24 1370, 36 1390, 25 1460
    C 15 1580, 35 1700, 25 1800
  `;

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('print').matches) return;

    const container = containerRef.current;
    const dPath = desktopPathRef.current;
    const mPath = mobilePathRef.current;
    if (!container) return;

    // Desktop length & setup
    let dLength = 0;
    if (dPath) {
      dLength = dPath.getTotalLength();
      dPath.style.strokeDasharray = `${dLength}`;
      dPath.style.strokeDashoffset = `${dLength}`;
    }

    // Mobile length & setup
    let mLength = 0;
    if (mPath) {
      mLength = mPath.getTotalLength();
      mPath.style.strokeDasharray = `${mLength}`;
      mPath.style.strokeDashoffset = `${mLength}`;
    }

    // ScrollTrigger to animate stroke-dashoffset dynamically as user scrolls
    const st = ScrollTrigger.create({
      trigger: container,
      start: 'top 75%',
      end: 'bottom 80%',
      scrub: 0.4,
      onUpdate: (self) => {
        const progress = self.progress;

        if (dPath && dLength > 0) {
          dPath.style.strokeDashoffset = `${Math.max(0, dLength * (1 - progress))}`;
        }

        if (mPath && mLength > 0) {
          mPath.style.strokeDashoffset = `${Math.max(0, mLength * (1 - progress))}`;
        }

        // Activate nodes dynamically as the orange ribbon reaches each position
        nodeRefs.current.forEach((node, idx) => {
          if (!node) return;
          const activationThreshold = (idx + 0.1) / 6;
          if (progress >= activationThreshold) {
            node.classList.add('node-active');
          } else {
            node.classList.remove('node-active');
          }
        });
      },
    });

    return () => {
      st.kill();
    };
  }, []);

  return (
    <section id="credentials" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#121212] tracking-tight flex items-center justify-center gap-2">
            <span>Education & Certifications</span>
            <DoodleSparkle className="w-7 h-7 text-[#1A1A1A] hidden sm:inline-block" strokeColor="#1A1A1A" />
          </h2>

          <div className="w-48 mx-auto mt-2">
            <DoodleUnderline className="w-full h-4 text-[#1A1A1A]" strokeColor="#1A1A1A" />
          </div>

          <p className="font-hand text-lg sm:text-xl text-stone-600 mt-2 max-w-xl mx-auto">
            Business coursework at IIM Bangalore alongside specialized certifications in sales and marketing.
          </p>
        </div>

        {/* Vertical Scroll-Driven Winding SVG Pathway Container */}
        <div ref={containerRef} className="relative py-4">
          
          {/* Desktop SVG Pathway (Hidden on mobile, visible on md:) */}
          <div className="hidden md:block absolute inset-0 pointer-events-none z-0">
            <svg
              viewBox="0 0 1000 1800"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
              preserveAspectRatio="none"
            >
              {/* Muted background track path */}
              <path
                d={desktopPathString}
                stroke="rgba(217, 78, 31, 0.2)"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              {/* Active burnt-orange / terracotta scroll-drawn path */}
              <path
                ref={desktopPathRef}
                d={desktopPathString}
                stroke="#D94E1F"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </div>

          {/* Mobile SVG Pathway (Visible on mobile, hidden on md:) */}
          <div className="block md:hidden absolute left-3 top-8 bottom-8 w-10 pointer-events-none z-0">
            <svg
              viewBox="0 0 50 1800"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
              preserveAspectRatio="none"
            >
              {/* Mobile Muted Track */}
              <path
                d={mobilePathString}
                stroke="rgba(217, 78, 31, 0.2)"
                strokeWidth="5"
                strokeLinecap="round"
                fill="none"
              />
              {/* Mobile Active Scroll-Drawn Path */}
              <path
                ref={mobilePathRef}
                d={mobilePathString}
                stroke="#D94E1F"
                strokeWidth="5"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>

          {/* 6 Milestone Nodes Along the Pathway */}
          <div className="space-y-16 sm:space-y-24 relative z-10">
            {stops.map((stop, idx) => {
              const Icon = stop.icon;
              const isRight = stop.side === "right";

              return (
                <div
                  key={stop.number}
                  ref={(el) => (nodeRefs.current[idx] = el)}
                  className="pathway-node relative pl-10 md:pl-0"
                >
                  <div className="md:grid md:grid-cols-12 items-center">
                    
                    {/* Left Column (Desktop) */}
                    {!isRight ? (
                      /* Left Node on Desktop */
                      <div className="md:col-span-6 md:pr-10 text-left md:text-right">
                        {/* Display Title Split by Illustrated Square Badge */}
                        <div className="flex items-center gap-2.5 mb-2.5 text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight text-[#121212] justify-start md:justify-end">
                          <span>{stop.titlePart1}</span>
                          <div className="w-9 h-9 rounded-lg bg-[#D94E1F] text-white flex items-center justify-center border-2 border-[#121212] shadow-sm flex-shrink-0">
                            <Icon size={18} />
                          </div>
                          <span>{stop.titlePart2}</span>
                        </div>

                        {/* Tilted White Pill-Bordered Callout Box */}
                        <div className="inline-block w-full text-left">
                          <div className="tilted-box-left p-5 sm:p-6 bg-white border-[1.5px] border-[#D94E1F] rounded-2xl shadow-tactile">
                            <div className="flex items-center justify-between gap-2 mb-2">
                              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#D94E1F] bg-orange-50 border border-orange-200 px-2.5 py-0.5 rounded-full">
                                {stop.tag}
                              </span>
                              <span className="font-mono text-xs font-bold text-[#8C867A]">
                                Stop {stop.number}
                              </span>
                            </div>

                            <h4 className="text-sm sm:text-base font-bold text-[#121212]">
                              {stop.degree}
                            </h4>

                            <p className="text-xs sm:text-sm text-[#282828] mt-1.5 leading-relaxed">
                              {stop.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Empty Column on Desktop for Right-aligned nodes */
                      <div className="hidden md:block md:col-span-6" />
                    )}

                    {/* Right Column (Desktop) */}
                    {isRight ? (
                      /* Right Node on Desktop */
                      <div className="md:col-span-6 md:pl-10 text-left">
                        {/* Display Title Split by Illustrated Square Badge */}
                        <div className="flex items-center gap-2.5 mb-2.5 text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight text-[#121212] justify-start">
                          <span>{stop.titlePart1}</span>
                          <div className="w-9 h-9 rounded-lg bg-[#D94E1F] text-white flex items-center justify-center border-2 border-[#121212] shadow-sm flex-shrink-0">
                            <Icon size={18} />
                          </div>
                          <span>{stop.titlePart2}</span>
                        </div>

                        {/* Tilted White Pill-Bordered Callout Box */}
                        <div className="inline-block w-full text-left">
                          <div className="tilted-box-right p-5 sm:p-6 bg-white border-[1.5px] border-[#D94E1F] rounded-2xl shadow-tactile">
                            <div className="flex items-center justify-between gap-2 mb-2">
                              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#D94E1F] bg-orange-50 border border-orange-200 px-2.5 py-0.5 rounded-full">
                                {stop.tag}
                              </span>
                              <span className="font-mono text-xs font-bold text-[#8C867A]">
                                Stop {stop.number}
                              </span>
                            </div>

                            <h4 className="text-sm sm:text-base font-bold text-[#121212]">
                              {stop.degree}
                            </h4>

                            <p className="text-xs sm:text-sm text-[#282828] mt-1.5 leading-relaxed">
                              {stop.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Empty Column on Desktop for Left-aligned nodes */
                      <div className="hidden md:block md:col-span-6" />
                    )}

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
