import React from 'react';
import { ArrowUp, FileDown, Mail, Phone, Heart } from 'lucide-react';
import { playClick } from '../utils/sound';
import { DoubleSwoop, LinkedinIcon } from './HandDrawn';

export default function Footer() {
  const scrollToTop = () => {
    playClick();
    if (window.__lenis) {
      window.__lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrint = () => {
    playClick();
    window.print();
  };

  return (
    <footer className="border-t-[1.8px] border-[#121212] bg-[#F2EFE9] pt-12 pb-16 px-4 sm:px-6 lg:px-8 mt-16 no-print">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#DCD7CD]">
          
          {/* Identity */}
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-black text-xl text-[#121212] tracking-tight">
                Koushhiki Roy
              </span>
              <span className="font-mono text-xs px-2 py-0.5 rounded bg-white border border-[#121212] font-bold">
                IIMB ’29
              </span>
            </div>
            <p className="text-xs text-[#625E56] font-mono">
              Digital Marketing & Sales • BBA DBE Student at IIM Bangalore • Kolkata, India
            </p>
          </div>

          {/* Quick Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="tactile-btn flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#FEF08A] text-[#121212] text-xs font-bold hover:bg-[#FDE047]"
            >
              <FileDown size={14} />
              <span>Save Resume (PDF)</span>
            </button>

            <button
              onClick={scrollToTop}
              className="tactile-btn p-2 rounded-xl bg-white border border-[#121212] text-[#121212] hover:bg-neutral-100"
              title="Back to Top"
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#78716C]">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} Koushhiki Roy. Crafted with tactile care.</span>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="mailto:koushhikiroy@gmail.com" 
              className="hover:text-[#121212] transition-colors flex items-center gap-1"
            >
              <Mail size={13} />
              <span>Email</span>
            </a>
            <a 
              href="tel:+918981788534" 
              className="hover:text-[#121212] transition-colors flex items-center gap-1"
            >
              <Phone size={13} />
              <span>Phone</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/koushhikiroy" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-[#121212] transition-colors flex items-center gap-1"
            >
              <LinkedinIcon size={13} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Hand-drawn editorial signoff */}
        <div className="mt-6 text-center">
          <p className="font-hand text-base text-stone-500">
            "Every cold call is an invitation to solve a problem."
          </p>
        </div>

      </div>
    </footer>
  );
}
