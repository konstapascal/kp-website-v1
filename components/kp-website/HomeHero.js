import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Link as ScrollLink } from 'react-scroll';
import { WindupChildren, Pace } from 'windups';

import fadeIn from '../../lib/fadeIn';
import blink from '../../lib/blink';

function Hero() {
	useEffect(() => {
		const head = document.querySelector('#heading');
		const desc = document.querySelector('#description');
		const links = document.querySelector('#links');
		const down = document.querySelector('#scroll-down-arrow');

		blink(530, 750);

		fadeIn(head, 750);
		fadeIn(desc, 1000);
		fadeIn(links, 1500);
		fadeIn(down, 2000);
	}, []);

	return (
		<section>
			<div className='bg-main-dark relative flex items-center justify-center min-h-screen overflow-hidden border-b-2 border-green-400'>
				{/* ---------- LOGO AND BLOG BUTTON / NAV ---------- */}
				<nav className='md:p-6 lg:p-8 absolute inset-x-0 top-0 flex items-center justify-between p-4'>
					<Link href='/'>
						<a className=' lg:text-3xl text-2xl rounded-[0.2rem] font-bold tracking-wide text-green-400 px-4 py-2 '>
							KP-WEBSITE
						</a>
					</Link>
					<Link href='/blog'>
						<a className='text-sm lg:text-lg hover:underline px-4 py-2 font-semibold tracking-wider text-gray-100  border-2 border-green-400 rounded-[0.2rem]'>
							BLOG
						</a>
					</Link>
				</nav>

				{/* ---------- BACKGROUND WATERMARK ---------- */}
				<div
					id='watermark'
					className=' text-main-light transform -rotate-12 lg:rotate-0 whitespace-nowrap top-[27.5%] sm:top-[25%] md:top-[22.5%] absolute text-8xl sm:text-9xl md:text-[10rem] font-extrabold lg:top-[20%] lg:text-[15rem] text-center opacity-50 select-none'>
					<WindupChildren>
						<Pace ms={25}>
							<p>FRONT & BACK</p>
							<p>DEVELOPER</p>
						</Pace>
					</WindupChildren>
				</div>

				{/* ---------- HEADINGS, DESCRIPTION, LINKS ---------- */}
				<div className=' lg:max-w-3xl lg:text-left top-1/4 container absolute px-4 text-center'>
					<div
						className=' transition-opacity duration-1000 opacity-0'
						id='heading'>
						<h1 className='lg:text-2xl text-xl font-semibold text-gray-100'>
							Hello, this is..
						</h1>
						<p className='lg:text-5xl text-4xl font-semibold text-green-400'>
							Konstantinos Pasca
							<span
								id='blinking-letter'
								className='lg:text-5xl text-4xl font-semibold text-green-400 duration-75 opacity-0'>
								l
							</span>
						</p>
					</div>

					<p
						id='description'
						className='text-md md:text-lg lg:text-xl mb-14 mt-6 text-gray-100 transition-opacity duration-1000 opacity-0'>
						I am a new developer always excited to learn! Most interested
						in web development with a passion for both the{' '}
						<span className=' font-bold text-green-400'>frontend</span>{' '}
						and the{' '}
						<span className='font-bold text-green-400'>backend!</span>{' '}
					</p>

					{/* RESUME AND LINKS */}
					<div
						className=' lg:justify-start flex items-center justify-center transition-opacity duration-1000 opacity-0'
						id='links'>
						<a
							className='text-sm lg:text-lg px-4 py-2 font-semibold tracking-wider text-gray-100  border-2 border-green-400 rounded-[0.2rem]'
							href='/kp-resume.pdf'
							download>
							RESUME
						</a>

						<a
							className='flex items-center ml-8'
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
							className='flex items-center ml-2'
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
					className='lg:block bottom-2 absolute hidden transition-opacity duration-1000 opacity-0 cursor-pointer'>
					<ScrollLink
						to='about-section'
						smooth={true}
						offset={-275}
						duration={1000}>
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
