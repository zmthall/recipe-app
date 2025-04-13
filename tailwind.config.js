/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue, js, ts}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#53aecb", // Soft teal blue
          secondary: "#bca8d9", // Gentle lavender
          accent: "#456e87", // Cool navy accent
          link: "#4a8a98", // Muted deep teal
          "link-hover": "#8c6abf",
          "background-primary": "#e8f5f4", // Airy light blue
          "background-secondary": "#f5f3fa",
          text: {
            dark: "#2e3a3a", // Rich charcoal for base text
            medium: "#5e6d7a", // Subtle slate for subtext
          },
          border: "#ccd9df", // Bluish-gray for input borders, dividers
          white: "#ffffff", // For cards, forms, etc.,
          error: "#dc6b6b"
        },
      },
      boxShadow: {
        main: "0 2px 10px 1px rgba(0, 0, 0, 0.2)",
        "inner-main": "inset 0 0 5px 1px rgba(0, 0, 0, 0.2)",
      },
      screens: {
        xs: '400px',
        md2: '800px'
      }
    },
    fontFamily: {
      Montserrat: "Montserrat, sans-serif",
      "open-sans": "Open Sans, sans-serif",
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [],
};
