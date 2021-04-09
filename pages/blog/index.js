import Head from 'next/head';
import React from 'react';
import BlogHero from '../../components/kp-blog/BlogHero';
import BlogPosts from '../../components/kp-blog/BlogPosts';
import Footer from '../../components/shared/Footer';

function Blog() {
	return (
		<>
			<Head>
				<title>kp-blog</title>
				<link rel='icon' href='/favicon.png' />
			</Head>
			<BlogHero />
			<BlogPosts />
			<Footer />
		</>
	);
}

export default Blog;
