import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // BPC Brand Colors
      colors: {
        bpc: {
          // Primary - Dark Blue (trust, stability)
          navy: {
            DEFAULT: '#1a3a5c',
            50: '#f0f5fa',
            100: '#e1ebf4',
            200: '#c3d7e9',
            300: '#94b8d6',
            400: '#5f93bf',
            500: '#3d73a5',
            600: '#2d5a8a',
            700: '#264a71',
            800: '#1a3a5c',
            900: '#152f4a',
            950: '#0d1f32',
          },
          // Accent - Teal/Cyan (innovation, tech-forward)
          teal: {
            DEFAULT: '#2d9cca',
            50: '#f0f9fc',
            100: '#e0f3f9',
            200: '#bae7f3',
            300: '#7dd3e8',
            400: '#5fbcd3',
            500: '#2d9cca',
            600: '#2380ab',
            700: '#1f678b',
            800: '#1e5572',
            900: '#1d475f',
            950: '#132e40',
          },
          // Light Blue for gradients
          sky: {
            DEFAULT: '#5fbcd3',
            light: '#7dd3e8',
            lighter: '#a3e4f2',
          },
        },
      },
      // Typography
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      // Spacing & Layout
      maxWidth: {
        'content': '1280px',
        'prose': '720px',
      },
      // Animations
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      // Gradients (defined as backgroundImage for Tailwind)
      backgroundImage: {
        'bpc-gradient': 'linear-gradient(135deg, #7dd3e8 0%, #2d9cca 50%, #1a3a5c 100%)',
        'bpc-gradient-light': 'linear-gradient(135deg, #f0f9fc 0%, #e0f3f9 100%)',
        'bpc-gradient-dark': 'linear-gradient(135deg, #1a3a5c 0%, #132e40 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
