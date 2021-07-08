const projects = [
	{
		id: 1,
		title: 'KP Website',
		subtitle: 'My personal website and blog',
		description:
			'My personal website and blog, written in React and Next. The website is completely statically generated into vanilla HTML, CSS and JS files. Blog posts are written in Markdown and generated at build time.',
		urls: {
			imgPath: '/img/kp-website_50-v.jpg',
			demoUrl: 'https://konstapascal.dev',
			codeUrl: 'https://github.com/konstapascal/kp-website-v1'
		},
		labels: ['NEXT', 'TAILWIND', 'MARKDOWN']
	},
	{
		id: 2,
		title: 'The Wise Owl',
		subtitle: 'Famous and inspirational quote generator',
		description:
			'Simple application in which you can generate and save your favorite quotes. Made with Next and styled entirely with Tailwind. Works by making use of the browsers local storage to preserve state.',
		urls: {
			imgPath: '/img/the-wise-owl_50-v.jpg',
			demoUrl: 'https://owl.konstapascal.dev',
			codeUrl: 'https://github.com/konstapascal/the-wise-owl'
		},
		labels: ['NEXT', 'TAILWIND']
	},
	{
		id: 3,
		title: 'URL Shortener',
		subtitle: 'Handy URL shortener for long links',
		description:
			'Simple URL shortener application created with the Create React App template, styled with Tailwind. Extremely useful for both shortening URLs and having them personalized to my own domain.',
		urls: {
			imgPath: '/img/url-shortener_50-v.jpg',
			demoUrl: 'https://sh.konstapascal.dev',
			codeUrl: 'https://github.com/konstapascal/url-shortener'
		},
		labels: ['REACT', 'CRA', 'TAILWIND']
	},
	{
		id: 4,
		title: 'JS Calculator',
		subtitle: 'Calculator made in pure JS',
		description:
			'Calculator made with simplicity in mind. Made purely in vanilla JS and without the use of any third party libraries. Flex and Grid layout model have been used primarily to avhieve the design.',
		urls: {
			imgPath: '/img/js-calculator_50-v.jpg',
			demoUrl: 'https://calc.konstapascal.dev',
			codeUrl: 'https://github.com/konstapascal/js-calculator'
		},
		labels: ['HTML', 'CSS', 'JS']
	}
];

export default projects;
