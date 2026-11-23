# Koushhiki Roy — Personal Portfolio

> Tactile, hand-crafted personal portfolio website for **Koushhiki Roy** (Digital Marketing & Sales student at **IIM Bangalore**, BBA DBE 2026–2029, based in Kolkata). Inspired by the tactile, play-focused stationery aesthetic of [webdesign.kernjosh.com](https://webdesign.kernjosh.com).

---

## 🎨 Aesthetic & Design System

- **Warm Stationery Paper Canvas:** `#F8F7F4` background with a subtle dot-grid texture and crisp ink-black typography (`#121212`).
- **Typography Pairing:**
  - **Headings & Body:** *Plus Jakarta Sans* & *Newsreader* (Google Fonts).
  - **Handwritten Annotations:** *Caveat* & *Kalam* for editorial highlights.
  - **Monospace Telemetry:** *JetBrains Mono* for timestamps, codes, and metrics.
- **Physical Skeuomorphism:** Translucent washi tape strips, metal paperclips, 3D flippable polaroid frames, and rubber stamp badges.
- **Hand-Drawn Ink SVG Doodles:**
  - Squiggly underlines that draw themselves on scroll with `stroke-dashoffset` animations.
  - Curved pointer arrows guiding visitors to key interactions.
  - Looped circle highlights around key metrics (`50+`, `200+`).
  - Ink-black sparkle clusters and rough index-card dividers.
- **Procedural Tactile Audio:** Zero-latency Web Audio API mechanical clicks, paper pops, and pencil ticks (with one-click mute toggle).

---

## 🚀 Sections & Features

1. **Minimal Top Navigation:** Monogram badge `KR`, section anchors, live Kolkata clock with pulsing status dot, audio toggle, and "Save Resume (PDF)" trigger.
2. **Hero Section:** Large expressive intro, 3 metric ribbons, CTA buttons, and a 3D flippable Polaroid photo card revealing her *Quick Dossier*.
3. **Apple Notes About Entry:** Authentic, raw Apple Note on ruled-line paper with thin 1px dividers, generous whitespace, interactive circular check items, subtle yellow text-highlighter marks, and plainspoken copy.
4. **Experience Dossier Briefs:**
   - **Team Taurus (Sales Intern, 2026 – Present):** Live in-person pitching, attention to detail, 50+ clients stamp badge, and expandable pitch playbook.
   - **Dublieu (Marketing Intern, 2023 – Dec 2024):** Cold outreach, MUN events, small business invitations, 200+ conversions badge, and cold call script breakdown.
5. **Stacked Index Cards (Education & Credentials):**
   - IIM Bangalore (BBA DBE, 2026–2029)
   - Holy Mother’s Academy (Class XII, 2026)
   - DPS Megacity (Class X, 2023)
   - Clever Harvey (Junior CEO, Junior CMO, Junior CFO)
   - Diploma in Real Estate Marketing & Sales
   - AI Tools & Designing Certification
6. **iOS Mail Contact Composer:** Interactive email composer card pre-filled with `koushhikiroy@gmail.com`, 4 topic selector pills generating real-time drafts, and one-click copy buttons for email, phone (+91 898 1788 534), and LinkedIn.
7. **Executive Print Resume (`@media print`):** Clicking "Save Resume (PDF)" prints an immaculate 1-page corporate resume, hiding web decor automatically.

---

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Smooth Scrolling:** [Lenis](https://github.com/darkroomengineering/lenis)
- **Animations:** [GSAP](https://gsap.com/) + ScrollTrigger (for 3D card tilt and drawn-on strokes)
- **Icons:** [Lucide React](https://lucide.dev/) + Custom SVG Doodles
- **Celebration:** [Canvas Confetti](https://github.com/catdad/canvas-confetti)

---

## 💻 Getting Started

```bash
# Clone the repository
git clone https://github.com/mishranaman2411-eng/kaushikki-portfolio.git
cd kaushikki-portfolio

# Install dependencies
npm install

# Start local dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```
