import React from 'react';

function About() {
	return (
		<section id='about' className='py-36 bg-black text-white'>
			<div className='container mx-auto px-4'>
				<div className='items-center flex flex-wrap'>
					<div className='lg:w-5/12 ml-auto mr-auto px-4'>
						<img
							alt='...'
							className='max-w-full rounded-lg shadow-lg'
							src='https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
						/>
					</div>
					<div className='w-full md:w-5/12 ml-auto mr-auto px-4'>
						<div className='md:pr-12'>
							<p className='text-green-400 font-semibold'>
								About myself
							</p>
							<h3 className='text-4xl text-gray-200 uppercase font-bold'>
								Technologies
							</h3>
							<p className='mt-4 text-lg text-gray-200 leading-relaxed'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Natus, cumque. Veritatis sapiente ipsam necessitatibus
								non veniam ut eum commodi sed eaque sequi.
							</p>
							<ul className='mt-6'>
								<li className='py-2'>
									<div className='flex items-center'>
										<div>
											<h4 className='text-xl'>HTML, CSS, JS</h4>
										</div>
									</div>
								</li>
								<li className='py-2'>
									<div className='flex items-center'>
										<div>
											<h4 className='text-xl'>
												Node, Express, React, Next{' '}
											</h4>
										</div>
									</div>
								</li>
								<li className='py-2'>
									<div className='flex items-center'>
										<div>
											<h4 className='text-xl'>Tailwind</h4>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
