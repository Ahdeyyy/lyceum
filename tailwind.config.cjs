/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte}"],
  daisyui: {
    themes: ["winter","night","dracula"],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
