import React from 'react';
import Head from 'next/head';
import BlogHero from '../../components/kp-blog/BlogHero';

import { promises as fs } from 'fs';
import path from 'path';

function Post({ posts }) {
	return (
		<>
			<Head>
				<title>kp-blog</title>
				<link rel='icon' href='/favicon.png' />
			</Head>
			<BlogHero />

			<div className=' bg-main-light'>
				{posts.map(post => (
					<div className='p-6 text-gray-100'>
						<h3>{post.filename}</h3>
						<p>{post.content}</p>
					</div>
				))}
			</div>
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

	const posts = props.params.paths.map(async filename => {
		const filePath = path.join(postsDirectory, filename);
		const fileContents = await fs.readFile(filePath, 'utf8');

		return {
			filename,
			content: fileContents
		};
	});
	return {
		props: {
			posts: await Promise.all(posts)
		}
	};
}

export default Post;
