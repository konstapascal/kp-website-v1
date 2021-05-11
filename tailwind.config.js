module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	// darkMode: 'media', // or 'media' or 'class'
	theme: {
		container: {
			center: true
		},
		extend: {
			colors: {
				main: {
					light: '#2F312C',
					dark: '#1E1F1C'
				}
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: [require('@tailwindcss/typography')]
};
