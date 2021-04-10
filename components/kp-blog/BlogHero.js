import React from 'react';
import Link from 'next/link';

function Hero() {
	return (
		<section>
			<div
				className='relative flex items-center justify-center bg-[#1E1F1C] border-b-2 border-green-400'
				style={{ minHeight: '40vh' }}>
				<nav className='md:p-6 lg:p-8 absolute inset-x-0 top-0 flex items-center justify-between p-4'>
					<Link href='/blog'>
						<a className='md:text-2xl lg:text-3xl px-4 py-2 text-xl font-bold tracking-wide text-green-400'>
							KP-BLOG
						</a>
					</Link>
					<Link href='/'>
						<a className='md:text-md lg:text-lg hover:underline px-4  py-2 text-sm font-semibold tracking-wider text-gray-200  border-2 border-green-400 rounded-[0.2rem]'>
							KP-WEBSITE
						</a>
					</Link>
				</nav>
				<div className='top-1/4 sm:top-1/3 container absolute min-w-full px-6 py-6 text-center'>
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
