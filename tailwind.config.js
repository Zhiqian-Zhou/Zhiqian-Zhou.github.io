/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      colors: {
        paper: '#FAF8F4',
        ink: { DEFAULT: '#1A1D23', 2: '#3A3F47' },
        muted: '#5F6670',
        faint: '#8A8F98',
        accent: { DEFAULT: '#3B5B8C', ink: '#233E6C', wash: '#DCE4EF' },
        band: '#EEF2F6',
        facts: '#F4F1EB',
        pill: '#EFEDE8',
        rule: { DEFAULT: '#E5E2DC', strong: '#D6D2CA' }
      },
      fontFamily: {
        serif: ['Newsreader', '"Iowan Old Style"', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"DM Mono"', 'ui-monospace', 'Menlo', 'monospace'],
        hand: ['Caveat', '"Bradley Hand"', 'cursive']
      },
      fontSize: {
        name: ['clamp(2.75rem, 1.6rem + 3.6vw, 4.5rem)', { lineHeight: '1.02', letterSpacing: '-0.02em' }],
        h2: ['1.875rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        h3: ['1.25rem', { lineHeight: '1.3', letterSpacing: '-0.005em' }],
        eyebrow: ['0.6875rem', { lineHeight: '1.4', letterSpacing: '0.14em' }]
      },
      maxWidth: { prose: '62ch', content: '1080px' },
      borderColor: { DEFAULT: '#E5E2DC' },
      transitionTimingFunction: { out: 'cubic-bezier(.2,.7,.2,1)' }
    }
  },
  plugins: []
}
