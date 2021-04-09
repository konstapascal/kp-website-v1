import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Hero() {
	return (
		<section>
			<div
				className='relative flex items-center justify-center'
				style={{ minHeight: '40vh' }}>
				<Image
					className='absolute'
					src='/hero-forest.jpg'
					layout='fill'
					objectFit='cover'
					objectPosition='center'
				/>
				<span className='opacity-10 absolute w-full h-full bg-green-900' />
				<nav className='md:p-6 lg:p-8 absolute inset-x-0 top-0 flex items-center justify-between p-4'>
					<Link href='/blog'>
						<a className='md:text-2xl lg:text-3xl bg-opacity-20 px-4 py-2 text-xl font-bold tracking-wide text-green-400 bg-black'>
							KP-BLOG
						</a>
					</Link>
					<Link href='/'>
						<a className='md:text-md lg:text-lg hover:text bg-opacity-20 transform-gpu hover:scale-105 px-4 py-2 text-sm font-semibold tracking-wider text-gray-200 transition duration-100 ease-in bg-black border-2 border-green-400 rounded-sm'>
							KP-WEBSITE
						</a>
					</Link>
				</nav>
				<div className='top-1/4 sm:top-1/3 bg-opacity-20 container absolute min-w-full px-6 py-6 text-center bg-black'>
					<p className='md:text-4xl lg:text-5xl text-3xl font-semibold text-green-400'>
						Welcome to my blog!
					</p>
					<p className='text-md md:text-lg lg:text-xl lg:mt-6 mt-4 text-gray-200'>
						Here you can expect weekly articles on Javascript, tailored
						for both begginers and advanced!
					</p>
				</div>
			</div>
		</section>
	);
}
export default Hero;
