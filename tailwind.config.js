/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: 'hsl(217, 28%, 15%)', // Navy 850
				mainBg: 'hsl(218, 28%, 13%)', //  Navy 900
				footerBg: 'hsl(216, 53%, 9%)', // Navy 950
				testimonialsBg: 'hsl(219, 30%, 18%)', // Navy 800
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				heading: ['Poppins', 'sans-serif'],
				mono: ['JetBrains Mono', 'monospace'],
			},
		},
	},
	plugins: [],
};
