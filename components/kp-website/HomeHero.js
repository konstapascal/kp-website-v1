import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Link as ScrollLink } from 'react-scroll';
import { WindupChildren, Pause, Pace } from 'windups';

import fadeIn from '../../lib/fadeIn';

function Hero() {
	useEffect(() => {
		fadeIn('#description', 2500);
		fadeIn('#links', 3000);
	}, []);

	return (
		<section>
			<div className='bg-main-dark relative flex items-center justify-center min-h-screen border-b-2 border-green-400'>
				{/* ---------- LOGO AND BLOG BUTTON / NAV ---------- */}
				<nav className='md:p-6 lg:p-8 absolute inset-x-0 top-0 flex items-center justify-between p-4'>
					<Link href='/'>
						<a className='md:text-2xl lg:text-3xl text-xl rounded-[0.2rem] font-bold tracking-wide text-green-400 px-4 py-2 '>
							KP-WEBSITE
						</a>
					</Link>
					<Link href='/blog'>
						<a className='md:text-md lg:text-lg hover:underline px-4  py-2 text-sm font-semibold tracking-wider text-gray-100  border-2 border-green-400 rounded-[0.2rem]'>
							KP-BLOG
						</a>
					</Link>
				</nav>

				{/* ---------- HEADINGS, DESCRIPTION, LINKS ---------- */}
				<div
					className=' lg:max-w-4xl container absolute px-4 text-center'
					style={{ top: '27.5%' }}>
					<WindupChildren>
						<Pace ms={50}>
							<div className='inline-block text-left'>
								<h1 className='lg:text-2xl text-xl font-semibold text-gray-100'>
									{'Hello, this is..'}
								</h1>
								<p className='lg:text-5xl text-4xl font-semibold text-green-400'>
									{'Konstantinos Pascal'}
								</p>
							</div>
						</Pace>
						<Pause ms={750} />
					</WindupChildren>
					<p
						id='description'
						className='lg:mt-8 lg:mb-10 text-md md:text-lg lg:text-xl mt-6 mb-10 text-gray-100 transition-opacity duration-1000 opacity-0'>
						I am a new developer always excited to learn! Most interested
						in web development with a passion for both the frontend and
						the backend!
					</p>
					<div
						className=' flex justify-center transition-opacity duration-1000 opacity-0'
						id='links'>
						<a
							className=' mr-1 cursor-pointer'
							href='https://github.com/konstapascal'
							target='_blank'
							rel='noopener noreferrer'>
							<Image
								src='/svg/github-square-brands.svg'
								width={40}
								height={40}
							/>
						</a>
						<a
							className='ml-1 cursor-pointer'
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
