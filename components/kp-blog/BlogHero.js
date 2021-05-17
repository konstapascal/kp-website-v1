import React from 'react';
import Link from 'next/link';

function Hero() {
	return (
		<section>
			<div className='bg-main-dark border-green-4 h-72 relative flex items-center justify-center border-b-2 border-green-400'>
				<nav className='md:p-6 lg:p-8 absolute inset-x-0 top-0 flex items-center justify-between p-4'>
					<Link href='/blog'>
						<a className='lg:text-3xl text-2xl rounded-[0.2rem] font-bold tracking-wide text-green-400 px-4 py-2'>
							KP-BLOG
						</a>
					</Link>
					<Link href='/'>
						<a className='lg:text-md hover:underline px-4  py-2 font-semibold tracking-wider text-gray-100  border-2 border-green-400 rounded-[0.2rem]'>
							WEBSITE
						</a>
					</Link>
				</nav>
				<div className=' lg:max-w-4xl top-[37.5%] lg:top-[30%] container absolute text-center'>
					<p className=' text-4xl font-semibold text-green-400'>
						Welcome to my blog!
					</p>
					<p className='text-md md:text-lg lg:text-xl lg:mt-6 lg:max-w-3xl px-4 mx-auto mt-4 text-gray-100'>
						Here you can expect weekly articles on Javascript, tailored
						for both begginers and advanced!
					</p>
				</div>
			</div>
		</section>
	);
}
export default Hero;
