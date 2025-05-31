/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            es: "425px",
            sm: "640px",
            md: "768px",
            lg: "992px",
            xl: "1300px",
        },
        container: {
            center: true,
            padding: "1rem",
        },
        fontFamily: {
            inter: ["Inter", "sans-serif"],
        },
        extend: {
            padding: {
                "sec-sm": 40,
                "sec-md": 80,
                "sec-lg": 112,
            },
            colors: {
                primary: {
                    10: "#9bc7c4",
                    20: "#70A1FF",
                    30: "#f8f4c4",
                    40: "#4c7774",
                    50: "#6494b5",
                    60: "#47667b",
                },
                secondary: {
                    10: "#f8f4c4",
                    20: "#dedcc0",
                    30: "#FFCB5B",
                    40: "#FFC038",
                    50: "#b4be99",
                    60: "#a5c3a7",
                },
                gray: {
                    10: "#F4F4F5",
                    20: "#E4E4E7",
                    30: "#D4D4D8",
                    40: "#A1A1AA",
                    50: "#71717A",
                    60: "#52525B",
                    70: "#3F3F46",
                    80: "#27272A",
                    90: "#18181B",
                },
            },
            fontSize: {
                h1: [
                    "clamp(2.25rem, 4vw, 3.75rem)",
                    {
                        lineHeight: "normal",
                        fontWeight: "700",
                    },
                ],
                h2: [
                    "clamp(2rem, 4vw, 3rem)",
                    {
                        lineHeight: "normal",
                        fontWeight: "700",
                    },
                ],
                h3: [
                    "clamp(1.75rem, 4vw, 2.25rem)",
                    {
                        lineHeight: "normal",
                        fontWeight: "700",
                    },
                ],
                "3xlg": ["clamp(1.5rem, 4vw, 2rem)"],
                "2xlg": ["clamp(1.25rem, 4vw, 1.5rem)"],
            },
            transitionDuration: {
                DEFAULT: "300ms",
            },
        },
    },
    plugins: [],
    corePlugins: {
        preflight: true,
    },
};