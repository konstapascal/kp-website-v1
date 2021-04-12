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
					light: '#222D39',
					dark: '#131920'
				},
				accent: {
					light: '#4DBBFF',
					dark: '#005E99'
				}
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: [require('@tailwindcss/typography')]
};
