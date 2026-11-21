/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#f6f7fb',
        surface: '#ffffff',
        ink: '#0b1630',
        muted: '#56617a',
        line: '#e1e5ee',
        accent: { DEFAULT: '#1f4fe0', soft: '#e8eefe', hover: '#1a43c4' },
        night: { DEFAULT: '#0b1630', 2: '#14213f' },
      },
      fontFamily: {
        display: ['Sora', 'Segoe UI', 'system-ui', 'sans-serif'],
        body: ['"Instrument Sans"', 'Segoe UI', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'Consolas', 'monospace'],
      },
      boxShadow: {
        card: '0 24px 40px -28px rgba(11,22,48,.45)',
        soft: '0 18px 34px -24px rgba(31,79,224,.45)',
        portrait: '0 30px 60px -30px rgba(11,22,48,.55)',
      },
      maxWidth: { site: '1140px' },
    },
  },
  plugins: [],
};
