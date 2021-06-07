const projects = [
	{
		id: 2,
		title: 'JS Calculator',
		subtitle: 'Calculator made in pure JS',
		description:
			'Calculator made with simplicity in mind. Made purely in vanilla JS and without the use of any third party libraries. Flex and grid layout model have been used primarily for achieving the design.',
		urls: {
			imgPath: '/img/js-calculator.jpg',
			demoUrl: 'https://konstapascal.github.io/js-calculator/',
			codeUrl: 'https://github.com/konstapascal/js-calculator'
		},
		labels: ['HTML', 'CSS', 'JS']
	},
	{
		id: 1,
		title: 'KP Website',
		subtitle: 'My personal website and blog',
		description:
			'Statically generated website with Next JS, a flexile React framework. Tailwind CSS used as the primary styling library. Gray-matter used to work with the blog articles as files, converting them from Markdown to HTML format.',
		urls: {
			imgPath: '/img/kp-website.jpg',
			demoUrl: 'https://konstapascal.dev',
			codeUrl: 'https://github.com/konstapascal/kp-website-v1'
		},
		labels: ['NEXT', 'TAILWIND', 'GRAY-MATTER']
	},
	{
		id: 3,
		title: 'The Wise Owl',
		subtitle: 'Famous and inspirational quote generator',
		description:
			'Simple application in which you can generate and save your favorite quotes. Made with Next JS and styled eentirely with Tailwind CSS. Works by making use of the browsers local storage.',
		urls: {
			imgPath: '/img/the-wise-owl.jpg',
			demoUrl: 'https://konstapascal.github.io/the-wise-owl/',
			codeUrl: 'https://github.com/konstapascal/the-wise-owl'
		},
		labels: ['NEXT', 'TAILWIND']
	}
];

export default projects;
