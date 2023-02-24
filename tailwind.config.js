const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        buttonGradient:
          "linear-gradient(97.47deg, #002C2B -56.62%, #037C7A 152.86%)",
        bannerGradient: "linear-gradient(180deg, #004543 0%, #002C2B 100%)",
      },
      fontFamily: {
        sans: ["Archivo", ...defaultTheme.fontFamily.sans],
        poppins: ["Poppins"],
      },
      colors: {
        lightGray: "#333333",
        darkGray: "#666666",
        darkGreen: "#002C2B",
        lightGreen: "#037C7A",
        offWhite: "#f9f9f9",
        darkBlue: "#0A142F",
        blogTitle: "#31374D",
        blogPara: "#5F6765",
        formBg: "rgba(17, 60, 60, 0.05)",
        placeholderColor: "rgba(115, 115, 123, 0.8)",
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fit,minmax(140px,1fr))",
      },
      maxWidth: {
        theme: "1200px",
      },
      boxShadow: {
        shadow: "1px 1px 10px rgba(0, 0, 0, 0.15)",
        service: "0px 4px 25px rgba(0, 0, 0, 0.08)",
        input: "0px 4px 20px rgba(0, 0, 0, 0.05)",
        gallery: "0px 4px 70px rgba(0, 0, 0, 0.05)",
        pagination: "box-shadow: 0px 30px 50px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
