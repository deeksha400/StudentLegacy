/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#040816',
        gold: '#FBBF24',
        slateblue: '#6D7CFF',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(251,191,36,0.25), 0 20px 60px rgba(251,191,36,0.12)',
      },
    },
  },
  plugins: [],
};
