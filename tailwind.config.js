/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        "app/**/*.{ts,tsx}",
        "components/**/*.{ts,tsx}",
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            animation: {
                "fade-in-up": "fade-in-up 0.6s ease-out",
                "scale-in": "scale-in 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                "slide-in-left": "slide-in-left 0.5s ease-out",
                "slide-in-right": "slide-in-right 0.5s ease-out",
            },
            keyframes: {
                "pulse-border": {
                    "0%": {},
                    "50%": {
                        borderColor: "rgba(251, 191, 36, 1)",
                    },
                    "100%": {
                        borderColor: "rgba(252, 211, 77, 0.7)",
                    },
                },
                "fade-in-up": {
                    "0%": {
                        opacity: "0",
                        transform: "translateY(20px)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateY(0)",
                    },
                },
                "scale-in": {
                    "0%": {
                        opacity: "0",
                        transform: "scale(0.5)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "scale(1)",
                    },
                },
                "slide-in-left": {
                    "0%": {
                        opacity: "0",
                        transform: "translateX(-20px)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateX(0)",
                    },
                },
                "slide-in-right": {
                    "0%": {
                        opacity: "0",
                        transform: "translateX(20px)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateX(0)",
                    },
                },
            },
            colors: {
                "neutral-900": "hsl(var(--neutral-900))",
                "neutral-700": "hsl(var(--neutral-700))",
                "neutral-200": "hsl(var(--neutral-200))",
                "neutral-100": "hsl(var(--neutral-100))",
                "neutral-0": "hsl(var(--neutral-0))",
                "light-salmon-500": "hsl(var(--light-salmon-500))",
                "light-salmon-100": "hsl(var(--light-salmon-100))",
                "light-salmon-50": "hsl(var(--light-salmon-50))",
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
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
