/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        spotify: {
          green: { DEFAULT: '#1db954', 100: '#1ed760' },
          gray: {
            DEFAULT: '#121212',
            100: '#b3b3b3',
            200: '#535353',
            300: '#212121',
          },
        },
      },
      backgroundImage: {
        ellipse: 'radial-gradient(ellipse at top, var(--tw-gradient-stops))',
      },
      fontFamily: {
        montserrat: ['"Montserrat"', 'sans-serif'],
      },
      dropShadow: {
        border: '0px 0px 2px rgba(0, 0, 0, 0.6)',
        'white-border': '0px 0px 2px rgba(255, 255, 255, 0.6)',
      },
      keyframes: {
        bump: {
          '0%': { transform: 'scale(1)' },
          '10%': { transform: 'scale(0.8)' },
          '30%': { transform: 'scale(1.1)' },
          '50%': { transform: 'scale(1.3)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: { bump: 'bump 0.5s' },
    },
  },
  plugins: [],
};
