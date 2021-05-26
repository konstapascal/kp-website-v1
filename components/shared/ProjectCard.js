import Image from 'next/image';
import Label from './Label';

function ProjectCard({ title, subtitle, description, url, labels }) {
	return (
		<div className='bg-main-dark lg:even:flex-row-reverse lg:even:border-r-0 lg:even:border-l-2 md:shadow-2xl offset lg:flex-row lg:hover:scale-105 transform-gpu flex flex-col duration-200 border-b-2 border-r-2 border-green-400 rounded shadow-md'>
			<Image
				src={`${url}`}
				width={600}
				height={300}
				quality={100}
				className=' object-cover'
			/>

			<div className=' lg:px-12 lg:py-10 max-w-3xl px-10 py-8'>
				<h1 className=' inline-block text-3xl text-green-400'>{title}</h1>
				<p className=' mt-1 text-sm font-semibold text-gray-400 uppercase'>
					{subtitle}
				</p>
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
				<p className='text-md mt-2 text-gray-100'>{description}</p>

				<div className=' flex items-center justify-start mt-4'>
					<a
						className=' flex items-center'
						href='https://duckduckgo.com/'
						target='_blank'
						rel='noopener noreferrer'>
						<Image
							src='/svg/external-link-square-alt-solid.svg'
							width={35}
							height={35}
						/>
					</a>
					<a
						className=' flex items-center ml-1'
						href='https://duckduckgo.com/'
						target='_blank'
						rel='noopener noreferrer'>
						<Image
							src='/svg/github-square-brands.svg'
							width={35}
							height={35}
						/>
					</a>
				</div>
			</div>
		</div>
	);
}
export default ProjectCard;
