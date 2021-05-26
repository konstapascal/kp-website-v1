import ProjectCard from '../shared/ProjectCard';

import projects from '../../data/projects';

function Projects() {
	return (
		<section className='bg-main-light lg:py-32 px-4 py-20'>
			<div className=' container text-gray-100'>
				<div className='text-center'>
					<p className=' font-semibold text-gray-100'>Some of my</p>
					<p className='inline-block  text-4xl lg:text-5xl font-semibold text-green-400 uppercase rounded-[0.2rem]'>
						Projects
					</p>
					<p className=' text-md md:text-lg lg:text-xl mt-8 mb-12 text-gray-100'>
						Here are some of the projects I have worked on, click the
						links for more information.
					</p>
				</div>

				{/* ---------- CARDS ---------- */}
				<div className=' lg:gap-8 flex flex-col items-center gap-12'>
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
				</div>
			</div>
		</section>
	);
}
export default Projects;
