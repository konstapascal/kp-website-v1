import Image from 'next/image';

function About() {
	return (
		<section
			className=' bg-main-light lg:py-32 px-4 py-20'
			id='about-section'>
			<div className=' lg:max-w-4xl container text-center text-gray-100'>
				<p className='font-semibold text-gray-100'>Some of my</p>
				<h3 className='lg:text-5xl inline-block text-4xl font-semibold text-green-400 uppercase'>
					Skillsets
				</h3>
				<p className='text-md md:text-lg lg:text-xl mt-8 leading-relaxed text-gray-100'>
					Focusing on web development means I am very comfortable with the
					modern web languages, frameworks and technologies.
				</p>

				<ul className=' inline-block my-8'>
					<li className=''>
						<h4 className='text-xl'>HTML, CSS, JS</h4>
					</li>
					<li className=''>
						<h4 className='text-xl'>Node, Express, React, Next </h4>
					</li>
					<li className=''>
						<h4 className='text-xl'>Tailwind</h4>
					</li>
				</ul>

				<div className=''>
					<div className='flex justify-center'>
						<div className=''>
							<Image
								src='/svg/html5-brands.svg'
								alt='HTML5 Logo'
								width={50}
								height={50}
							/>
						</div>
						<div className='mx-2'>
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
					<div className=' flex justify-center mt-1'>
						<div className='mr-1'>
							<Image
								src='/svg/node-js-brands.svg'
								alt='Node Logo'
								width={50}
								height={50}
							/>
						</div>
						<div className='ml-1'>
							<Image
								src='/svg/react-brands.svg'
								alt='React Logo'
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
