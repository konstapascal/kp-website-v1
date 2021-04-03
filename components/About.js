import React from 'react';
import Image from 'next/image';

function About() {
	return (
		<section className=' bg-black'>
			<div className='container mx-auto px-4 py-36 flex items-center justify-center flex-wrap  text-gray-300'>
				<Image
					src='/about.jpg'
					width={500}
					height={300}
					objectFit='cover'
				/>

				<div className='max-w-md'>
					<p className='text-green-400 font-semibold'>About myself</p>
					<h3 className='text-4xl uppercase font-bold'>Technologies</h3>
					<p className='mt-4 text-lg leading-relaxed'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Natus, cumque. Veritatis sapiente ipsam necessitatibus non
						veniam ut eum commodi sed eaque sequi.
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
		</section>
	);
}

export default About;
