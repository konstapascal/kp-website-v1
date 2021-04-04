import React from 'react';
import Image from 'next/image';

function About() {
	return (
		<section className=' bg-black'>
			<div className='container text-gray-300 border-2 border-gray-100 py-24'>
				<p className='text-green-400 font-semibold'>Some of my</p>
				<h3 className='text-3xl uppercase font-semibold'>Technologies</h3>
				<p className='mt-4 text-md leading-relaxed'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
					cumque. Veritatis sapiente ipsam necessitatibus non veniam ut eum
					commodi sed eaque sequi.
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
								<h4 className='text-xl'>Node, Express, React, Next </h4>
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
		</section>
	);
}

export default About;
