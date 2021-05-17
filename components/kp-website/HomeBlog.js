import React from 'react';
import Link from 'next/link';

function Blog() {
	return (
		<section className=' bg-main-light pt-32'>
			<div className=' lg:max-w-4xl container px-4 text-center text-gray-100'>
				<p className='font-semibold text-gray-100'>Check out my</p>

				<Link href='/blog'>
					<h3 className='lg:text-5xl inline-block text-4xl font-semibold text-green-400 uppercase cursor-pointer'>
						Articles
					</h3>
				</Link>

				<p className='text-md md:text-lg lg:text-xl mt-10 leading-relaxed text-gray-100'>
					I also write about Javascript and web development, check out my
					<Link href='/blog'>
						<span className='font-semibold text-green-400 cursor-pointer'>
							{' '}
							blog!
						</span>
					</Link>
				</p>
			</div>
		</section>
	);
}
export default Blog;
