import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#FAF7F2',
          text: '#2C2420',
          primary: '#C8A99A',
          secondary: '#8FAE8E',
          card: '#F0EAE3',
          muted: '#A09080',
          dark: '#2C2420',
        },
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'marble-1': 'radial-gradient(ellipse at 20% 50%, #C8A99A 0%, #F0EAE3 40%, #8FAE8E 70%, #FAF7F2 100%)',
        'marble-2': 'conic-gradient(from 45deg at 30% 70%, #C8A99A, #F0EAE3, #8FAE8E, #C8A99A)',
        'marble-3': 'radial-gradient(ellipse at 80% 20%, #8FAE8E 0%, #F0EAE3 50%, #C8A99A 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
