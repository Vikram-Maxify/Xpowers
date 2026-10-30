/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#123B70",
          light: "#1E4F8C",
          dark: "#0D2B54",
        },
        royal: "#2563EB",
        sky: "#38BDF8",
        surface: "#F8FAFC",
        section: "#F3F7FC",
        heading: "#0F172A",
        body: "#64748B",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        countUp: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        pulse2: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.04)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s ease forwards",
        fadeIn: "fadeIn 0.6s ease forwards",
        slideInLeft: "slideInLeft 0.7s ease forwards",
        slideInRight: "slideInRight 0.7s ease forwards",
        pulse2: "pulse2 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
