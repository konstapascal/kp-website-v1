import { readdir } from 'fs/promises';
import { read as gmRead } from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Link from 'next/link';
import { join } from 'path';
import prism from 'prismjs';
import React, { useEffect } from 'react';

import BlogArticleHead from '../../components/kp-blog/BlogArticleHead';
import BlogArticleHero from '../../components/kp-blog/BlogArticleHero';
import ArticleProgressBar from '../../components/shared/ArticleProgressBar';
import Footer from '../../components/shared/Footer';
import makeAnchorsOpenNewTab from '../../lib/makeAnchorsOpenNewTab';

function Post({
	postData: { title, excerpt, author, labels, date, last_edited, read_time },
	postContent
}) {
	let BLOG_URL;

	// make all a tags open new tab
	useEffect(() => {
		makeAnchorsOpenNewTab('#article-content');
		prism.highlightAll();

		BLOG_URL = window.location.href;
	}, []);

	// event listener update progress bar at the top
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

		return () => document.removeEventListener('scroll', progressEventListener);
	}, []);

	return (
		<>
			<BlogArticleHead
				title={title}
				excerpt={excerpt}
				author={author}
				labels={labels}
				url={BLOG_URL}
			/>

			<ArticleProgressBar />
			<BlogArticleHero
				articleDetails={{
					last_edited,
					read_time,
					title,
					author,
					date,
					labels
				}}
			/>

			<section className=' bg-main-light lg:px-0 lg:pt-20 lg:pb-32 px-4 pt-16 pb-24'>
				<div className=' container max-w-3xl'>
					<div id='article-content' className='max-w-3xl prose prose-lg text-gray-100'>
						<MDXRemote {...postContent} />
					</div>
					<div className=' mt-16 text-center'>
						<Link href={`/blog`}>
							<a
								title='Go back to the main blog.'
								className=' hover:underline hover:text-green-400 text-2xl font-semibold text-gray-100 cursor-pointer'>
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
	const postsDirectory = join(process.cwd(), 'data/blog-posts-data');
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
	const postsDirectory = join(process.cwd(), 'data/blog-posts-data');
	const filePath = join(postsDirectory, params.blogArticle + '.md');

	const postData = gmRead(filePath);
	const postContent = await serialize(postData.content);

	return {
		props: {
			postData: postData.data,
			postContent
		}
	};
}

export default Post;
