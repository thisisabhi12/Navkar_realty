/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: withOpacity('--brand-50-rgb'),
          100: withOpacity('--brand-100-rgb'),
          200: withOpacity('--brand-200-rgb'),
          300: withOpacity('--brand-300-rgb'),
          400: withOpacity('--brand-400-rgb'),
          500: withOpacity('--brand-500-rgb'),
          600: withOpacity('--brand-600-rgb'),
          700: withOpacity('--brand-700-rgb'),
          800: withOpacity('--brand-800-rgb'),
          900: withOpacity('--brand-900-rgb'),
          950: withOpacity('--brand-950-rgb'),
        },
        lacoste: {
          DEFAULT: '#176B3A',
          primary: '#176B3A',
          deep: '#104D2A',
          light: '#F0F6F0',
          white: '#FFFFFF',
          text: '#202923',
          muted: '#66716A',
          border: '#DCE5DD',
          accent: '#DCEBDD',
        },
        gold: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px var(--theme-shadow-color, rgba(22, 101, 52, 0.12)), 0 0 1px 1px var(--theme-shadow-color, rgba(22, 101, 52, 0.05))',
        'luxury-hover': '0 25px 50px -12px var(--theme-shadow-color, rgba(22, 101, 52, 0.22)), 0 0 1px 1px var(--theme-shadow-color, rgba(22, 101, 52, 0.1))',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
}
