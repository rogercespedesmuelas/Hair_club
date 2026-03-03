/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}", // Verify where components are located
        "./App.tsx"
    ],
    theme: {
        extend: {
            colors: {
                charcoal: '#1A1A1A',
                gold: '#D4AF37',
                'accent-orange': '#D4AF37',
                'neon-blue': '#4DEEEA',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'], // Use Inter or similar
            },
        },
    },
    plugins: [],
}
