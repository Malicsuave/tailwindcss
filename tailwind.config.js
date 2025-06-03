/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'cy-grotesk': ['"CY Grotesk Key"', 'sans-serif'],
        'roboto-mono': ['"Roboto Mono"', 'monospace'],
        'ibm-plex': ['"IBM Plex Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

