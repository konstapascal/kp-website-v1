import React from 'react';

function Projects() {
	return (
		<section className=' bg-gray-300'>
			<div className='container bg-gray-500'>
				<div className='flex flex-wrap justify-center text-center pb-10'>
					<div className='w-full lg:w-6/12 px-4'>
						<h2 className='text-4xl font-semibold uppercase'>
							Some of my{' '}
							<span className='text-green-400 bg-black px-2 py-1'>
								PROJECTS
							</span>
						</h2>
						<p className='text-lg leading-relaxed mt-6 mb-8'>
							Here are some of the projects I have worked on, click the
							links for more information.
						</p>
					</div>
				</div>
				<div className='flex flex-wrap justify-center gap-24'>
					<div className=''>
						<img
							alt='...'
							src='https://images.unsplash.com/photo-1600201172395-c8165f448b39?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
							className='shadow-lg rounded max-w-full mx-auto'
							style={{ width: '250px' }}
						/>
						<div className='pt-6 text-center'>
							<h5 className='text-xl font-bold'>Chestnut</h5>
							<p className='mt-1 text-sm text-gray-500 uppercase font-semibold'>
								Educational PKI Web Application
							</p>
						</div>
					</div>
					<div className=''>
						<img
							alt='...'
							src='https://images.unsplash.com/photo-1526572195979-0f8a7ea44489?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
							className='shadow-lg rounded max-w-full mx-auto'
							style={{ width: '250px' }}
						/>
						<div className='pt-6 text-center'>
							<h5 className='text-xl font-bold'>KP-WEBSITE</h5>
							<p className='mt-1 text-sm text-gray-500 uppercase font-semibold'>
								My personal website and blog
							</p>
						</div>
					</div>
					<div className=''>
						<img
							alt='...'
							src='https://images.unsplash.com/photo-1567013127542-490d757e51fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
							className='shadow-lg rounded max-w-full mx-auto'
							style={{ width: '250px' }}
						/>
						<div className='pt-6 text-center'>
							<h5 className='text-xl font-bold'>Project 3</h5>
							<p className='mt-1 text-sm text-gray-500 uppercase font-semibold'>
								Project 3 description{' '}
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Projects;
