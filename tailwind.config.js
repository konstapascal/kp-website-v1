module.exports = {
	mode: 'jit',
	purge: ['./components/**/*.{js,jsx,ts,tsx,vue}', './pages/**/*.{js,jsx,ts,tsx,vue}'],
	theme: {
		container: {
			center: true
		},
		extend: {
			colors: {
				main: {
					// light: '#2F312C',
					light: '#262723',
					dark: '#1E1F1C'
				},
				accent: {
					light: '#34D399',
					dark: '#059669'
				}
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
