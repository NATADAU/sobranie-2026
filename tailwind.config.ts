import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        head: ["Rubik", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      colors: {
        brand: {
          yellow: "hsl(var(--brand-yellow))",
          blue: "hsl(var(--brand-blue))",
          green: "hsl(var(--brand-green))",
          "on-dark": "hsl(var(--brand-on-dark))",
        },
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
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      keyframes: {
        pop: {
          from: { opacity: "0", transform: "translateY(18px) scale(.92)" },
          "60%": { opacity: "1", transform: "translateY(-3px) scale(1.01)" },
          to: { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        drop: {
          from: { opacity: "0", transform: "rotate(14deg) scale(.8)" },
          to: { opacity: "1", transform: "rotate(-6deg) scale(1.06)" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        sway: {
          "0%, 100%": { transform: "rotate(-6deg) scale(1.06)" },
          "50%": { transform: "rotate(-2deg) scale(1.08)" },
        },
      },
      animation: {
        pop: "pop .62s cubic-bezier(.2,.8,.25,1) forwards",
        drop: "drop .7s cubic-bezier(.2,.9,.3,1) backwards",
        "fade-in": "fade-in .5s ease-out forwards",
        marquee: "marquee 26s linear infinite",
        sway: "sway 4.5s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
