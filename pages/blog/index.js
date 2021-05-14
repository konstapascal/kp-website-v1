import Head from 'next/head';
import React from 'react';
import BlogHero from '../../components/kp-blog/BlogHero';
import BlogPost from '../../components/kp-blog/BlogPost';
import Link from 'next/link';

import { readdir } from 'fs/promises';
import path from 'path';

import { read } from 'gray-matter';

function Blog({ filesMetadataArr }) {
	return (
		<>
			<Head>
				<title>kp-blog</title>
				<link rel='icon' href='/favicon.png' />
			</Head>
			<BlogHero />

			<section className=' bg-main-light pt-16 pb-24'>
				<div className=' lg:max-w-3xl container'>
					{filesMetadataArr.map(file => {
						return (
							<BlogPost
								key={file.data.title}
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

export async function getStaticProps() {
	const postsDirectory = path.join(process.cwd(), 'data/blog_posts_data');
	const posts = await readdir(postsDirectory);

	let filesMetadataArr = [];

	posts.forEach(post => {
		const postMetadata = read(`${postsDirectory}\\${post}`);
		filesMetadataArr.push(postMetadata);
	});

	filesMetadataArr.forEach(file => {
		delete file.content;
		delete file.orig;
		delete file.path;
	});

	return { props: { filesMetadataArr } };
}
export default Blog;
