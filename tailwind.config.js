/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './page/**/*.{js,ts,jsx,tsx}', './ui/**/*.{js,ts,jsx,tsx}'],
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          1: '#31262E',
          2: '#30252E',
        },
        highlight: '#F05F4E',
        primary: '#F5BF59',
        secondary: '#CF7C3A',
        vercel: {
          blue: '#0070F3',
          cyan: '#50E3C2',
          orange: '#F5A623',
          pink: '#FF0080',
          violet: '#7928CA',
        },
      },
      keyframes: ({ theme }) => ({
        fadeToTransparent: {
          '0%': {
            opacity: 1,
          },
          '40%': {
            opacity: 1,
          },
          // eslint-disable-next-line sort-keys
          '100%': {
            opacity: 0,
          },
        },
        highlight: {
          '0%': {
            background: theme('colors.vercel.pink'),
            color: theme('colors.white'),
          },
          '40%': {
            background: theme('colors.vercel.pink'),
            color: theme('colors.white'),
          },
        },
        rerender: {
          '0%': {
            ['border-color']: theme('colors.vercel.pink'),
          },
          '40%': {
            ['border-color']: theme('colors.vercel.pink'),
          },
        },
        shimmer: {
          '100%': {
            transform: 'translateX(100%)',
          },
        },
        translateXReset: {
          '100%': {
            transform: 'translateX(0)',
          },
        },
      }),
    },
  },
};
