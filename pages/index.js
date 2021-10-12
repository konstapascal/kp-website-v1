import HomeHero from '../components/kp-website/HomeHero';
import HomeAbout from '../components/kp-website/HomeAbout';
import HomeProjects from '../components/kp-website/HomeProjects';
import HomeBlog from '../components/kp-website/HomeBlog';

import { join } from 'path';
import { readdir } from 'fs/promises';
import { read as gmRead } from 'gray-matter';
import { useEffect } from 'react';
import HomeHead from '../components/kp-website/HomeHead';

import Head from 'next/head';
import GenericMetaTags from '../components/meta/GenericMetaTags';
import TwitterMetaTags from '../components/meta/TwitterMetaTags';
import FacebookMetaTags from '../components/meta/FacebookMetaTags';

import metadata from '../data/metadata';

const { title, description } = metadata.website;

export default function Home({ uniqueLabels }) {
	let BLOG_URL;

	useEffect(() => {
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
