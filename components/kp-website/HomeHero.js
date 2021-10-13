import React, { useContext, useEffect } from 'react';

import { Link as ScrollLink } from 'react-scroll';
import { WindupChildren, Pace } from 'windups';

import Button from '../shared/Button';
import fadeInElement from '../../lib/fadeInElement';
import LanguageSelect from '../shared/LanguageSelect';

import LangContext from '../../context/lang-context';
import website from '../../data/website-contents/website-text';

function Hero() {
	const [lang] = useContext(LangContext);
	const { greeting, description, and, blog, watermark } = website[lang].hero;

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
		}, 1500);

		fadeInElement(head, 750);
		fadeInElement(desc, 1000);
		fadeInElement(links, 1250);
		fadeInElement(down, 1500);

		return () => clearInterval(blinkingInterval);
	}, []);

	return (
		<section>
			<div className='bg-main-dark relative flex items-center justify-center min-h-screen overflow-hidden'>
				{/* ---------- LOGO AND BLOG BUTTON / NAV ---------- */}
				<nav className='md:pt-6 md:px-6 lg:pt-8 lg:px-8 absolute inset-x-0 top-0 flex items-center justify-between px-4 pt-4'>
					<LanguageSelect />
					<Button linkTitle={'Link to the blog website'} linkHref={'/blog'} content={blog} />
				</nav>

				{/* ---------- BACKGROUND WATERMARK ---------- */}
				<div
					id='watermark'
					className=' text-main-light transform -rotate-12  lg:rotate-0 whitespace-nowrap top-[25%] md:top-[22.5%] absolute text-8xl  sm:text-9xl md:text-[10rem] font-extrabold lg:top-[19%] lg:text-[16rem] text-center opacity-50 select-none'>
					<WindupChildren>
						<Pace ms={25}>
							<p>FULL STACK</p>
							<p>{watermark}</p>
						</Pace>
					</WindupChildren>
				</div>

				{/* ---------- HEADINGS, DESCRIPTION, LINKS ---------- */}
				<div className=' lg:max-w-3xl lg:text-left top-[17.5%]  sm:top-1/4 container absolute px-4 text-center'>
					<div className=' invisible transition-opacity duration-1000 opacity-0' id='heading'>
						<h1 className='lg:text-2xl text-xl font-semibold text-gray-100'>{greeting}</h1>
						<p className='lg:text-6xl text-5xl font-semibold text-green-400'>
							Konstantinos Pasca
							<span
								id='blinking-letter'
								className='lg:text-6xl text-5xl font-semibold text-green-400 duration-75 opacity-100'>
								l
							</span>
						</p>
					</div>

					<p
						id='description'
						className='md:text-xl lg:text-xl lg:mt-6 lg:mb-12 invisible mt-4 mb-8 text-lg text-gray-100 transition-opacity duration-1000 opacity-0'>
						{description}
						<span className=' font-bold text-green-400'>frontend</span> {and}
						<span className='font-bold text-green-400'>backend!</span>
					</p>

					{/* RESUME AND LINKS */}
					<div
						className=' lg:justify-start sm:flex-row flex flex-col-reverse items-center justify-center invisible transition-opacity duration-1000 opacity-0'
						id='links'>
						<a
							title='Download link for my resume in pdf format'
							className='text-md hover:scale-105 transform-gpu transition-transform duration-200 mt-8 sm:mt-0 sm:mr-5 lg:text-lg flex items-center px-4 py-2  font-semibold tracking-wider text-gray-100  border-2 border-green-400 rounded-[0.2rem]'
							href={`/files/kp-resume-${lang === 'en' ? 'en' : 'no'}-ref-hidden.pdf`}
							download>
							<img
								alt='File download icon'
								src='/svg/file-download-solid.svg'
								width={20}
								height={20}
							/>
							<span className=' ml-2'>RESUME</span>
						</a>

						<div className=' sm:ml-5 flex items-center'>
							<a
								title='Link to my GitHub profile'
								className=' transform-gpu hover:scale-110 flex items-center mr-1 transition-transform duration-200'
								href='https://github.com/konstapascal'
								target='_blank'
								rel='noopener noreferrer'>
								<img
									alt='GitHub Logo'
									src='/svg/github-square-brands.svg'
									width={40}
									height={40}
								/>
							</a>
							<a
								title='Link to my LinkedIn profile'
								className=' transform-gpu hover:scale-110 flex items-center mx-1 transition-transform duration-200'
								href='https://www.linkedin.com/in/konstapascal'
								target='_blank'
								rel='noopener noreferrer'>
								<img
									alt='LinkedIn Logo'
									src='/svg/linkedin-brands.svg'
									width={40}
									height={40}
								/>
							</a>
							<a
								title='Link to my Twitter profile'
								className=' transform-gpu hover:scale-110 flex items-center ml-1 transition-transform duration-200'
								href='https://twitter.com/konstapascal'
								target='_blank'
								rel='noopener noreferrer'>
								<img
									alt='Twitter Logo'
									src='/svg/twitter-square-brands.svg'
									width={40}
									height={40}
								/>
							</a>
						</div>
					</div>
				</div>

				{/* ---------- SCROLL DOWN ARROW ---------- */}
				<div
					id='scroll-down-arrow'
					className='lg:block bottom-4 absolute hidden transition-opacity duration-1000 opacity-0 cursor-pointer'>
					<ScrollLink to='about-section' smooth={true} duration={1000}>
						<img
							alt='Icon of arrow pointing down'
							className='transform-gpu hover:scale-125 transition-transform duration-200'
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
