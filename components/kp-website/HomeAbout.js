import React from 'react';
import Image from 'next/image';

function About() {
	return (
		<section
			className=' bg-[#1E1F1C] border-b-2 border-green-400'
			id='about-section'>
			<div className=' lg:w-2/3 2xl:w-1/2 py-28 container px-6 text-center text-gray-300'>
				<p className='font-semibold text-gray-300'>Some of my</p>
				<h3 className='inline-block text-4xl font-semibold text-green-400 uppercase'>
					Skillsets
				</h3>
				<p className='text-md md:text-lg lg:text-xl my-16 leading-relaxed'>
					Focusing on web development means I am very comfortable with the
					modern web languages, frameworks and technologies.
				</p>
				<ul className=' mb-16'>
					<li className=''>
						<h4 className='text-xl'>HTML, CSS, JS</h4>
					</li>
					<li className='py-2'>
						<h4 className='text-xl'>Node, Express, React, Next </h4>
					</li>
					<li className=''>
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
						<div className='lg:mx-6 mx-4'>
							<Image
								src='/svg/css3-alt-brands.svg'
								alt='CSS3 Logo'
								width={50}
								height={50}
							/>
						</div>
						<div className=''>
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
						<div className='lg:ml-6 ml-4'>
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
