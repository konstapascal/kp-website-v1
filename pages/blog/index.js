import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

function Blog() {
	return (
		<section>
			<Head>
				<title>kp-blog</title>
				<link rel='icon' href='/favicon.png' />
			</Head>
			<div
				className='relative flex items-center justify-center'
				style={{ minHeight: '100vh' }}>
				<Image
					className='absolute'
					src='/hero.jpg'
					layout='fill'
					objectFit='cover'
				/>
				<span className='w-full h-full absolute opacity-70 bg-black'></span>
				<Link href='/'>
					<a className='text-3xl absolute font-bold text-green-400 top-0 left-0 p-10'>
						KP-WEBSITE
					</a>
				</Link>
				<div className='container relative mx-auto'>
					<div className='items-center flex flex-wrap'>
						<div className='w-full lg:w-6/12 px-4 ml-auto mr-auto text-center'>
							<div>
								<p className='text-green-400 font-semibold text-5xl'>
									KP-BLOG
								</p>
								<p className='mt-4 text-lg text-gray-400'>
									Welcome to my blog, which is currently in
									development!
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Blog;
