/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./layout/**/*.{js,ts,jsx,tsx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				jost: ['"Jost"'],
			},
			fontSize: {
				"3xl": "32px",
				"4xl": "48px",
				"5xl": "56px",
				"6xl": "64px",
				"7xl": "72px",
				"8xl": "80px",
			},
			aspectRatio: {
				portrait: "9 / 13",
				video: "16 / 9",
				header: "16 / 8",
				banner: "16 / 4",
				bannerbox: "1 / 2",
			},
			animation: {
				"spin-slow": "spin 20s linear infinite",
			},
		},
	},
	plugins: [],
};
