import React from 'react';

function Projects() {
	return (
		<section className=' bg-gray-300'>
			<div className='container p-6 py-24 lg:py-28 text-center'>
				<p className=' font-semibold '>Some of my </p>
				<h3 className='text-green-400 text-3xl rounded-sm font-semibold bg-black py-2 px-4 inline-block'>
					PROJECTS
				</h3>
				<p className='text-md leading-relaxed mt-6 mb-6'>
					Here are some of the projects I have worked on, click the links
					for more information.
				</p>

				{/* ---------- CARDS ---------- */}

				<div className='flex flex-wrap justify-center'>
					<div className='m-6'>
						<img
							alt='...'
							src='https://images.unsplash.com/photo-1600201172395-c8165f448b39?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
							className='shadow-xl rounded'
							style={{ width: '250px' }}
						/>
						<div className='pt-4 text-center'>
							<h5 className='text-2xl font-bold'>Chestnut</h5>
							<p className='mt-1 text-sm text-gray-500 uppercase font-semibold'>
								Educational PKI Web Application
							</p>
						</div>
					</div>
					<div className='m-6'>
						<img
							alt='...'
							src='https://images.unsplash.com/photo-1526572195979-0f8a7ea44489?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
							className='shadow-xl rounded'
							style={{ width: '250px' }}
						/>
						<div className='pt-4 text-center'>
							<h5 className='text-2xl font-bold'>KP-WEBSITE</h5>
							<p className='mt-1 text-sm text-gray-500 uppercase font-semibold'>
								My personal website and blog
							</p>
						</div>
					</div>
					<div className='m-6'>
						<img
							alt='...'
							src='https://images.unsplash.com/photo-1567013127542-490d757e51fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
							className='shadow-xl rounded'
							style={{ width: '250px' }}
						/>
						<div className='pt-4 text-center'>
							<h5 className='text-2xl font-bold'>Project 3</h5>
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
