import React from 'react';
import Head from 'next/head';
import BlogHero from '../../components/kp-blog/BlogHero';

import { promises as fs } from 'fs';
import path from 'path';

function Post({ posts }) {
	console.log(posts);
	return (
		<>
			<Head>
				<title>kp-blog</title>
				<link rel='icon' href='/favicon.png' />
			</Head>
			<BlogHero />

			<div className=' bg-main-light'></div>

			<section className=' bg-main-light py-16'>
				<div className=' lg:max-w-3xl container'>
					<p className=' hover:underline inline-block text-4xl font-semibold text-gray-100 cursor-pointer'>
						{posts.title}
					</p>
					<p className='text-white'>{posts.fileContents}</p>
				</div>
			</section>
		</>
	);
}

export async function getStaticPaths() {
	const postsDirectory = path.join(process.cwd(), 'data/blog_posts_data');
	const filenames = await fs.readdir(postsDirectory);

	const postsArray = filenames.map(post => {
		return { params: { slug: post } };
	});

	return {
		paths: postsArray,
		fallback: false
	};
}

export async function getStaticProps(props) {
	const postsDirectory = path.join(process.cwd(), 'data/blog_posts_data');
	const filePath = path.join(postsDirectory, props.params.slug);

	const fileContents = await fs.readFile(filePath, 'utf8');

	return {
		props: {
			posts: { fileContents }
		}
	};
}

export default Post;
