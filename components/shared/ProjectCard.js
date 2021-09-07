import Label from './Label';

function ProjectCard({
	title,
	subtitle,
	description,
	urls: { imgPath, codeUrl, demoUrl = '', apiUrl = '' },
	labels
}) {
	return (
		<div className='bg-main-dark overflow-hidden mt-12 lg:mt-10 first:mt-0 md:shadow-2xl lg:flex-row-reverse xl:hover:scale-105 transform-gpu lg:max-w-7xl transition-transform flex flex-col max-w-[600px] duration-200 lg:border-l-2 border-green-400 border-opacity-75 rounded-md  shadow-md'>
			<img src={`${imgPath}`} width={600} height={300} className='object-cover object-center' />
			<div className=' xl:px-14 xl:py-12 md:px-10 max-w-3xl px-6 py-8'>
				<div>
					<a
						href={apiUrl === '' ? `${demoUrl}` : `${apiUrl}`}
						target='_blank'
						rel='noopener noreferrer'>
						<h1 className=' xl:text-4xl inline-block text-3xl font-semibold text-green-400'>
							{title}
						</h1>
					</a>
					<p className=' xl:mt-2 mt-1 text-sm font-semibold text-gray-400 uppercase'>
						{subtitle}
					</p>
				</div>
				<div className=' mt-2'>
					{labels.map(label => {
						return (
							<Label
								key={`${label}-` + Math.floor(Math.random() * 1000) + 1}
								content={`${label}`}
							/>
						);
					})}
				</div>

				<p className='xl:mt-6 xl:mb-8 text-md lg:text-lg mt-4 mb-6 text-gray-100'>
					{description}
				</p>

				<div className=' flex items-center justify-start'>
					{demoUrl !== '' && (
						<a
							className=' hover:text-green-400 group flex items-center'
							href={`${demoUrl}`}
							target='_blank'
							rel='noopener noreferrer'>
							<img
								className='transform-gpu group-hover:scale-110 transition-transform duration-200'
								src='/svg/external-link-square-alt-solid.svg'
								width={35}
								height={35}
							/>
							<p className=' ml-3 font-medium'>Demo</p>
						</a>
					)}
					{apiUrl !== '' && (
						<a
							className=' hover:text-green-400 group flex items-center'
							href={`${apiUrl}`}
							target='_blank'
							rel='noopener noreferrer'>
							<img
								className='transform-gpu group-hover:scale-110 transition-transform duration-200'
								src='/svg/server-solid.svg'
								width={30}
								height={30}
							/>
							<p className=' ml-3 font-medium'>API Docs</p>
						</a>
					)}
					<a
						className='hover:text-green-400 group flex items-center ml-6'
						href={`${codeUrl}`}
						target='_blank'
						rel='noopener noreferrer'>
						<img
							className='transform-gpu group-hover:scale-110 transition-transform duration-200'
							src='/svg/github-square-brands.svg'
							width={35}
							height={35}
						/>
						<p className=' ml-3 font-medium'>Source Code</p>
					</a>
				</div>
			</div>
		</div>
	);
}
export default ProjectCard;
