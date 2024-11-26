/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  corePlugins: {
    preflight: false // 关闭默认样式
  },
  theme: {
    extend: {},
  },
  plugins: [],
}

