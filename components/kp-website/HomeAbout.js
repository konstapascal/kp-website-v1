import React from 'react';
import Image from 'next/image';

function About() {
	return (
		<section className=' bg-black'>
			<div className='lg:py-28 container p-6 py-24 text-center text-gray-300'>
				<p className='font-semibold text-green-400' id='about-section'>
					Some of my
				</p>
				<h3 className='text-3xl font-semibold uppercase'>Technologies</h3>
				<p className='text-md md:text-lg lg:text-xl mt-4 leading-relaxed'>
					Focusing on web development means I am very comfortable with the
					modern web languages, frameworks and technologies.
				</p>
				<ul className='mt-8'>
					<li className='py-2'>
						<h4 className='text-xl'>HTML, CSS, JS</h4>
					</li>
					<li className='py-2'>
						<h4 className='text-xl'>Node, Express, React, Next </h4>
					</li>
					<li className='py-2'>
						<h4 className='text-xl'>Tailwind</h4>
					</li>
				</ul>

				<div className='mt-8'>
					<div className='flex justify-center'>
						<div className=''>
							<Image
								src='/svg/html5-brands.svg'
								alt='HTML5 Logo'
								width={50}
								height={50}
							/>
						</div>
						<div className='ml-4'>
							<Image
								src='/svg/css3-alt-brands.svg'
								alt='CSS3 Logo'
								width={50}
								height={50}
							/>
						</div>
						<div className=' ml-4'>
							<Image
								src='/svg/js-square-brands.svg'
								alt='JS Logo'
								width={50}
								height={50}
							/>
						</div>
					</div>
					<div className='flex justify-center mt-4'>
						<div className=''>
							<Image
								src='/svg/node-js-brands.svg'
								alt='HTML5 Logo'
								width={50}
								height={50}
							/>
						</div>
						<div className='ml-4'>
							<Image
								src='/svg/react-brands.svg'
								alt='CSS3 Logo'
								width={50}
								height={50}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;