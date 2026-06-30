/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#51616E',
        secondary: '#78858F',
        accent: '#A3946C',
        background: '#FAFAFA',
        surface: '#F1F5F7',
        surfaceMuted: '#F7F9FB',
        border: '#D8E0E6',
        textPrimary: '#1F2937',
        textSecondary: '#4B5563',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}