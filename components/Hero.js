import React from 'react';
import Link from 'next/link';

function Hero() {
	return (
		<section>
			<div
				className='relative flex items-center justify-center'
				style={{ minHeight: '100vh' }}>
				<div
					className='absolute w-full h-full bg-cover'
					style={{
						backgroundImage:
							'url(https://images.unsplash.com/photo-1534445817031-c529c7186f30?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
					}}
				/>
				<span className='absolute w-full h-full bg-black opacity-70 ' />

				<Link href='/'>
					<a className='text-3xl absolute font-bold text-green-400 top-0 left-0 m-12'>
						KP-WEBSITE
					</a>
				</Link>

				<Link href='/blog'>
					<a className='text-xl absolute text-gray-200 top-0 right-0 m-12 py-2 px-6 border-2 border-green-400'>
						Blog
					</a>
				</Link>

				<div className='container absolute'>
					<div className='items-center flex flex-wrap'>
						<div className='w-full lg:w-6/12 px-4 ml-auto mr-auto text-center'>
							<div>
								<h1 className='text-gray-200 text-3xl'>
									Hello, this is{' '}
								</h1>
								<p className='text-green-400 font-semibold text-5xl'>
									Konstantinos Pascal
								</p>
								<p className='mt-8 text-lg text-gray-400'>
									Lorem ipsum, dolor sit amet consectetur adipisicing
									elit. Animi impedit sint voluptatem eaque provident
									incidunt libero pariatur, labore porro facilis veniam
									nihil laboriosam temporibus vitae non autem.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
