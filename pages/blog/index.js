import { useEffect } from 'react';

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

function Blog({ filesMetadataArr }) {
	const labels = filesMetadataArr.map(file => file.labels).flat();
	const uniqueLabels = [...new Set(labels)];

	let url;

	useEffect(() => {
		url = window.location.href;
	}, []);

	return (
		<>
			<BlogHead uniqueLabels={uniqueLabels} url={url} />
			<BlogHero />

			<section className=' bg-main-light lg:px-0 lg:pt-24 lg:pb-32 px-4 pt-20 pb-24'>
				<div className=' lg:max-w-3xl container text-gray-100'>
					<BlogSearchBar />
					<div className='mt-12'>
						{filesMetadataArr.map(file => {
							return (
								<BlogPost
									key={file.title}
									title={file.title}
									excerpt={file.excerpt}
									date={new Date(file.date).toUTCString().slice(5, 16)}
									author={file.author}
									labels={file.labels}
									url={file.url}
								/>
							);
						})}
					</div>
					<div className='mt-16 text-center'>
						<Link href={`/`}>
							<a
								title='Go back to the main website, konstapascal.dev'
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
		// sort by
		.sort((a, b) => {
			return new Date(b.date) - new Date(a.date);
		});

	return { props: { filesMetadataArr } };
}
export default Blog;
