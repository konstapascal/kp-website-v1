import HomeHero from '../components/kp-website/HomeHero';
import HomeAbout from '../components/kp-website/HomeAbout';
import HomeProjects from '../components/kp-website/HomeProjects';
import HomeBlog from '../components/kp-website/HomeBlog';

import { join } from 'path';
import { readdir } from 'fs/promises';
import { read as gmRead } from 'gray-matter';
import { useEffect, useState } from 'react';

import HomeHead from '../components/kp-website/HomeHead';
import Footer from '../components/shared/Footer';

export default function Home({ uniqueLabels }) {
	const [lang, setLang] = useState('en');

	let BLOG_URL;

	useEffect(() => {
		BLOG_URL = window.location.href;
	}, []);

	// useEffect(() => {
	// 	localStorage.getItem('lang') && setLang(localStorage.getItem('lang'));

	// 	if (navigator.languages.includes('no')) {
	// 		document.documentElement.lang = 'no';
	// 		setLang('no');
	// 	}
	// }, []);

	return (
		<>
			<HomeHead url={BLOG_URL} labels={uniqueLabels} />

			<HomeHero />
			<HomeAbout />
			<HomeProjects />
			<HomeBlog uniqueLabels={uniqueLabels} />

			<Footer lang={lang} />
		</>
	);
}

export async function getStaticProps() {
	const postsDirectory = join(process.cwd(), 'data/blog_posts_data');
	const posts = await readdir(postsDirectory);

	let labels = [];

	posts.forEach(post => {
		const contents = gmRead(`${postsDirectory}/${post}`);
		labels.push(...contents.data.labels);
	});

	return {
		props: {
			uniqueLabels: [...new Set(labels)]
		}
	};
}
