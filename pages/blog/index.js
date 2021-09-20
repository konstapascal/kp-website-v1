import { useEffect, useState } from 'react';

import BlogHead from '../../components/kp-blog/BlogHead';
import BlogHero from '../../components/kp-blog/BlogHero';

import path from 'path';
import { readdir } from 'fs/promises';
import { platform } from 'os';

import { read } from 'gray-matter';
import BlogArticles from '../../components/kp-blog/BlogArticles';
import filterBlogPostsBy from '../../lib/filterBlogPostsBy';

function Blog({ filesMetadataArr }) {
	const [blogPosts, setBlogPosts] = useState(filesMetadataArr);
	const [filteredPosts, setFilteredPosts] = useState([]);
	const [search, setSearch] = useState('');

	const [filterBy, setFilterBy] = useState({ byTitle: false, byLabel: false, byAuthor: false });

	const labels = filesMetadataArr.map(file => file.labels).flat();
	const uniqueLabels = [...new Set(labels)];

	let BLOG_URL;

	useEffect(() => {
		BLOG_URL = window.location.href;
	}, []);

	useEffect(() => {
		if (search === '') return setFilteredPosts([]);

		if (filterBy.byTitle) return setFilteredPosts(filterBlogPostsBy('title', blogPosts, search));
		if (filterBy.byLabel) return setFilteredPosts(filterBlogPostsBy('label', blogPosts, search));
		if (filterBy.byAuthor)
			return setFilteredPosts(filterBlogPostsBy('author', blogPosts, search));

		setFilteredPosts(filterBlogPostsBy('title', blogPosts, search));
	}, [search, filterBy]);

	return (
		<>
			<BlogHead uniqueLabels={uniqueLabels} url={BLOG_URL} />

			<BlogHero />
			<BlogArticles
				blogPosts={blogPosts}
				filteredPosts={filteredPosts}
				search={search}
				setSearch={setSearch}
				filterBy={filterBy}
				setFilterBy={setFilterBy}
			/>
		</>
	);
}
export async function getStaticProps() {
	const postsDirectory = path.join(process.cwd(), 'data/blog_posts_data');
	const posts = await readdir(postsDirectory);

	const tempArr = [];

	const os = platform();
	posts.forEach(post => {
		const postMetadata = read(`${postsDirectory}${os === 'win32' ? '\\' : '/'}${post}`);
		tempArr.push(postMetadata);
	});

	const filesMetadataArr = tempArr
		.map(post => {
			return { ...post.data };
		})
		.sort((a, b) => {
			return new Date(b.date) - new Date(a.date);
		});

	return { props: { filesMetadataArr } };
}
export default Blog;
