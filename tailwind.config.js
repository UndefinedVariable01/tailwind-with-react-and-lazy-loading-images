const colors = require("tailwindcss/colors")

module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false,
    theme: {
        extend: {
            fontSize: {
                "responsive-md": "2.95vw",
            },
            colors: {
                gray: colors.trueGray,
            },
        },
        screens: {
            md: "780px",
            xl: "1200px",
            "2xl": "1366px",
        },
        fontFamily: {
            serif: ["Raleway"],
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
