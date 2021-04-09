import React from 'react';
import ProjectCard from '../shared/ProjectCard';

function Projects() {
	return (
		<section className=' bg-gray-300'>
			<div className=' py-28 container px-6 text-center'>
				<p className='font-semibold'>Some of my</p>
				<p className='inline-block px-4 py-2 text-3xl font-semibold text-green-400 uppercase bg-black rounded-sm'>
					Projects
				</p>
				<p className='text-md md:text-lg lg:text-xl my-8 leading-relaxed'>
					Here are some of the projects I have worked on, click the links
					for more information.
				</p>

				{/* ---------- CARDS ---------- */}
				<div className='flex flex-wrap justify-center'>
					<ProjectCard
						title='Chestnut'
						description='Educational PKI Web App'
						src='/chestnut-thumbnail.jpg'
						labels={['React', 'Semantic', 'Node', 'SQL']}
					/>
					<ProjectCard
						title='KP Website'
						description='My personal website and blog'
						src='/chestnut-thumbnail.jpg'
						labels={['NEXT', 'Tailwind']}
					/>
					<ProjectCard
						title='JS Calculator'
						description='Calculator made in pure JS'
						src='/chestnut-thumbnail.jpg'
						labels={['HTML', 'CSS', 'JS']}
					/>
				</div>
			</div>
		</section>
	);
}
export default Projects;
