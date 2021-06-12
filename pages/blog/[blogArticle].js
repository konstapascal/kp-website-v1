import React, { useEffect } from 'react';
import Head from 'next/head';
import BlogArticleHero from '../../components/kp-blog/BlogArticleHero';
import Link from 'next/link';

import { readdir } from 'fs/promises';
import { join } from 'path';

import { read } from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';

import makeAnchorsOpenNewTab from '../../lib/makeAnchorsOpenNewTab';
import Footer from '../../components/shared/Footer';
import ArticleProgressBar from '../../components/shared/ArticleProgressBar';

function Post({ postData, postContent }) {
	useEffect(() => {
		makeAnchorsOpenNewTab('#article-content');
	}, []);

	useEffect(() => {
		const bar = document.querySelector('#progressbar');

		function setProgressBarWidth() {
			const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
			const height =
				document.documentElement.scrollHeight - document.documentElement.clientHeight;
			const scrolled = (winScroll / height) * 100;

			bar.style.width = scrolled + '%';
		}

		const progressEventListener = document.addEventListener('scroll', setProgressBarWidth);

		return document.removeEventListener('scroll', progressEventListener);
	}, []);

	return (
		<>
			<Head>
				<title>kp-blog</title>
				<link rel='icon' href='/favicon.png' />
			</Head>
			<ArticleProgressBar />

			<BlogArticleHero
				articleDetails={{ title: postData.title, author: postData.author, date: postData.date }}
			/>

			<section className=' bg-main-light lg:px-0 lg:pt-20 lg:pb-32 px-4 pt-16 pb-24'>
				<div className=' container max-w-3xl'>
					<div id='article-content' className='max-w-3xl prose prose-lg text-gray-100'>
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
