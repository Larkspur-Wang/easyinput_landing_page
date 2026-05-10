/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#000',
        card: '#0a0a0a',
        border: 'rgba(255,255,255,0.12)',
        'text-primary': '#f5f5f5',
        'text-muted': '#8a8a8a',
        accent: '#14e6d1',
        purple: '#8b5cf6',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        content: '1100px',
      },
      borderRadius: {
        card: '16px',
      },
    },
  },
  plugins: [],
}
