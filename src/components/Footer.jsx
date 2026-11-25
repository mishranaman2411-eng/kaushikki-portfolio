import React from 'react';
import { ArrowUp, ArrowUpRight, Mail, Phone } from 'lucide-react';
import { playClick } from '../utils/sound';
import { GithubIcon } from './HandDrawn';

export default function Footer() {
  const scrollToTop = () => {
    playClick();
    if (window.__lenis) {
      window.__lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t-[1.8px] border-[#121212] bg-[#F2EFE9] pt-12 pb-16 px-4 sm:px-6 lg:px-8 mt-16 no-print">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#DCD7CD]">
          
          {/* Identity */}
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-black text-xl text-[#121212] tracking-tight">
                Naman Mishra
              </span>
              <span className="font-mono text-xs px-2 py-0.5 rounded bg-white border border-[#121212] font-bold">
                CCET ’28
              </span>
            </div>
            <p className="text-xs text-[#625E56] font-mono">
              3D Web Engineering, Product Systems &amp; ECE • Chandigarh, India
            </p>
          </div>

          {/* Quick Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/mishranaman2411-eng"
              target="_blank"
              rel="noreferrer"
              className="tactile-btn flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#FEF08A] text-[#121212] text-xs font-bold hover:bg-[#FDE047]"
            >
              <GithubIcon size={14} />
              <span>GitHub (@mishranaman2411-eng)</span>
              <ArrowUpRight size={13} className="stroke-[2.5]" />
            </a>

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
            <span>© 2026 Naman Mishra • Built in Chandigarh, India</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:mishranaman2411@gmail.com"
              className="hover:text-[#121212] transition-colors flex items-center gap-1"
            >
              <Mail size={13} />
              <span>Email</span>
            </a>
            <a
              href="tel:+919015499931"
              className="hover:text-[#121212] transition-colors flex items-center gap-1"
            >
              <Phone size={13} />
              <span>Phone</span>
            </a>
            <a
              href="https://github.com/mishranaman2411-eng"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#121212] transition-colors flex items-center gap-1"
            >
              <GithubIcon size={13} />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Hand-drawn editorial signoff */}
        <div className="mt-6 text-center">
          <p className="font-hand text-base text-stone-500">
            Open to Freelance Web Projects &amp; Semiconductor / Software Internships.
          </p>
        </div>

      </div>
    </footer>
  );
}
