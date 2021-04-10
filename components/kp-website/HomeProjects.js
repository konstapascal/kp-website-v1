import React from 'react';
import ProjectCard from '../shared/ProjectCard';

function Projects() {
	return (
		<section className='dark:bg-[#272822] transition duration-300 ease-in bg-gray-200'>
			<div className=' py-28 container px-6 text-center'>
				<p className=' dark:text-gray-300 font-semibold text-gray-900 transition duration-300 ease-in'>
					Some of my
				</p>
				<p className='inline-block px-4 py-2 text-3xl font-semibold text-green-400 uppercase bg-[#1E1F1C]  rounded-[0.2rem]'>
					Projects
				</p>
				<p className='text-md md:text-lg lg:text-xl dark:text-gray-300 my-8 leading-relaxed text-gray-900 transition duration-300 ease-in'>
					Here are some of the projects I have worked on, click the links
					for more information.
				</p>

				{/* ---------- CARDS ---------- */}
				<div className=' flex flex-wrap justify-center'>
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
