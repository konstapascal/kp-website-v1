import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Link as ScrollLink } from 'react-scroll';
import { WindupChildren, Pause, Pace } from 'windups';

import fadeIn from '../../lib/fadeIn';
import blink from '../../lib/blink';

function Hero() {
	useEffect(() => {
		const desc = document.querySelector('#description');
		const links = document.querySelector('#links');
		const down = document.querySelector('#scroll-down-arrow');
		const letter = document.querySelector('#blinking-letter');

		fadeIn(desc, 1250);
		fadeIn(links, 1750);
		fadeIn(down, 2250);

		setTimeout(() => blink(letter, 530), 500);
	}, []);

	return (
		<section>
			<div className='bg-main-dark relative flex items-center justify-center min-h-screen border-b-2 border-green-400'>
				{/* ---------- LOGO AND BLOG BUTTON / NAV ---------- */}
				<nav className='md:p-6 lg:p-8 absolute inset-x-0 top-0 flex items-center justify-between p-4'>
					<Link href='/'>
						<a className=' lg:text-3xl text-2xl rounded-[0.2rem] font-bold tracking-wide text-green-400 px-4 py-2 '>
							KP-WEBSITE
						</a>
					</Link>
					<Link href='/blog'>
						<a className='text-sm lg:text-lg hover:underline px-4  py-2 font-semibold tracking-wider text-gray-100  border-2 border-green-400 rounded-[0.2rem]'>
							BLOG
						</a>
					</Link>
				</nav>

				{/* ---------- HEADINGS, DESCRIPTION, LINKS ---------- */}
				<div className=' lg:max-w-4xl container absolute px-4 top-[27.5%] text-center'>
					<WindupChildren>
						<Pace ms={25}>
							<div className='inline-block text-left'>
								<h1 className='lg:text-2xl text-xl font-semibold text-gray-100'>
									{'Hello, this is..'}
								</h1>
								<p className='lg:text-5xl text-4xl font-semibold text-green-400'>
									{'Konstantinos Pasca'}
								</p>
							</div>
						</Pace>
						<Pause ms={500} />
					</WindupChildren>
					<span
						id='blinking-letter'
						className='lg:text-5xl text-4xl font-semibold text-green-400 duration-75 opacity-0'>
						l
					</span>

					<p
						id='description'
						className='text-md md:text-lg lg:text-xl mt-8 mb-10 text-gray-100 transition-opacity duration-1000 opacity-0'>
						I am a new developer always excited to learn! Most interested
						in web development with a passion for both the{' '}
						<span className=' font-bold text-green-400'>frontend</span>{' '}
						and the{' '}
						<span className='font-bold text-green-400'>backend!</span>{' '}
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
				<div
					id='scroll-down-arrow'
					className='lg:block bottom-6 absolute hidden transition-opacity duration-1000 opacity-0 cursor-pointer'>
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
