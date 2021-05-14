import React from 'react';
import Head from 'next/head';
import BlogHero from '../../components/kp-blog/BlogHero';
import Link from 'next/link';

import { readdir } from 'fs/promises';
import { join } from 'path';

import { read } from 'gray-matter';

function Post({ post: { data, content } }) {
	return (
		<>
			<Head>
				<title>kp-blog</title>
				<link rel='icon' href='/favicon.png' />
			</Head>
			<BlogHero />

			<section className=' bg-main-light pt-16 pb-24'>
				<div className=' lg:max-w-3xl container'>
					<div className='p-6'>
						<p className=' inline-block text-4xl font-semibold text-gray-100'>
							{data.title}
						</p>

						<p className=' mt-2 text-gray-400'>
							by{' '}
							<span className='hover:text-green-400 hover:underline font-semibold cursor-pointer'>
								{data.author}
							</span>{' '}
							on <span>{data.date}</span>
						</p>
						<p className='mt-6 mb-8 text-white'>{content}</p>
						<div className=' mt-16 text-center'>
							<Link href={`/blog`}>
								<a className=' hover:underline hover:text-green-400 text-2xl font-semibold text-gray-100 cursor-pointer'>
									Go Back{' '}
								</a>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
export async function getStaticPaths() {
	const postsDirectory = join(process.cwd(), 'data/blog_posts_data');
	const filenames = await readdir(postsDirectory);
	const urls = filenames.map(filename => filename.replace('.md', ''));

	const returnArr = urls.map(url => {
		return { params: { blogUrl: url } };
	});

	return {
		paths: returnArr,
		fallback: false
	};
}
export async function getStaticProps({ params }) {
	const postsDirectory = join(process.cwd(), 'data/blog_posts_data');
	const filePath = join(postsDirectory, params.blogUrl + '.md');

	const fileMetadata = read(filePath);
	const fileData = { ...fileMetadata };

	delete fileData.orig;
	delete fileData.path;

	return {
		props: {
			post: fileData
		}
	};
}
export default Post;
