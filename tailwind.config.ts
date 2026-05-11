import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        bg: "#000000",
        ink: "#FFFFFF",
        "ink-2": "#9CA3AF",
        "ink-3": "#4B5563",
        blue: "#1E9BE9",
        red: "#E63946",
        green: "#10B981",
        note: "#FFD23F",
        line: "rgba(255,255,255,0.10)",
        "line-2": "rgba(255,255,255,0.18)",
      },

      fontFamily: {
        anton: ["Anton", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },

      animation: {
        slideUp: "slideUp 0.9s cubic-bezier(0.2,0.9,0.3,1) forwards",
        chipIn: "chipIn 0.6s cubic-bezier(0.2,0.9,0.3,1) forwards",
        draw: "draw 1.2s ease-out forwards",
        dotIn: "dotIn 0.4s ease-out forwards",
        barRise: "barRise 1.5s ease-out forwards",
        aiLineIn: "aiLineIn 0.6s cubic-bezier(0.2,0.9,0.3,1) forwards",
        fadeIn: "fadeIn 1.2s ease-out forwards",
      },

      keyframes: {
        slideUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(40px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        chipIn: {
          "0%": {
            opacity: "0",
            transform: "translateY(10px) scale(0.95)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0) scale(1)",
          },
        },

        draw: {
          to: {
            strokeDashoffset: "0",
          },
        },

        dotIn: {
          to: {
            opacity: "1",
          },
        },

        barRise: {
          to: {
            transform: "scaleY(1)",
          },
        },

        aiLineIn: {
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },

        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
    },
  },

  plugins: [],
};

export default config;
