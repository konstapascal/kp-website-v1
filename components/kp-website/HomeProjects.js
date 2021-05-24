import ProjectCard from '../shared/ProjectCard';

import projects from '../../data/projects';

function Projects() {
	return (
		<section className='bg-main-light lg:pb-32 px-4 pb-20'>
			<div className=' container text-gray-100'>
				<div className='text-center'>
					<p className=' font-semibold text-gray-100'>Some of my</p>
					<p className='inline-block  text-4xl lg:text-5xl font-semibold text-green-400 uppercase rounded-[0.2rem]'>
						Projects
					</p>
					<p className=' text-md md:text-lg lg:text-xl my-8 text-gray-100'>
						Here are some of the projects I have worked on, click the
						links for more information.
					</p>
				</div>

				{/* ---------- CARDS ---------- */}
				<div className=' flex flex-wrap justify-center'>
					{projects.map(project => (
						<ProjectCard
							key={project.id}
							title={project.title}
							subtitle={project.subtitle}
							description={project.description}
							url={project.url}
							labels={project.labels}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
export default Projects;
