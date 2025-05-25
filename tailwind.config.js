/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'telegent-primary': '#9333ea',
        'telegent-purple': '#a855f7',
        'telegent-secondary': '#ec4899',
      },
    },
  },
  plugins: [],
}

