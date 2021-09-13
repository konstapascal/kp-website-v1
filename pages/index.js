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
import { useEffect } from 'react';
import FacebookMetaTags from '../components/meta/FacebookMetaTags';

const meta = {
	title: 'KP Website',
	description:
		'I am a developer with a big interest in web development and a passion for both the frontend and the backend! I am very comfortable with modern web languages, frameworks and technologies such as React, Next and Tailwind.'
};

export default function Home({ labels }) {
	let url;

	useEffect(() => {
		url = window.location.href;
	}, []);

	return (
		<>
			<Head>
				<title>kp-website</title>
				<link rel='icon' href='/favicon.png' />

				<script async src='https://www.googletagmanager.com/gtag/js?id=G-Z2FSLL37JV' />
				<script src='js/analytics.js' />

				<GenericMetaTags
					description={meta.description}
					author='Konstantinos Pascal'
					keywords={labels}
				/>
				<TwitterMetaTags title={meta.title} description={meta.description} />
				<FacebookMetaTags
					url={url}
					type='website'
					title={meta.title}
					description={meta.description}
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
