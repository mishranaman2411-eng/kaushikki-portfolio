/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#F8F7F4',
          card: '#FFFFFF',
          dark: '#EFECE6',
          warm: '#FBF9F5',
          border: '#E2DED5',
          line: '#ECE8DF',
        },
        ink: {
          DEFAULT: '#121212',
          light: '#282828',
          muted: '#625E56',
          faint: '#9E998F',
          border: '#121212',
        },
        notes: {
          header: '#F9F8F5',
          yellow: '#EAB308',
          border: '#E8E4D9',
          line: '#EFECE3',
        },
        badge: {
          stamp: '#C2410C',
          green: '#047857',
          blue: '#1D4ED8',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        hand: ['"Caveat"', 'cursive'],
        kalam: ['"Kalam"', 'cursive'],
        serif: ['"Newsreader"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'tactile': '0 2px 0 0 #121212',
        'tactile-md': '2px 3px 0 0 #121212',
        'tactile-lg': '4px 5px 0 0 #121212',
        'tactile-card': '3px 4px 0 0 #121212',
        'tactile-hover': '5px 7px 0 0 #121212',
        'tactile-pressed': '1px 1px 0 0 #121212',
        'polaroid': '0 12px 28px -8px rgba(0, 0, 0, 0.12), 0 4px 10px rgba(0, 0, 0, 0.05), 3px 4px 0 0 #121212',
        'notes': '0 16px 36px -12px rgba(40, 30, 20, 0.08), 2px 3px 0 0 #121212',
      },
      backgroundImage: {
        'grid-paper': 'radial-gradient(circle, #D8D4CA 1px, transparent 1px)',
        'lined-paper': 'repeating-linear-gradient(transparent, transparent 27px, #E9E5DC 28px)',
      }
    },
  },
  plugins: [],
}
