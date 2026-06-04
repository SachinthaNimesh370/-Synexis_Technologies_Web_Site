/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        synexis: {
          bg: {
            primary: "#120022",
            secondary: "#1B0133",
            card: "#22023F",
          },
          accent: {
            purple: "#A855F7",
            violet: "#C084FC",
            glow: "#D8B4FE",
            hover: "#B36CFF",
          },
          text: {
            primary: "#FFFFFF",
            secondary: "#CFC8D8",
          },
          border: "rgba(255,255,255,0.08)",
          success: "#22C55E",
        }
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(168, 85, 247, 0.15)",
        "glow-lg": "0 0 35px rgba(168, 85, 247, 0.25)",
        glass: "inset 0 1px 1px rgba(255, 255, 255, 0.05), 0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
      backgroundImage: {
        "radial-gradient-glow": "radial-gradient(circle at 50% 50%, rgba(216, 180, 254, 0.1) 0%, transparent 60%)",
      }
    },
  },
  plugins: [],
};
