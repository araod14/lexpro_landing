import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: "#1FA8A8",
          dark: "#178585",
          light: "#E6F5F5",
        },
        ink: {
          DEFAULT: "#4A4A4A",
          soft: "#6B7280",
          deep: "#1F2937",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          alt: "#F7F9FA",
        },
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.04)",
        "card-hover":
          "0 10px 28px rgba(31,168,168,0.18), 0 2px 8px rgba(0,0,0,0.06)",
        nav: "0 2px 12px rgba(0,0,0,0.06)",
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(circle at 85% 15%, rgba(31,168,168,0.10), transparent 55%), radial-gradient(circle at 10% 90%, rgba(31,168,168,0.06), transparent 50%)",
        "grid-pattern":
          "linear-gradient(to right, rgba(31,168,168,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(31,168,168,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s ease-out both",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
