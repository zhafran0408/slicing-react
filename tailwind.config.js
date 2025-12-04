/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      // Kamu punya custom touchAction
      touchAction: {
        "pan-x": "pan-x",
      },

      // Kamu punya custom overscroll
      overscrollBehavior: {
        "x-contain": "contain",
      },

      // TAMBAHAN UNTUK ANIMASI MARQUEE
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },

      animation: {
        marquee: "marquee 15s linear infinite",
      },
    },
    
  },
  plugins: [],
};



