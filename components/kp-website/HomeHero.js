import React, { useEffect } from 'react';
import Image from 'next/image';

import { Link as ScrollLink } from 'react-scroll';
import { WindupChildren, Pace } from 'windups';

import Logo from '../shared/Logo';
import Button from '../shared/Button';
import fadeInElement from '../../lib/fadeInElement';

function Hero() {
	useEffect(() => {
		const head = document.querySelector('#heading');
		const desc = document.querySelector('#description');
		const links = document.querySelector('#links');
		const down = document.querySelector('#scroll-down-arrow');
		const letter = document.querySelector('#blinking-letter');

		let blinkingInterval;

		setTimeout(() => {
			let blink = false;

			blinkingInterval = setInterval(() => {
				if (blink) {
					letter.classList.replace('opacity-0', 'opacity-100');
					blink = false;
				} else {
					letter.classList.replace('opacity-100', 'opacity-0');
					blink = true;
				}
			}, 530);
		}, 500);

		fadeInElement(head, 750);
		fadeInElement(desc, 1000);
		fadeInElement(links, 1250);
		fadeInElement(down, 1500);

		return () => clearInterval(blinkingInterval);
	}, []);

	return (
		<section>
			<div className='bg-main-dark relative flex items-center justify-center min-h-screen overflow-hidden border-b-2 border-green-400'>
				{/* ---------- LOGO AND BLOG BUTTON / NAV ---------- */}
				<nav className='md:pt-6 md:px-6 lg:pt-8 lg:px-8 absolute inset-x-0 top-0 flex items-center justify-between px-4 pt-4'>
					<Logo linkHref={'/'} content={'KP-WEBSITE'} />
					<Button linkHref={'/blog'} content={'BLOG'} />
				</nav>

				{/* ---------- BACKGROUND WATERMARK ---------- */}
				<div
					id='watermark'
					className=' text-main-light transform -rotate-12 lg:rotate-0 whitespace-nowrap top-[27.5%] sm:top-[25%] md:top-[22.5%] absolute text-8xl sm:text-9xl md:text-[10rem] font-extrabold lg:top-[20%] lg:text-[15rem] text-center opacity-50 select-none'>
					<WindupChildren>
						<Pace ms={25}>
							<p>FULL STACK</p>
							<p>DEVELOPER</p>
						</Pace>
					</WindupChildren>
				</div>

				{/* ---------- HEADINGS, DESCRIPTION, LINKS ---------- */}
				<div className=' lg:max-w-3xl lg:text-left top-1/4 container absolute px-4 text-center'>
					<div className=' transition-opacity duration-1000 opacity-0' id='heading'>
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
						className='text-md md:text-lg lg:text-xl mt-6 mb-12 text-gray-100 transition-opacity duration-1000 opacity-0'>
						I am a new developer always excited to learn! Most interested in web development
						with a passion for both the{' '}
						<span className=' font-bold text-green-400'>frontend</span> and the{' '}
						<span className='font-bold text-green-400'>backend!</span>{' '}
					</p>

					{/* RESUME AND LINKS */}
					<div
						className=' lg:justify-start sm:flex-row sm:gap-10 flex flex-col-reverse items-center justify-center gap-8 transition-opacity duration-1000 opacity-0'
						id='links'>
						<a
							className='text-sm hover:scale-105 transform-gpu duration-200  lg:text-lg flex items-center px-4 py-2  font-semibold tracking-wider text-gray-100  border-2 border-green-400 rounded-[0.2rem]'
							href='/files/kp-resume.pdf'
							download>
							<Image src='/svg/file-download-solid.svg' width={20} height={20} />
							<span className=' ml-2'>RESUME</span>
						</a>

						<div className=' flex items-center gap-2'>
							<a
								className=' flex items-center'
								href='https://github.com/konstapascal'
								target='_blank'
								rel='noopener noreferrer'>
								<Image src='/svg/github-square-brands.svg' width={40} height={40} />
							</a>
							<a
								className=' flex items-center'
								href='https://duckduckgo.com/'
								target='_blank'
								rel='noopener noreferrer'>
								<Image src='/svg/linkedin-brands.svg' width={40} height={40} />
							</a>
						</div>
					</div>
				</div>

				{/* ---------- SCROLL DOWN ARROW ---------- */}
				<div
					id='scroll-down-arrow'
					className='lg:block bottom-2 absolute hidden transition-opacity duration-1000 opacity-0 cursor-pointer'>
					<ScrollLink to='about-section' smooth={true} duration={1000}>
						<Image src='/svg/chevron-down-solid.svg' width={40} height={40} />
					</ScrollLink>
				</div>
			</div>
		</section>
	);
}
export default Hero;
