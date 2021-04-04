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

				<div className='absolute flex justify-between items-center p-4 top-0 inset-x-0'>
					<Link href='/'>
						<a className='text-xl font-bold text-green-400'>KP-WEBSITE</a>
					</Link>
					<Link href='/blog'>
						<a className='text-md  text-gray-300  border-2 px-4 py-2 border-green-400 hover:bg-green-400 hover:text-gray-900  transition ease-in duration-150'>
							Blog
						</a>
					</Link>
				</div>

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
									I am a new developer always eager to learn something
									new! Most interested in web development with a
									passion for both the frontend and the backend!
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
