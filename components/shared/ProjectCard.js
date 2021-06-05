import Label from './Label';

function ProjectCard({ title, subtitle, description, urls, labels }) {
	return (
		<div className='bg-main-dark lg:even:flex-row-reverse lg:even:border-r-0 lg:even:border-l-2 md:shadow-2xl offset lg:flex-row lg:hover:scale-105 transform-gpu lg:max-w-6xl flex flex-col duration-200 border-b-2 border-r-2 border-green-400 rounded shadow-md'>
			<img
				src={`${urls.imgPath}`}
				width={500}
				height={250}
				quality={100}
				className=' flex-1 object-cover object-center'
			/>

			<div className=' lg:px-12 lg:py-10 flex-1 max-w-3xl px-10 py-8'>
				<div className='xl:flex-row flex flex-col justify-between'>
					<div>
						<h1 className=' inline-block text-3xl text-green-400'>{title}</h1>
						<p className=' mt-1 text-sm font-semibold text-gray-400 uppercase'>{subtitle}</p>
					</div>
					<div className=' xl:mt-0 mt-2'>
						{labels.map(label => {
							return (
								<Label
									key={`${label}-` + Math.floor(Math.random() * 1000) + 1}
									content={`${label}`}
								/>
							);
						})}
					</div>
				</div>

				<p className='text-md mt-4 mb-6 text-gray-100'>{description}</p>

				<div className=' flex items-center justify-start'>
					<a
						className=' flex items-center'
						href={`${urls.demoUrl}`}
						target='_blank'
						rel='noopener noreferrer'>
						<img src='/svg/external-link-square-alt-solid.svg' width={35} height={35} />
						<p className='hover:text-green-400 hover:underline ml-2 font-medium'>Demo</p>
					</a>
					<a
						className=' flex items-center ml-8'
						href={`${urls.codeUrl}`}
						target='_blank'
						rel='noopener noreferrer'>
						<img src='/svg/github-square-brands.svg' width={35} height={35} />
						<p className='hover:text-green-400 hover:underline ml-2 font-medium'>
							Source Code
						</p>
					</a>
				</div>
			</div>
		</div>
	);
}
export default ProjectCard;
