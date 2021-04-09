import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Link as ScrollLink } from 'react-scroll';

function Hero() {
	return (
		<section>
			<div className='relative flex items-center justify-center min-h-screen'>
				{/* ---------- BACKGROUND AND FILTER ---------- */}
				<Image
					src='/hero-forest.jpg'
					layout='fill'
					objectFit='cover'
					objectPosition='bottom'
				/>
				<span className='opacity-10 absolute w-full h-full bg-green-900' />

				{/* ---------- LOGO AND BLOG BUTTON / NAV ---------- */}
				<nav className='md:p-6 lg:p-8 absolute inset-x-0 top-0 flex items-center justify-between p-4'>
					<Link href='/'>
						<a className='md:text-2xl lg:text-3xl text-xl rounded-[0.2rem] font-bold tracking-wide text-green-400 bg-black px-4 py-2 bg-opacity-20'>
							KP-WEBSITE
						</a>
					</Link>
					<Link href='/blog'>
						<a className='md:text-md lg:text-lg hover:text px-4 bg-black bg-opacity-20 py-2 text-sm font-semibold tracking-wider text-gray-200 transition duration-100 ease-in border-2 border-green-400 rounded-[0.2rem] transform-gpu hover:scale-105'>
							KP-BLOG
						</a>
					</Link>
				</nav>

				{/* ---------- HEADINGS, DESCRIPTION, LINKS ---------- */}
				<div
					className='bg-opacity-20 container absolute min-w-full px-6 py-10 bg-black'
					style={{ top: '30%' }}>
					<div className='sm:w-2/3 md:w-7/12 lg:w-1/2 xl:w-5/12 m-auto text-center'>
						<h1 className='md:text-xl lg:text-2xl text-lg font-semibold text-gray-100'>
							Hello, this is..{' '}
						</h1>
						<p className='md:text-4xl lg:text-5xl text-3xl font-semibold text-green-400'>
							Konstantinos Pascal
						</p>

						<p className='lg:my-6 text-md md:text-lg lg:text-xl my-4 text-gray-200'>
							I am a new developer always excited to learn! Most
							interested in web development with a passion for both the
							frontend and the backend!
						</p>
						<div className='flex justify-center'>
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
				</div>

				{/* ---------- SCROLL DOWN ARROW ---------- */}
				<div className='lg:block bottom-4 animate-bounce absolute hidden cursor-pointer'>
					<ScrollLink to='about-section' smooth={true} duration={1000}>
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
