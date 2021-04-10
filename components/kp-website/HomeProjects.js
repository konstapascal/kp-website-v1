import React from 'react';
import ProjectCard from '../shared/ProjectCard';

function Projects() {
	return (
		<section className='bg-[#272822] border-b-2 border-green-400'>
			<div className=' py-28 container px-6 text-center'>
				<p className=' font-semibold text-gray-300'>Some of my</p>
				<p className='inline-block  text-4xl font-semibold text-green-400 uppercase rounded-[0.2rem]'>
					Projects
				</p>
				<p className=' text-md md:text-lg lg:text-xl my-16 leading-relaxed text-gray-300'>
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
