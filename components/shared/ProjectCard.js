import Label from './Label';

function ProjectCard({ title, subtitle, description, urls, labels }) {
	return (
		<div className='bg-main-dark mt-12 lg:mt-10 first:mt-0 md:shadow-2xl offset lg:flex-row xl:hover:scale-105 transform-gpu lg:max-w-7xl transition-transform flex flex-col max-w-[500px] duration-200 border-b-2 border-r-2 border-green-400 rounded-md shadow-md'>
			<img
				src={`${urls.imgPath}`}
				width={550}
				height={300}
				className=' flex-1 object-cover object-center'
			/>

			<div className=' lg:px-12 lg:py-10 md:px-10 md:py-8 flex-1 max-w-3xl px-6 py-4'>
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
						className=' hover:text-green-400 group flex items-center'
						href={`${urls.demoUrl}`}
						target='_blank'
						rel='noopener noreferrer'>
						<img
							className='transform-gpu group-hover:scale-110 transition-transform duration-200'
							src='/svg/external-link-square-alt-solid.svg'
							width={35}
							height={35}
						/>
						<p className=' ml-2 font-medium'>Demo</p>
					</a>
					<a
						className='hover:text-green-400 group flex items-center ml-6'
						href={`${urls.codeUrl}`}
						target='_blank'
						rel='noopener noreferrer'>
						<img
							className='transform-gpu group-hover:scale-110 transition-transform duration-200'
							src='/svg/github-square-brands.svg'
							width={35}
							height={35}
						/>
						<p className=' ml-2 font-medium'>Source Code</p>
					</a>
				</div>
			</div>
		</div>
	);
}
export default ProjectCard;
