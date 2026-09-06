/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        trigger: {
          green: '#18A651',
          greendark: '#0E7C3D',
          greendeep: '#06170F',
          tint: '#EAF8EF',
          ink: '#0B1E14',
          slate: '#5B6B62',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        script: ['"Caveat"', 'cursive'],
      },
      boxShadow: {
        phone: '0 30px 60px -20px rgba(6, 23, 15, 0.35)',
      },
    },
  },
  plugins: [],
}
