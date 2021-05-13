import Head from 'next/head';
import React from 'react';
import BlogHero from '../../components/kp-blog/BlogHero';
import BlogPost from '../../components/kp-blog/BlogPost';
import Link from 'next/link';

import { readdir } from 'fs/promises';
import path from 'path';

import { read } from 'gray-matter';

function Blog({ filesMetadata }) {
	return (
		<>
			<Head>
				<title>kp-blog</title>
				<link rel='icon' href='/favicon.png' />
			</Head>
			<BlogHero />

			<section className=' bg-main-light py-24'>
				<div className=' lg:max-w-3xl container'>
					{filesMetadata.map(file => {
						return (
							<BlogPost
								title={file.data.title}
								excerpt={file.data.excerpt}
								date={file.data.date}
								author={file.data.author}
								labels={file.data.labels}
								url={file.data.url}
							/>
						);
					})}
					<div className='mt-10 text-center'>
						<Link href={`/`}>
							<a className=' hover:underline hover:text-green-400 text-2xl font-semibold text-gray-100 cursor-pointer'>
								Back to Website{' '}
							</a>
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}

// TODO: consider using async fs function
export async function getStaticProps() {
	const postsDirectory = path.join(process.cwd(), 'data/blog_posts_data');
	const posts = await readdir(postsDirectory);
	let filesMetadata = [];
	posts.forEach(post => {
		const fileMetadata = read(`${postsDirectory}\\${post}`);
		filesMetadata.push(fileMetadata);
	});
	filesMetadata.forEach(file => {
		delete file.content;
		delete file.orig;
		delete file.path;
	});
	return { props: { filesMetadata } };
}
export default Blog;
