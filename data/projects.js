const projects = [
	{
		id: 1,
		title: 'KP Website',
		subtitle: 'Personal website and blog',
		description:
			'My personal website and blog, written in React and Next. The website is generated entirely into vanilla HTML, CSS and JS files. Blog posts are written in Markdown and generated at build time.',
		metadata: {
			imgAlt: 'Image of my personal website project, featuring the hero section.'
		},
		urls: {
			imgPath: '/img/kp-website.webp',
			demoUrl: 'https://konstapascal.dev',
			codeUrl: 'https://github.com/konstapascal/kp-website-v1'
		},
		labels: ['NEXT', 'TAILWIND', 'MARKDOWN']
	},
	{
		id: 2,
		title: 'The Wise Owl',
		subtitle: 'Inspirational quotes generator',
		description:
			'Simple application in which you can generate and save your favorite quotes. Made with Next and styled entirely with Tailwind. Works by making use of the browsers local storage to preserve state.',
		metadata: {
			imgAlt: 'Image of The Wise Owl project, featuring the main page of the website'
		},
		urls: {
			imgPath: '/img/the-wise-owl.webp',
			demoUrl: 'https://owl.konstapascal.dev',
			codeUrl: 'https://github.com/konstapascal/the-wise-owl'
		},

		labels: ['NEXT', 'TAILWIND']
	},
	{
		id: 3,
		title: 'URL Shortener',
		subtitle: 'URL shortener for long links',
		description:
			'Simple URL shortener application created with the Create React App template, styled with Tailwind. Extremely useful for both shortening URLs and having them personalized to my own domain.',
		metadata: {
			imgAlt:
				'Image of the URL shortener website project, featuring the main page of the website'
		},
		urls: {
			imgPath: '/img/url-shortener.webp',
			demoUrl: 'https://sh.konstapascal.dev',
			codeUrl: 'https://github.com/konstapascal/url-shortener'
		},
		labels: ['REACT', 'CRA', 'TAILWIND']
	},
	// {
	// 	id: 4,
	// 	title: 'JS Calculator',
	// 	subtitle: 'Calculator made in pure JS',
	// 	description:
	// 		'Calculator made with simplicity in mind. Made purely in vanilla JS and without the use of any third party libraries. Flex and Grid layout model have been used primarily to achieve the design.',
	// 	urls: {
	// 		imgPath: '/img/js-calculator.webp',
	// 		demoUrl: 'https://calc.konstapascal.dev',
	// 		codeUrl: 'https://github.com/konstapascal/js-calculator'
	// 	},
	// 	labels: ['HTML', 'CSS', 'JS']
	// },
	{
		id: 5,
		title: 'VSCode Theme',
		subtitle: 'CLI application for managing VSC themes',
		description:
			'CLI application from which you can change and manage your VSC themes. Implemented in Node and with minimal use of additional third party libraries. Compatible with Windows, macOS and Linux.',
		metadata: {
			imgAlt: 'Image of a terminal with some output from the VSCode Theme CLI application'
		},
		urls: {
			imgPath: '/img/vscode-theme.webp',
			demoUrl: 'https://www.npmjs.com/package/vscode-theme',
			codeUrl: 'https://github.com/konstapascal/vscode-theme'
		},
		labels: ['NODE', 'JS']
	}
	// {
	// 	id: 6,
	// 	title: 'Chestnut App & API',
	// 	subtitle: 'Educational PKI web application and API',
	// 	description:
	// 		'Educational web app used to teach basic concepts of PKI and cryptography. It allows the creation and management of keypairs, encryption and decryption. The API, written in Node JS, is the backend used by the website.',

	// 	urls: {
	// 		imgPath: '/img/chestnut.webp',
	// 		codeUrl: 'https://github.com/konstapascal/chestnut',
	// 		apiUrl: 'https://app.swaggerhub.com/apis-docs/konstapascal/chestnut-api/1.1'
	// 	},
	// 	labels: ['REACT', 'CRA', 'NODE']
	// }
];

export default projects;
