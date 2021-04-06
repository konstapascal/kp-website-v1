import Head from 'next/head';
import React from 'react';
import BlogHero from '../../components/kp-blog/BlogHero';
import BlogPostList from '../../components/kp-blog/BlogPostList';

function Blog() {
	return (
		<>
			<Head>
				<title>kp-blog</title>
				<link rel='icon' href='/favicon.png' />
			</Head>
			<BlogHero />
			<BlogPostList />
		</>
	);
}

export default Blog;
