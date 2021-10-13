import Label from './Label';

import { useContext } from 'react';
import LangContext from '../../context/lang-context';

function ProjectCard({
	title,
	subtitle,
	description,
	metadata: { imgAlt },
	urls: { imgPath, codeUrl, demoUrl = '', apiUrl = '' },
	labels
}) {
	const [lang] = useContext(LangContext);

	return (
		<div className='bg-main-dark overflow-hidden mt-12 lg:mt-10 first:mt-0 md:shadow-2xl lg:flex-row-reverse xl:hover:scale-105 transform-gpu lg:max-w-7xl transition-transform flex flex-col max-w-[600px] duration-200 lg:border-l-4 border-green-400 border-opacity-60 rounded-md  shadow-md'>
			<img
				src={`${imgPath}`}
				width={600}
				height={300}
				alt={imgAlt}
				className='object-cover object-center'
			/>
			<div className=' xl:px-14 xl:py-12 md:px-10 max-w-3xl px-6 py-8'>
				<div>
					<a
						title={
							apiUrl === ''
								? `Link to the live demo of ${title}`
								: `Link to the API documentation of ${title}`
						}
						href={apiUrl === '' ? `${demoUrl}` : `${apiUrl}`}
						target='_blank'
						rel='noopener noreferrer'>
						<h1 className=' xl:text-4xl inline-block text-3xl font-semibold text-green-400'>
							{title}
						</h1>
					</a>
					<p className=' xl:mt-2 mt-1 text-sm font-semibold text-gray-400 uppercase'>
						{subtitle[lang]}
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
					{description[lang]}
				</p>

				<div className=' flex items-center justify-start'>
					{demoUrl !== '' && (
						<a
							className=' hover:text-green-400 group flex items-center'
							title={`Link to the live demo of ${title}`}
							href={`${demoUrl}`}
							target='_blank'
							rel='noopener noreferrer'>
							<img
								alt='External link to live demo'
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
							title={`Link to the API documentation of ${title}`}
							target='_blank'
							rel='noopener noreferrer'>
							<img
								alt='External link to API documentation'
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
						title={`Link to the source code for ${title} on GitHub`}
						target='_blank'
						rel='noopener noreferrer'>
						<img
							alt='External link to source code on Github'
							className='transform-gpu group-hover:scale-110 transition-transform duration-200'
							src='/svg/github-square-brands.svg'
							width={35}
							height={35}
						/>
						<p className=' ml-3 font-medium'>{lang === 'en' ? 'Source Code' : 'Kildekode'}</p>
					</a>
				</div>
			</div>
		</div>
	);
}
export default ProjectCard;
