/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#6b39d6',
          secondary: '#0b6b8c',
          tertiary: '#0c7a3c',
          surface: '#f5f7f9',
        },
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['"Be Vietnam Pro"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 16px 30px rgba(49, 62, 80, 0.08)',
      },
    },
  },
  plugins: [],
}
