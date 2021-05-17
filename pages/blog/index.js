import Head from 'next/head';
import React from 'react';
import BlogHero from '../../components/kp-blog/BlogHero';
import BlogPost from '../../components/kp-blog/BlogPost';
// import Link from 'next/link';

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

			<section className=' bg-main-light py-32'>
				<div className=' lg:max-w-3xl container'>
					{filesMetadataArr.map(file => {
						return (
							<BlogPost
								key={file.title}
								title={file.title}
								excerpt={file.excerpt}
								date={new Date(file.date).toUTCString().slice(0, 16)}
								author={file.author}
								labels={file.labels}
								url={file.url}
							/>
						);
					})}
					{/* <div className='mt-10 text-center'>
						<Link href={`/`}>
							<a className=' hover:underline hover:text-green-400 text-2xl font-semibold text-gray-100 cursor-pointer'>
								Back to Website{' '}
							</a>
						</Link>
					</div> */}
				</div>
			</section>
		</>
	);
}

export async function getStaticProps() {
	const postsDirectory = path.join(process.cwd(), 'data/blog_posts_data');
	const posts = await readdir(postsDirectory);

	const tempArr = [];

	posts.forEach(post => {
		const postMetadata = read(`${postsDirectory}\\${post}`);
		tempArr.push(postMetadata);
	});

	const filesMetadataArr = tempArr
		.map(post => {
			return { ...post.data };
		})
		// sort by date
		.sort((a, b) => {
			return new Date(b.date) - new Date(a.date);
		});

	return { props: { filesMetadataArr } };
}

export default Blog;
