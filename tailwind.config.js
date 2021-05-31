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
					light: '#2F312C',
					dark: '#1E1F1C'
				},
				accent: {
					light: '#34D399',
					dark: '#059669'
				}
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: [require('@tailwindcss/typography')]
};
