import React, { useEffect } from 'react';
import Head from 'next/head';
import BlogHero from '../../components/kp-blog/BlogHero';
import Link from 'next/link';

import { readdir } from 'fs/promises';
import { join } from 'path';

import { read } from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';

import makeAnchorsNewTab from '../../lib/makeAnchorsNewTab';
import Footer from '../../components/shared/Footer';

function Post({ postData, postContent }) {
	useEffect(() => {
		makeAnchorsNewTab();
	}, []);

	return (
		<>
			<Head>
				<title>kp-blog</title>
				<link rel='icon' href='/favicon.png' />
			</Head>
			<BlogHero />

			<section className=' bg-main-light lg:px-0 lg:py-32 px-4 py-24'>
				<div className=' container max-w-3xl'>
					<p className=' lg:text-4xl text-3xl font-semibold text-gray-100'>
						{postData.title}
					</p>

					<p className=' mt-2 text-gray-400'>
						by{' '}
						<span className='hover:underline font-semibold text-green-400 cursor-pointer'>
							{postData.author}
						</span>{' '}
						on{' '}
						<span>
							{new Date(postData.date).toUTCString().slice(5, 16)}
						</span>
					</p>
					<div
						id='article-content'
						className='max-w-3xl mt-10 prose prose-lg text-gray-100'>
						<MDXRemote {...postContent} />
					</div>
					<div className=' mt-16 text-center'>
						<Link href={`/blog`}>
							<a className=' hover:underline hover:text-green-400 text-2xl font-semibold text-gray-100 cursor-pointer'>
								Go Back{' '}
							</a>
						</Link>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
}
export async function getStaticPaths() {
	const postsDirectory = join(process.cwd(), 'data/blog_posts_data');
	const filenames = await readdir(postsDirectory);
	const urls = filenames.map(filename => filename.replace('.md', ''));
	const urlsArr = urls.map(url => {
		return { params: { blogArticle: url } };
	});
	return {
		paths: urlsArr,
		fallback: false
	};
}
export async function getStaticProps({ params }) {
	const postsDirectory = join(process.cwd(), 'data/blog_posts_data');
	const filePath = join(postsDirectory, params.blogArticle + '.md');

	const postData = read(filePath);
	const postContent = await serialize(postData.content);

	return {
		props: {
			postData: postData.data,
			postContent
		}
	};
}
export default Post;
