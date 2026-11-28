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
              Creative Web Designer
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
            Creative web designer, founder of <strong>Weerolliinn</strong>, CTO at <strong>ARAEL WEARS</strong>, and 3rd-year B.Tech ECE student at <strong>CCET Chandigarh (2024–2028)</strong>. I build interactive, good-looking websites that load fast and help brands earn customers' trust.
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
                  <span>Chandigarh</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between font-bold">
                  <span>GMSSS-37 Chandigarh</span>
                  <span className="font-semibold text-gray-700">2024</span>
                </div>
                <div className="flex justify-between text-gray-800 italic">
                  <span>Senior Secondary (Class XII)</span>
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

          {/* My Works */}
          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-black border-b border-gray-400 pb-0.5 mb-2">
              My Works
            </h2>
            <div className="space-y-3 text-xs">
              <div>
                <div className="flex justify-between font-bold">
                  <span>Weerolliinn</span>
                  <span className="font-semibold text-gray-700">Founder &amp; Owner</span>
                </div>
                <div className="flex justify-between text-gray-800 italic mb-1">
                  <span>Web Studio</span>
                  <span>Chandigarh, India</span>
                </div>
                <ul className="list-disc pl-4 space-y-1 text-gray-800 text-[11.5px]">
                  <li>
                    Built creative, interactive websites with clean dark designs, custom fonts, and smooth scroll animations.
                  </li>
                  <li>
                    Created an interactive product page with a simple 2-step order and receipt screen.
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between font-bold">
                  <span>ARAEL WEARS</span>
                  <span className="font-semibold text-gray-700">Chief Technical Officer</span>
                </div>
                <div className="flex justify-between text-gray-800 italic mb-1">
                  <span>Online Store</span>
                  <span>Chandigarh, India</span>
                </div>
                <ul className="list-disc pl-4 space-y-1 text-gray-800 text-[11.5px]">
                  <li>
                    Built the streetwear brand's online store with product pop-ups to look closely at items.
                  </li>
                  <li>
                    Designed a phone-friendly lookbook and retro PlayStation-style intro animations.
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between font-bold">
                  <span>My Portfolio Website</span>
                  <span className="font-semibold text-gray-700">Design &amp; Code</span>
                </div>
                <ul className="list-disc pl-4 space-y-1 text-gray-800 text-[11.5px]">
                  <li>
                    Built an editorial paper-styled portfolio with a flip card, a winding scroll path, and a contact section that writes an email draft.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-black border-b border-gray-400 pb-0.5 mb-2">
              Self-Made Web Designer Skills
            </h2>
            <div className="text-xs space-y-1 text-gray-800">
              <p>
                <strong className="text-black">Languages &amp; Frameworks:</strong> HTML, CSS, JavaScript, TypeScript, React, Next.js, Tailwind CSS
              </p>
              <p>
                <strong className="text-black">Motion &amp; Interaction:</strong> GSAP, Lenis Smooth Scroll, Three.js (3D)
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
