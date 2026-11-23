import React, { useState, useEffect } from 'react';
import { FileDown, Volume2, VolumeX, Sparkles, Clock, Menu, X, ArrowUpRight } from 'lucide-react';
import { playClick, toggleSound, isSoundEnabled } from '../utils/sound';

export default function Navbar({ onOpenResumeModal }) {
  const [soundOn, setSoundOn] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [kolkataTime, setKolkataTime] = useState('');

  useEffect(() => {
    setSoundOn(isSoundEnabled());

    // Update Kolkata (IST) time every minute
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      };
      setKolkataTime(now.toLocaleTimeString('en-US', options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000 * 30);
    return () => clearInterval(interval);
  }, []);

  const handleSoundToggle = () => {
    const next = toggleSound();
    setSoundOn(next);
    if (next) playClick();
  };

  const handleNavClick = (e, id) => {
    e.preventDefault();
    playClick();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      if (window.__lenis) {
        window.__lenis.scrollTo(element, { offset: -70 });
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handlePrint = () => {
    playClick();
    window.print();
  };

  return (
    <header className="sticky top-0 z-50 w-full px-4 sm:px-6 lg:px-8 pt-3 pb-2 transition-all no-print">
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#FAF9F5]/90 backdrop-blur-md border-[1.5px] border-[#121212] rounded-2xl px-4 sm:px-6 py-2.5 shadow-tactile flex items-center justify-between transition-all">
          
          {/* Brand Monogram */}
          <a 
            href="#hero" 
            onClick={(e) => handleNavClick(e, 'hero')}
            className="group flex items-center gap-2.5"
          >
            <div className="w-8 h-8 rounded-lg bg-[#121212] text-[#F8F7F4] flex items-center justify-center font-mono font-bold text-xs tracking-tighter shadow-sm group-hover:bg-amber-500 group-hover:text-[#121212] transition-colors">
              KR
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-tight text-[#121212] group-hover:text-amber-800 transition-colors">
                Koushhiki Roy
              </span>
              <span className="text-[10px] font-mono font-medium text-[#625E56] hidden sm:block">
                IIM Bangalore ’29 • Kolkata
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {[
              { label: 'About', id: 'about' },
              { label: 'Experience', id: 'experience' },
              { label: 'Credentials', id: 'credentials' },
              { label: 'Contact', id: 'contact' },
            ].map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold text-[#282828] hover:text-[#121212] hover:bg-[#EFECE6] transition-all relative group"
              >
                {link.label}
                <span className="absolute bottom-1 left-3 right-3 h-[2px] bg-[#121212] scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
              </a>
            ))}
          </nav>

          {/* Actions: Status pill, Sound toggle, Save Resume (PDF) */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Live Kolkata status badge */}
            <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 border border-emerald-300 rounded-full text-[11px] font-mono text-emerald-800">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Kolkata {kolkataTime || 'IST'}</span>
            </div>

            {/* Sound toggle button */}
            <button
              onClick={handleSoundToggle}
              title={soundOn ? 'Mute tactile clicks' : 'Enable tactile clicks'}
              aria-label={soundOn ? 'Mute audio' : 'Unmute audio'}
              className="p-1.5 rounded-lg border border-[#D5D0C5] bg-[#F4F1EA] text-[#625E56] hover:text-[#121212] hover:border-[#121212] transition-colors"
            >
              {soundOn ? <Volume2 size={16} /> : <VolumeX size={16} />}
            </button>

            {/* Save Resume (PDF) Button */}
            <button
              onClick={handlePrint}
              className="tactile-btn flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FEF08A] text-[#121212] text-xs font-bold hover:bg-[#FDE047] active:translate-y-0.5"
              title="Prints or saves an immaculate 1-page PDF resume"
            >
              <FileDown size={14} className="stroke-[2.5]" />
              <span>Save Resume</span>
              <span className="hidden sm:inline-block text-[10px] uppercase font-mono px-1 py-0.2 bg-[#121212] text-white rounded">
                PDF
              </span>
            </button>

            {/* Mobile menu hamburger toggle */}
            <button
              onClick={() => {
                playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="md:hidden p-1.5 rounded-lg border border-[#121212] bg-[#FAF9F5] text-[#121212]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-4 bg-[#FAF9F5] border-[1.5px] border-[#121212] rounded-2xl shadow-tactile space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex items-center justify-between pb-2 border-b border-[#E2DED5]">
              <span className="text-xs font-mono text-[#625E56]">Navigation</span>
              <span className="text-xs font-mono text-emerald-700 flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 inline-block"></span>
                Kolkata {kolkataTime}
              </span>
            </div>

            {[
              { label: 'About Koushhiki', id: 'about' },
              { label: 'Experience & Sales Track', id: 'experience' },
              { label: 'Education & Credentials', id: 'credentials' },
              { label: 'Get In Touch (Mail Composer)', id: 'contact' },
            ].map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className="flex items-center justify-between p-2.5 rounded-xl text-xs font-bold text-[#121212] hover:bg-[#EFECE6] transition-colors"
              >
                <span>{link.label}</span>
                <ArrowUpRight size={14} className="text-[#625E56]" />
              </a>
            ))}

            <div className="pt-2 border-t border-[#E2DED5]">
              <button
                onClick={handlePrint}
                className="w-full tactile-btn flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#FEF08A] text-[#121212] text-xs font-bold"
              >
                <FileDown size={14} />
                <span>Download / Print Resume (PDF)</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
