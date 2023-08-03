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
        'background-shade': 'var(--color-background-shade)',
        'grey-normal': 'var(--color-grey-normal)',
        'grey-darker': 'var(--color-grey-darker)',
        'grey-tint': 'var(--color-grey-tint)',
        'grey-shade': 'var(--color-grey-shade)',
      },
    },
  },
  plugins: [],
};
