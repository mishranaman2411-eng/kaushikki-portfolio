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
              Naman Mishra
            </h1>
            <span className="text-xs font-semibold text-gray-700 uppercase tracking-widest">
              3D Web Engineering &amp; ECE
            </span>
          </div>

          <p className="text-xs text-gray-700 mt-1 flex flex-wrap gap-x-4 gap-y-1">
            <span>Chandigarh, India</span>
            <span>•</span>
            <span>mishranaman2411@gmail.com</span>
            <span>•</span>
            <span>+91 90154 99931</span>
            <span>•</span>
            <span>github.com/mishranaman2411-eng</span>
          </p>

          <p className="text-xs text-gray-800 mt-2.5 leading-relaxed text-justify">
            3D web developer, UI/UX engineer, and 3rd-year B.Tech Electronics &amp; Communication Engineering student at <strong>CCET Chandigarh (2024–2028)</strong>. Leading end-to-end storefront and technical architecture as CTO at <strong>ARAEL WEARS</strong> while building scroll-driven WebGL experiences and Python developer CLI tools.
          </p>
        </header>

        <div className="space-y-4">
          {/* Education */}
          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-black border-b border-gray-400 pb-0.5 mb-2">
              Education
            </h2>
            <div className="space-y-2 text-xs">
              <div>
                <div className="flex justify-between font-bold">
                  <span>Chandigarh College of Engineering and Technology (CCET)</span>
                  <span className="font-semibold text-gray-700">2024 – 2028</span>
                </div>
                <div className="flex justify-between text-gray-800 italic">
                  <span>B.Tech in Electronics &amp; Communication Engineering (ECE, 3rd Year)</span>
                  <span>Sector 26, Chandigarh</span>
                </div>
                <p className="text-gray-700 text-[11px] mt-0.5">
                  Core coursework: Digital Signal Processing, CMOS VLSI Design, Computer Networks, Automata Theory.
                </p>
              </div>

              <div>
                <div className="flex justify-between font-bold">
                  <span>GMSSS-37 Chandigarh</span>
                  <span className="font-semibold text-gray-700">2024</span>
                </div>
                <div className="flex justify-between text-gray-800 italic">
                  <span>Senior Secondary (Class XII) — Science &amp; Mathematics</span>
                  <span>Chandigarh</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between font-bold">
                  <span>Satluj Public School</span>
                  <span className="font-semibold text-gray-700">2022</span>
                </div>
                <div className="flex justify-between text-gray-800 italic">
                  <span>Secondary School (Class X)</span>
                  <span>Panchkula</span>
                </div>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-black border-b border-gray-400 pb-0.5 mb-2">
              Engineering &amp; Leadership Experience
            </h2>
            <div className="space-y-3 text-xs">
              <div>
                <div className="flex justify-between font-bold">
                  <span>ARAEL WEARS</span>
                  <span className="font-semibold text-gray-700">2026 – Present</span>
                </div>
                <div className="flex justify-between text-gray-800 italic mb-1">
                  <span>Chief Technology Officer (CTO)</span>
                  <span>Chandigarh, India</span>
                </div>
                <ul className="list-disc pl-4 space-y-1 text-gray-800 text-[11.5px]">
                  <li>
                    Engineered a custom high-conversion web storefront with interactive product inspection modals and mobile-first lookbook layouts for heavyweight 300 GSM hoodies.
                  </li>
                  <li>
                    Architected automated print-on-demand order routing via Qikink alongside seamless Razorpay checkout integration.
                  </li>
                  <li>
                    Produced custom 16:9 and 9:16 lookbook hero animations styled after classic PS2/PS4-era cutscenes.
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between font-bold">
                  <span>Independent Engineering Builds</span>
                  <span className="font-semibold text-gray-700">2025 – Present</span>
                </div>
                <div className="flex justify-between text-gray-800 italic mb-1">
                  <span>3D Web &amp; Systems Developer</span>
                  <span>Chandigarh, India</span>
                </div>
                <ul className="list-disc pl-4 space-y-1 text-gray-800 text-[11.5px]">
                  <li>
                    Built a 120-frame scroll-driven 360° interactive 3D showcase paired with a two-step interactive order and receipt checkout UI.
                  </li>
                  <li>
                    Designed and engineered high-contrast minimalist dark editorial web concepts with custom typography and GSAP scroll choreography.
                  </li>
                  <li>
                    Engineered a local Python 3.11 command-line financial analysis tool for NSE/BSE equity research using pandas, yfinance, SQLite, and pydantic.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Technical Stack */}
          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-black border-b border-gray-400 pb-0.5 mb-2">
              Technical Stack &amp; Tooling
            </h2>
            <div className="text-xs space-y-1 text-gray-800">
              <p>
                <strong className="text-black">3D &amp; Frontend:</strong> Next.js, React Three Fiber, Three.js, GSAP ScrollTrigger, Tailwind CSS
              </p>
              <p>
                <strong className="text-black">E-Commerce &amp; Backend:</strong> Shopify Architecture, Razorpay Integrations, Qikink Fulfillment, SQLite
              </p>
              <p>
                <strong className="text-black">Systems &amp; Hardware:</strong> Python 3.11, MATLAB (DSP), Cadence Virtuoso &amp; GHDL (CMOS VLSI), Physical Design &amp; STA Track
              </p>
              <p>
                <strong className="text-black">Motion &amp; Media:</strong> Custom SVG Character Rigs, FFmpeg Automation, AI-Assisted Prototyping
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
