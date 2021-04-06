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
					src='/hero.jpg'
					layout='fill'
					objectFit='cover'
				/>
				<span className='w-full h-full absolute opacity-70 bg-black'></span>
				<nav className='absolute flex justify-between items-center p-4 md:p-6 lg:p-8 top-0 inset-x-0'>
					<Link href='/blog'>
						<a className='text-xl md:text-2xl lg:text-3xl font-bold text-green-400'>
							KP-BLOG
						</a>
					</Link>
					<Link href='/'>
						<a className='text-md md:text-lg lg:text-xl  text-gray-300  border-2 rounded-sm px-4 py-2 border-green-400 hover:bg-green-400 hover:text-gray-900  transition ease-in duration-100'>
							Home
						</a>
					</Link>
				</nav>
				<div className='absolute container text-center text-gray-300'>
					<p className='text-green-400 font-semibold text-3xl md:text-4xl lg:text-5xl'>
						Welcome to my blog!
					</p>
					<p className='mt-4 lg:mt-6 text-md md:text-lg text-gray-300'>
						Here you can expect weekly articles on Javascript, tailored
						for both begginers and advanced!
					</p>
				</div>
			</div>
		</section>
	);
}

export default Hero;
