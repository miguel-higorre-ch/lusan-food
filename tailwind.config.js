/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "system-ui", "sans-serif"],
        display: ["Sora", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#0a0906",
        ink2: "#120d08",
        flameGold: "#FFC800",
        flameOrange: "#FF8A00",
        flameRed: "#FF3D00",
      },
      keyframes: {
        emberRise: {
          "0%": { transform: "translateY(0) translateX(0)", opacity: "0" },
          "10%": { opacity: "0.9" },
          "100%": { transform: "translateY(-320px) translateX(20px)", opacity: "0" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(2deg)" },
        },
        glowPulse: {
          "0%, 100%": { filter: "drop-shadow(0 0 25px rgba(255,138,0,0.55))" },
          "50%": { filter: "drop-shadow(0 0 45px rgba(255,138,0,0.85))" },
        },
      },
      animation: {
        emberRise: "emberRise 6s ease-in infinite",
        floatSlow: "floatSlow 5s ease-in-out infinite",
        glowPulse: "glowPulse 3.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
