function About() {
	return (
		<section className=' bg-main-light lg:pt-32 px-4 pt-20' id='about-section'>
			<div className=' lg:max-w-4xl container text-center text-gray-100'>
				<p className='font-semibold text-gray-100'>These are my</p>
				<h3 className='lg:text-5xl inline-block text-4xl font-semibold text-green-400 uppercase'>
					Skillsets
				</h3>
				<p className='text-md md:text-lg lg:text-xl mt-8 leading-relaxed text-gray-100'>
					Focusing on web development means I am very comfortable with the modern web
					languages, frameworks and technologies.
				</p>

				<ul className=' my-8'>
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

				<div className='flex justify-center'>
					<div className=''>
						<img src='/svg/html5-brands.svg' alt='HTML5 Logo' />
					</div>
					<div className='mx-2'>
						<img src='/svg/css3-alt-brands.svg' alt='CSS3 Logo' width={50} height={50} />
					</div>
					<div className=''>
						<img src='/svg/js-square-brands.svg' alt='JS Logo' width={50} height={50} />
					</div>
				</div>
				<div className=' flex justify-center mt-2'>
					<div className='mr-1'>
						<img src='/svg/node-js-brands.svg' alt='Node Logo' width={50} height={50} />
					</div>
					<div className='ml-1'>
						<img src='/svg/react-brands.svg' alt='React Logo' width={50} height={50} />
					</div>
				</div>
			</div>
		</section>
	);
}
export default About;
