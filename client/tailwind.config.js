/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,ttf}",
    "./src/font/**/"
  ],
  theme: {
    extend: {},
    screens: {
      'mobile': '412px',
      // => @media (min-width: 412px) { ... }

      'tablet': '768px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }
    },
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui', '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto', 'sans-serif'],
      serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman", Times, serif'],
      mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono", "Courier New", monospace'],
      Kalam: ['kalam'],
    },
  },
  plugins: [],
}