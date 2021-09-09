import HomeHero from '../components/kp-website/HomeHero';
import HomeAbout from '../components/kp-website/HomeAbout';
import HomeProjects from '../components/kp-website/HomeProjects';
import HomeBlog from '../components/kp-website/HomeBlog';

import Head from 'next/head';
import Footer from '../components/shared/Footer';

import { join } from 'path';
import { readdir } from 'fs/promises';
import { read as gmRead } from 'gray-matter';

export default function Home({ labels }) {
	return (
		<>
			<Head>
				<title>kp-website</title>
				<link rel='icon' href='/favicon.png' />
				<script async src='https://www.googletagmanager.com/gtag/js?id=G-Z2FSLL37JV' />
				<script src='js/analytics.js' />
			</Head>

			<HomeHero />

			<HomeAbout />
			<HomeProjects />
			<HomeBlog labels={labels} />

			<Footer />
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
			labels: [...new Set(labels)]
		}
	};
}
