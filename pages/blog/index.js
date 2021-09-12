import Head from 'next/head';

import BlogHero from '../../components/kp-blog/BlogHero';
import BlogPost from '../../components/kp-blog/BlogPost';
import Link from 'next/link';

import { readdir } from 'fs/promises';
import path from 'path';
import { platform } from 'os';

import { read } from 'gray-matter';
import Footer from '../../components/shared/Footer';

function Blog({ filesMetadataArr }) {
	return (
		<>
			<Head>
				<title>kp-blog</title>
				<link rel='icon' href='/favicon.png' />
				<meta
					name='description'
					content='I am Konstantinos Pascal and this is my writing corner on the web. Here you can expect articles on Javascript and other random topics, for both begginers and advanced!'
				/>
			</Head>

			<BlogHero />

			<section className=' bg-main-light lg:px-0 lg:pt-24 lg:pb-32 px-4 pt-20 pb-24'>
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
							<a
								title='Go back to the main website, konstapascal.dev.'
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
		// sort by date
		.sort((a, b) => {
			return new Date(b.date) - new Date(a.date);
		});

	return { props: { filesMetadataArr } };
}
export default Blog;
