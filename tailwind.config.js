/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: {
            950: '#000c20',
            900: '#00102a', // Exact dominant navy from logo
            850: '#021638',
            800: '#051e4a',
            700: '#0a2b66',
            600: '#123b87',
            500: '#1b4fa8',
            100: '#e5eaf5',
            50: '#f0f4fa',
          },
          gold: {
            50: '#fdf9f0',
            100: '#f8efd8',
            200: '#f0dfb1',
            300: '#e5ca85',
            400: '#fac55f', // Logo bright gold
            500: '#dea949', // Logo rich warm metallic gold
            600: '#c59132',
            700: '#a37424',
            800: '#835c1f',
            900: '#52370f',
          },
          ivory: '#FAF9F6',
          pearl: '#F4F5F7',
          charcoal: '#0b0f19',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'Manrope', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(222, 169, 73, 0.35)',
        'gold-glow-lg': '0 0 40px -5px rgba(222, 169, 73, 0.45)',
        'navy-card': '0 20px 40px -15px rgba(0, 16, 42, 0.12)',
        'luxury': '0 25px 50px -12px rgba(0, 16, 42, 0.25)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #FAC55F 0%, #DEA949 50%, #B88728 100%)',
        'gold-gradient-hover': 'linear-gradient(135deg, #FBD07A 0%, #E5B45A 50%, #C89432 100%)',
        'navy-gradient': 'linear-gradient(180deg, #00102a 0%, #031738 100%)',
        'hero-gradient': 'linear-gradient(to right, rgba(0, 16, 42, 0.94) 0%, rgba(0, 16, 42, 0.75) 50%, rgba(0, 16, 42, 0.4) 100%)',
      }
    },
  },
  plugins: [],
}
