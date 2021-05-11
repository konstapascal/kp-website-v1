import Head from 'next/head';
import React from 'react';
import BlogHero from '../../components/kp-blog/BlogHero';
import BlogPost from '../../components/kp-blog/BlogPost';

import { promises as fs } from 'fs';
import path from 'path';

function Blog(posts) {
	return (
		<>
			<Head>
				<title>kp-blog</title>
				<link rel='icon' href='/favicon.png' />
			</Head>
			<BlogHero />

			<section className=' bg-main-light py-16'>
				<div className=' lg:max-w-3xl container'>
					{posts.postsArray.map(post => {
						return <BlogPost title={post.title} url={post.title} />;
					})}
				</div>
			</section>
		</>
	);
}
export async function getStaticProps() {
	const postsDirectory = path.join(process.cwd(), 'data/blog_posts_data');
	const filenames = await fs.readdir(postsDirectory);

	const postsArray = filenames.map(post => {
		return { title: post };
	});

	return { props: { postsArray } };
}
export default Blog;
