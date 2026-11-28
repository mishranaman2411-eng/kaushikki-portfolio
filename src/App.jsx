import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLenis } from './hooks/useLenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AppleNotesAbout from './components/AppleNotesAbout';
import Experience from './components/Experience';
import Education from './components/Education';
import ContactMailComposer from './components/ContactMailComposer';
import Footer from './components/Footer';
import PrintResume from './components/PrintResume';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function App() {
  // Initialize buttery-smooth Lenis scroll
  useLenis();
  const mainRef = useRef(null);

  useEffect(() => {
    // Only run animations if not printing
    if (window.matchMedia('print').matches) return;

    const ctx = gsap.context(() => {
      // Subtle tactile reveals for each section and trigger drawn-on doodles
      const sections = ['#hero', '#about', '#experience', '#credentials', '#contact'];
      
      sections.forEach((selector) => {
        const el = document.querySelector(selector);
        if (el) {
          gsap.fromTo(
            el,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: el,
                start: selector === '#contact' ? 'top 95%' : 'top 85%',
                toggleActions: 'play none none none',
                onEnter: () => el.classList.add('is-visible'),
              },
            }
          );
        }
      });

      // Individual trigger for all hand-drawn SVG doodles (underline, arrow, circle, divider, sparkle)
      const doodles = document.querySelectorAll('.doodle-underline, .doodle-arrow, .doodle-circle, .doodle-divider, .doodle-sparkle');
      doodles.forEach((doodle) => {
        ScrollTrigger.create({
          trigger: doodle,
          start: 'top 90%',
          onEnter: () => doodle.classList.add('is-visible'),
        });
      });

      // Also trigger hero doodles immediately on load
      const heroEl = document.querySelector('#hero');
      if (heroEl) {
        setTimeout(() => {
          heroEl.classList.add('is-visible');
          heroEl.querySelectorAll('.doodle-underline, .doodle-arrow, .doodle-circle, .doodle-sparkle').forEach((d) => {
            d.classList.add('is-visible');
          });
        }, 150);
      }

      // Subtle 3D tilt for tactile cards on pointer move
      const cards = document.querySelectorAll('.tactile-card');
      const cleanups = [];

      cards.forEach((card) => {
        const handleMouseMove = (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = ((y - centerY) / centerY) * -3;
          const rotateY = ((x - centerX) / centerX) * 3;

          gsap.to(card, {
            rotationX: rotateX,
            rotationY: rotateY,
            transformPerspective: 800,
            ease: 'power1.out',
            duration: 0.25,
          });
        };

        const handleMouseLeave = () => {
          gsap.to(card, {
            rotationX: 0,
            rotationY: 0,
            ease: 'power2.out',
            duration: 0.4,
          });
        };

        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseleave', handleMouseLeave);

        cleanups.push(() => {
          card.removeEventListener('mousemove', handleMouseMove);
          card.removeEventListener('mouseleave', handleMouseLeave);
        });
      });

      return () => {
        cleanups.forEach((fn) => fn());
      };
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="paper-texture min-h-screen text-[#121212] flex flex-col justify-between selection:bg-[#FEF08A] selection:text-[#121212]">
      {/* 
        Printable Resume Container:
        Automatically shown ONLY during @media print (when clicking "Save Resume (PDF)" or Cmd/Ctrl+P).
        Completely replaces web layout with an executive 1-page resume.
      */}
      <PrintResume />

      {/* Screen Portfolio Web Application */}
      <div ref={mainRef} className="no-print flex-1 flex flex-col">
        {/* Minimal Sticky Top Nav */}
        <Navbar />

        {/* Main Sections */}
        <main className="flex-1">
          {/* Hero Section */}
          <Hero />

          {/* Apple Notes "About" Widget */}
          <AppleNotesAbout />

          {/* My Works Cards (Weerolliinn, ARAEL WEARS & Portfolio) */}
          <Experience />

          {/* Winding SVG Pathway (Education & Journey) */}
          <Education />

          {/* iOS Mail "Contact" Composer */}
          <ContactMailComposer />
        </main>

        {/* Minimal Tactile Footer */}
        <Footer />
      </div>
    </div>
  );
}
