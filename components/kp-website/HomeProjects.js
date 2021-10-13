import ProjectCard from '../shared/ProjectCard';

import projects from '../../data/projects';
import { useEffect, useState } from 'react';

import { useContext } from 'react';
import LangContext from '../../context/lang-context';
import website from '../../data/website-contents/website-text';

function Projects() {
	const [lang] = useContext(LangContext);
	const { title, description, more, less } = website[lang].projects;

	const [projectsHidden, setProjectsHidden] = useState(true);

	useEffect(() => {
		const parent = document.querySelector('#project-cards');

		// starting from next last child, as last is a button
		const lastProject = parent.children[parent.children.length - 1];

		lastProject.style.display = projectsHidden ? 'none' : 'flex';
	}, [projectsHidden]);

	return (
		<section className='bg-main-light lg:py-24 px-4 py-16'>
			<div className=' container flex flex-col items-center text-gray-100'>
				<div className='lg:max-w-3xl container text-center'>
					<p className='inline-block  text-4xl lg:text-5xl font-semibold text-green-400 uppercase rounded-[0.2rem]'>
						{title}
					</p>
					<p className=' text-md md:text-lg lg:text-xl mt-8 mb-16 text-gray-100'>
						{description}
					</p>
				</div>

				{/* ---------- CARDS ---------- */}
				<div id='project-cards'>
					{projects.map(project => (
						<ProjectCard
							key={project.id}
							title={project.title}
							subtitle={project.subtitle}
							description={project.description}
							metadata={project.metadata}
							urls={project.urls}
							labels={project.labels}
						/>
					))}
				</div>

				<button
					className='text-md hover:text-green-400 text-xl  mt-14 lg:mt-16  px-6 py-3 font-semibold tracking-wider   rounded-[0.2rem] cursor-pointer'
					onClick={() => setProjectsHidden(prev => !prev)}>
					{projectsHidden ? more : less}
				</button>
			</div>
		</section>
	);
}
export default Projects;
