/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./authBeforeComponents/**/*.{js,ts,jsx,tsx}",
    "./authAfterComponents/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '550px',
      // => @media (min-width: 640px) { ... }

      'md': '800px',
      // => @media (min-width: 768px) { ... }

      'lg': '875px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1150px',
      // => @media (min-width: 1280px) { ... }
    },
    fontFamily: {
      sans: [
        'ui-sans-serif',
        'system-ui',
        '--apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Noto Color Emoji'
      ],
      serif: [
        'ui-serif',
        'Georgia',
        'Cambria',
        'Times New Roman',
        'Times',
        'serif'
      ],
      mono: [
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        'Liberation Mono',
        'Courier New',
        'monospace'
      ],
      mediumSerifItalic: ['CharterItalic'],
      mediumSerif: ['Charter'],
    },
    extend: {},
  },
  plugins: [],
}