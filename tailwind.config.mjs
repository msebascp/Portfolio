/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// DarkTheme
				"dark-primary-1": "#121212",
				"dark-primary-2": "#1E1E1E",
				"dark-hover": "#3498db",
				// LightTheme
				"light-primary-1": "rgb(214 211 209)",
				"light-primary-2": "rgb(231 229 228)",
				"light-hover": "#d15c0a"
			}
		},
	},
	plugins: [],
}
