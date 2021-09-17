import { useEffect, useState } from 'react';

import BlogHead from '../../components/kp-blog/BlogHead';
import BlogHero from '../../components/kp-blog/BlogHero';
import BlogSearchBar from '../../components/kp-blog/BlogSearchBar';
import BlogPost from '../../components/kp-blog/BlogPost';
import Footer from '../../components/shared/Footer';

import Link from 'next/link';

import path from 'path';
import { readdir } from 'fs/promises';
import { platform } from 'os';

import { read } from 'gray-matter';
import NoArticleResults from '../../components/kp-blog/NoArticleResults';

function Blog({ filesMetadataArr }) {
	const [blogPosts, setBlogPosts] = useState(filesMetadataArr);
	const [filteredPosts, setFilteredPosts] = useState([]);
	const [search, setSearch] = useState('');

	const labels = filesMetadataArr.map(file => file.labels).flat();
	const uniqueLabels = [...new Set(labels)];

	let BLOG_URL;

	useEffect(() => {
		BLOG_URL = window.location.href;
	}, []);

	useEffect(() => {
		if (search === '') return setFilteredPosts([]);

		const filtered = [...blogPosts].filter(post => {
			return (
				post.labels.includes(search.toUpperCase()) ||
				post.title.toLowerCase().includes(search.toLowerCase())
			);
		});

		setFilteredPosts(filtered);
	}, [search]);

	return (
		<>
			<BlogHead uniqueLabels={uniqueLabels} url={BLOG_URL} />
			<BlogHero />

			<section className=' bg-main-light lg:px-0 lg:pt-24 lg:pb-32 px-4 pt-20 pb-24'>
				<div className=' lg:max-w-3xl container text-gray-100'>
					<BlogSearchBar search={search} setSearch={setSearch} />
					<div className='mt-10'>
						{search === '' &&
							blogPosts.map(post => {
								return (
									<BlogPost
										key={post.title}
										title={post.title}
										excerpt={post.excerpt}
										date={new Date(post.date).toUTCString().slice(5, 16)}
										author={post.author}
										labels={post.labels}
										url={post.url}
									/>
								);
							})}

						{search !== '' &&
							filteredPosts.length !== 0 &&
							filteredPosts.map(post => {
								return (
									<BlogPost
										key={post.title}
										title={post.title}
										excerpt={post.excerpt}
										date={new Date(post.date).toUTCString().slice(5, 16)}
										author={post.author}
										labels={post.labels}
										url={post.url}
									/>
								);
							})}

						{search !== '' && filteredPosts.length === 0 && (
							<NoArticleResults setSearch={setSearch} />
						)}
					</div>
					<div className='mt-16 text-center'>
						<Link href={`/`}>
							<a
								title='Go back to the main website'
								className=' hover:underline hover:text-green-400 text-2xl font-semibold cursor-pointer'>
								Back to Website{' '}
							</a>
						</Link>
					</div>
				</div>
			</section>

			<Footer />
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
