import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Link as ScrollLink } from 'react-scroll';

function Hero() {
	return (
		<section>
			<div className='relative flex items-center justify-center min-h-screen'>
				{/* ---------- BACKGROUND AND FILTER ---------- */}
				<Image src='/hero.jpg' layout='fill' objectFit='cover' />
				<span className='absolute w-full h-full bg-black opacity-50' />

				{/* ---------- LOGO AND BLOG BUTTON ---------- */}
				<nav className='md:p-6 lg:p-8 absolute inset-x-0 top-0 flex items-center justify-between p-4'>
					<Link href='/'>
						<a className='md:text-2xl lg:text-3xl text-xl font-bold text-green-400'>
							KP-WEBSITE
						</a>
					</Link>
					<Link href='/blog'>
						<a className='text-md md:text-lg lg:text-xl hover:bg-green-400 hover:text-gray-900 px-4 py-2 text-gray-300 transition duration-100 ease-in border-2 border-green-400 rounded-sm'>
							Blog
						</a>
					</Link>
				</nav>

				<div
					className='container absolute min-w-full p-10 bg-black bg-opacity-50'
					style={{ top: '30%' }}
					id='hero-description-container'>
					<div className='md:w-7/12 lg:w-6/12 w-11/12 m-auto text-center'>
						<h1 className='md:text-2xl lg:text-3xl text-xl text-gray-200'>
							Hello, this is{' '}
						</h1>
						<p className='md:text-4xl lg:text-5xl text-3xl font-semibold text-green-400'>
							Konstantinos Pascal
						</p>
						<p className='lg:mt-6 text-md md:text-lg lg:text-xl mt-4 text-gray-300'>
							I am a new developer always excited to learn! Most
							interested in web development with a passion for both the
							frontend and the backend!
						</p>
					</div>
					<div className='lg:mt-6 flex justify-center mt-4'>
						<div className='mr-1 cursor-pointer'>
							<a
								href='https://github.com/konstapascal'
								target='_blank'
								rel='noopener noreferrer'>
								<Image
									src='/svg/github-square-brands.svg'
									width={40}
									height={40}
								/>
							</a>
						</div>
						<div className='ml-1 cursor-pointer'>
							<a
								href='https://duckduckgo.com/'
								target='_blank'
								rel='noopener noreferrer'>
								<Image
									src='/svg/linkedin-brands.svg'
									width={40}
									height={40}
								/>
							</a>
						</div>
					</div>
				</div>
				<div className='lg:block bottom-4 animate-bounce absolute hidden cursor-pointer'>
					<ScrollLink
						to='about-section'
						smooth={true}
						duration={1000}
						offset={-90}>
						<Image
							src='/svg/chevron-down-solid.svg'
							width={40}
							height={40}
						/>
					</ScrollLink>
				</div>
			</div>
		</section>
	);
}
export default Hero;