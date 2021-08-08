import ProjectCard from '../shared/ProjectCard';

import projects from '../../data/projects';
import { useEffect, useState } from 'react';

function Projects() {
	const [projectsHidden, setProjectsHidden] = useState(true);

	useEffect(() => {
		const parent = document.querySelector('#project-cards');

		// starting from next last child, as last is a button
		const lastThreeChildren = [
			parent.children[parent.children.length - 2],
			parent.children[parent.children.length - 3],
			parent.children[parent.children.length - 4]
		];

		projectsHidden
			? lastThreeChildren.forEach(elem => (elem.style.display = 'none'))
			: lastThreeChildren.forEach(elem => (elem.style.display = 'flex'));
	}, [projectsHidden]);

	return (
		<section className='bg-main-light lg:py-32 px-4 py-20'>
			<div className=' container text-gray-100'>
				<div className='text-center'>
					<p className=' font-semibold text-gray-100'>Some of my</p>
					<p className='inline-block  text-4xl lg:text-5xl font-semibold text-green-400 uppercase rounded-[0.2rem]'>
						Projects
					</p>
					<p className=' text-md md:text-lg lg:text-xl mt-8 mb-16 text-gray-100'>
						Examples of some of the projects I have worked on:
					</p>
				</div>

				{/* ---------- CARDS ---------- */}
				<div id='project-cards' className=' flex flex-col items-center'>
					{projects.map(project => (
						<ProjectCard
							key={project.id}
							title={project.title}
							subtitle={project.subtitle}
							description={project.description}
							urls={{ ...project.urls }}
							labels={project.labels}
						/>
					))}
					<button
						className='text-md mt-14 lg:mt-20 hover:scale-105 transform-gpu transition-transform duration-200 lg:text-lg  px-4 py-2 font-semibold tracking-wider text-gray-100  border-2 border-green-400 rounded-[0.2rem] cursor-pointer'
						onClick={() => setProjectsHidden(prev => !prev)}>
						{projectsHidden ? 'Show More' : 'Show Less'}
					</button>
				</div>
			</div>
		</section>
	);
}
export default Projects;
