import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "var(--accent)",
        telegent: {
          primary: "var(--telegent-primary)",
          secondary: "var(--telegent-secondary)",
          purple: "var(--telegent-purple)",
        }
      },
      fontSize: {
        base: ['1.05rem', '1.75rem'],
      },
      spacing: {
        nav: '4.5rem',
        'content-xl': '72rem',
      },
      animation: {
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      backgroundSize: {
        '200%': '200% auto',
        '300%': '300% auto',
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionProperty: {
        'size': 'height, width, margin, padding',
      },
      boxShadow: {
        'glow': '0 0 10px rgba(var(--telegent-primary), 0.3)',
        'subtle': '0 2px 10px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
} satisfies Config;
