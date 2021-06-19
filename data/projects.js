const projects = [
	{
		id: 1,
		title: 'JS Calculator',
		subtitle: 'Calculator made in pure JS',
		description:
			'Calculator made with simplicity in mind. Made purely in vanilla JS and without the use of any third party libraries. Flex and grid layout model have been used primarily for achieving the design.',
		urls: {
			imgPath: '/img/js-calculator.jpg',
			demoUrl: 'https://js-calculator-kp.vercel.app',
			codeUrl: 'https://github.com/konstapascal/js-calculator'
		},
		labels: ['HTML', 'CSS', 'JS']
	},
	{
		id: 2,
		title: 'URL Shortener',
		subtitle: 'Handy URL shortener for long links',
		description:
			'Simple URL shortener application created with the Create React App template, styled with Tailwind. Extremely useful for both shortening URLs and having them personalized to my own domain. Generated links are stored locally.',
		urls: {
			imgPath: '/img/url-shortener.jpg',
			demoUrl: 'https://sh.konstapascal.dev',
			codeUrl: 'https://github.com/konstapascal/url-shortener'
		},
		labels: ['REACT', 'CRA', 'TAILWIND']
	},
	{
		id: 3,
		title: 'The Wise Owl',
		subtitle: 'Famous and inspirational quote generator',
		description:
			'Simple application in which you can generate and save your favorite quotes. Made with Next JS and styled eentirely with Tailwind CSS. Works by making use of the browsers local storage.',
		urls: {
			imgPath: '/img/the-wise-owl.jpg',
			demoUrl: 'https://the-wise-owl.vercel.app',
			codeUrl: 'https://github.com/konstapascal/the-wise-owl'
		},
		labels: ['NEXT', 'TAILWIND']
	}
];

export default projects;
