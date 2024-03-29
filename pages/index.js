import HomeHero from '../components/kp-website/HomeHero';
import HomeAbout from '../components/kp-website/HomeAbout';
import HomeProjects from '../components/kp-website/HomeProjects';
import HomeBlog from '../components/kp-website/HomeBlog';

import { join } from 'path';
import { readdir } from 'fs/promises';
import { read as gmRead } from 'gray-matter';
import { useEffect } from 'react';

import HomeHead from '../components/kp-website/HomeHead';

export default function Home({ uniqueLabels }) {
	let BLOG_URL;

	useEffect(() => {
		const lang = localStorage.getItem('lang');
		if (lang) document.documentElement.lang = lang;

		BLOG_URL = window.location.href;
	}, []);

	return (
		<>
			<HomeHead url={BLOG_URL} labels={uniqueLabels} />

			<HomeHero />
			<HomeAbout />
			<HomeProjects />
			<HomeBlog uniqueLabels={uniqueLabels} />
		</>
	);
}

export async function getStaticProps() {
	const postsDirectory = join(process.cwd(), 'data/blog-posts-data');
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
