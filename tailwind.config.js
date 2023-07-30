/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'main-normal': 'var(--color-main-normal)',
        'main-tint': 'var(--color-main-tint)',
        'main-shade': 'var(--color-main-shade)',
        'background-normal': 'var(--color-background-normal)',
        'background-tint': 'var(--color-background-tint)',
        'grey-normal': 'var(--color-grey-normal)',
      },
    },
  },
  plugins: [],
};
