/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      borderRadius: {
        1: "32px",
      },
      margin: {
        "0.5px": "0.5px",
        "1px": "1px",
      },
      minHeight: {
        "10sq": "calc(20rem - 1px)",
        "20sq": "calc(40rem - 1px)",
      },
      maxWidth: {
        "10sq": "calc(20rem - 1px)",
        "20sq": "calc(40rem - 1px)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "Roboto",
          "Helvetica Neue",
          "Arial Nova",
          "Nimbus Sans",
          "Arial",
          "sans-serif",
        ],
        heading: [
          "Aeonik",
          "Inter",
          "Roboto",
          "Helvetica Neue",
          "Helvetica",
          "sans-serif",
        ],
        mono: [
          "JetBrainsMono",
          "ui-monospace",
          "Source Code Pro",
          "Menlo",
          "monospace",
        ],
      },
    },
  },
};
