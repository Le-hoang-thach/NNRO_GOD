/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-rgba': 'rgba(60, 60, 60)', // Thay đổi giá trị rgba theo ý bạn
      },
    },
  },
  plugins: [],
  
}

