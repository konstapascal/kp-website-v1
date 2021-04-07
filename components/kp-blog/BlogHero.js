import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Hero() {
	return (
		<section>
			<div
				className='relative flex items-center justify-center'
				style={{ minHeight: '50vh' }}>
				<Image
					className='absolute'
					src='/blog-hero-2.jpg'
					layout='fill'
					objectFit='cover'
				/>
				<span className='absolute w-full h-full bg-black opacity-50' />
				<nav className='md:p-6 lg:p-8 absolute inset-x-0 top-0 flex items-center justify-between p-4'>
					<Link href='/blog'>
						<a className='md:text-2xl lg:text-3xl text-xl font-bold text-green-400'>
							KP-BLOG
						</a>
					</Link>
					<Link href='/'>
						<a className='text-md md:text-lg lg:text-xl hover:bg-green-400 hover:text-gray-900 px-4 py-2 text-gray-300 transition duration-100 ease-in border-2 border-green-400 rounded-sm'>
							Home
						</a>
					</Link>
				</nav>
				<div className='top-1/3 md:p-10 container absolute min-w-full p-2 text-center text-gray-300 bg-black bg-opacity-50'>
					<p className='md:text-4xl lg:text-5xl text-3xl font-semibold text-green-400'>
						Welcome to my blog!
					</p>
					<p className='lg:mt-6 text-md md:text-lg mt-4 text-gray-300'>
						Here you can expect weekly articles on Javascript, tailored
						for both begginers and advanced!
					</p>
				</div>
			</div>
		</section>
	);
}

export default Hero;
