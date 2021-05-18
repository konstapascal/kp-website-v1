import Head from 'next/head';

import BlogHero from '../../components/kp-blog/BlogHero';
import BlogPost from '../../components/kp-blog/BlogPost';
import Link from 'next/link';

import { readdir } from 'fs/promises';
import path from 'path';

import { read } from 'gray-matter';
import Footer from '../../components/shared/Footer';

function Blog({ filesMetadataArr }) {
	return (
		<>
			<Head>
				<title>kp-blog</title>
				<link rel='icon' href='/favicon.png' />
			</Head>

			<BlogHero />

			<section className=' bg-main-light lg:px-0 lg:py-32 px-4 py-24'>
				<div className=' lg:max-w-3xl container text-gray-100'>
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
					<div className='mt-16 text-center'>
						<Link href={`/`}>
							<a className=' hover:underline hover:text-green-400 text-2xl font-semibold cursor-pointer'>
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

	posts.forEach(post => {
		const postMetadata = read(`${postsDirectory}\\${post}`);
		tempArr.push(postMetadata);
	});

	const filesMetadataArr = tempArr
		.map(post => {
			return { ...post.data };
		})
		// sort by dat
		.sort((a, b) => {
			return new Date(b.date) - new Date(a.date);
		});

	return { props: { filesMetadataArr } };
}
export default Blog;
