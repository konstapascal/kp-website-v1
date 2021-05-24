import Image from 'next/image';
import Label from './Label';

function ProjectCard({ title, subtitle, description, url, labels }) {
	return (
		<div className='bg-main-dark lg:even:flex-row-reverse lg:even:border-r-0 lg:even:border-l-2 group md:shadow-2xl offset lg:flex-row lg:max-w-4xl xl:max-w-5xl flex flex-col max-w-md duration-500 transform border-b-2 border-r-2 border-green-400 rounded shadow-md'>
			<Image
				src={`${url}`}
				width={800}
				height={450}
				quality={100}
				className=' lg:group-hover:scale-150 object-cover duration-500 transform'
			/>

			<div className=' lg:px-12 lg:py-10 max-w-3xl px-10 py-8'>
				<h1 className=' group-hover:underline inline-block text-2xl text-green-400'>
					{title}
				</h1>
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
