import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Hero() {
	return (
		<section>
			<div
				className='relative flex items-center justify-center'
				style={{ minHeight: '100vh' }}>
				<Image src='/hero.jpg' layout='fill' objectFit='cover' />
				<span className='absolute w-full h-full bg-black opacity-70 ' />

				<Link href='/'>
					<a className='text-2xl absolute font-bold text-green-400 top-0 left-0 m-4'>
						KP-WEBSITE
					</a>
				</Link>

				<Link href='/blog'>
					<a className='text-lg absolute text-gray-300 top-0 right-0 m-4 py-2 px-4 border-2 border-green-400 hover:bg-green-400 hover:text-gray-900  transition ease-in duration-150'>
						Blog
					</a>
				</Link>

				<div className='container absolute'>
					<div className='items-center flex flex-wrap'>
						<div className='w-full lg:w-6/12 px-4 ml-auto mr-auto text-center'>
							<div>
								<h1 className='text-2xl text-gray-300 '>
									Hello, this is{' '}
								</h1>
								<p className='text-green-400 font-semibold text-4xl'>
									Konstantinos Pascal
								</p>
								<p className='mt-8 text-md text-gray-400'>
									Lorem ipsum, dolor sit amet consectetur adipisicing
									elit. Animi impedit sint voluptatem eaque provident
									incidunt libero pariatur, labore porro facilis veniam
									nihil laboriosam temporibus vitae.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
