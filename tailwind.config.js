/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        base: {
          light: '#F8F8F7',
          dark: '#0F0F0E',
        },
        surface: {
          light: '#FFFFFF',
          dark: '#1A1A19',
        },
        ink: {
          light: '#111110',
          dark: '#EDEDED',
        },
        muted: '#6B6B68',
        accent: '#2563EB',
        line: {
          light: '#E4E4E2',
          dark: '#2A2A28',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      maxWidth: {
        content: '768px',
      },
      borderRadius: {
        card: '6px',
        tag: '4px',
      },
    },
  },
  plugins: [],
}
