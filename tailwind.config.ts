import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme")

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        stock: "url('../../public/stock.png')",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwindcss"),
    require("autoprefixer"),
    function ({ addUtilities }: any) {
      const newUtilities = {
        ".dashed-grid-paper": {
          "--grid-size": "30px",
          "--grid-strength": "0.5px",
          "--grid-dash": "3px",
          "--grid-gap": "6px",
          "--grid-color": "#ddf",
          "--paper-color": "#fff",
          "background-color": "var(--paper-color)",
          "background-size":
            "var(--grid-gap) var(--grid-gap), var(--grid-size) var(--grid-size)",
          "background-image":
            "linear-gradient(to bottom, transparent var(--grid-dash), var(--paper-color) var(--grid-dash)), linear-gradient(to right, var(--grid-color) var(--grid-strength), transparent var(--grid-strength)), linear-gradient(to right, transparent var(--grid-dash), var(--paper-color) var(--grid-dash)), linear-gradient(to bottom, var(--grid-color) var(--grid-strength), transparent var(--grid-strength))",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
export default config;
