import HomeHero from '../components/kp-website/HomeHero';
import HomeAbout from '../components/kp-website/HomeAbout';
import HomeProjects from '../components/kp-website/HomeProjects';
import HomeBlog from '../components/kp-website/HomeBlog';

import Head from 'next/head';
import Footer from '../components/shared/Footer';

import { join } from 'path';
import { readdir } from 'fs/promises';
import { read as gmRead } from 'gray-matter';
import GenericMetaTags from '../components/meta/GenericMetaTags';
import TwitterMetaTags from '../components/meta/TwitterMetaTags';

export default function Home({ labels }) {
	return (
		<>
			<Head>
				<title>kp-website</title>
				<link rel='icon' href='/favicon.png' />

				<script async src='https://www.googletagmanager.com/gtag/js?id=G-Z2FSLL37JV' />
				<script src='js/analytics.js' />

				<GenericMetaTags
					description='Hello, my name is Konstantinos Pascal! I am a new developer always excited to learn! Most interested in web development with a passion for both the frontend and the backend! I am very comfortable with the modern web languages, frameworks and technologies.'
					author='Konstantinos Pascal'
					keywords={labels}
				/>
				<TwitterMetaTags
					title="Konstantinos Pascal's Website"
					description='Hello, my name is Konstantinos Pascal! I am a new developer always excited to learn! Most interested in web development with a passion for both the frontend and the backend! I am very comfortable with the modern web languages, frameworks and technologies.'
				/>
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
