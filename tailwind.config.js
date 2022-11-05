/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			animation: {
				"spin-slow": "spin 20s linear infinite",
			},
			colors: {
				neon: "#E8F985",
				camo: "#687517",
				pinkish: "#FC749D",
				lila: "#B275FF",
				greenish: "#AAF985",
				petrolish: "#EDF9F7",
				petrol: "#D7EEEB",
				dark: "#223038",
				darker: "#141D22",
				text: "#223038",
			},
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
			},
		},
	},
	plugins: [],
};
