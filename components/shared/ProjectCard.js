import Image from 'next/image';
import Label from './Label';

function ProjectCard({ title, subtitle, description, url, labels }) {
	return (
		<div className='bg-main-dark lg:max-w-md lg:shadow-2xl w-full border-b-2 border-r-2 border-green-400 rounded shadow-md'>
			<Image src={`${url}`} width={600} height={500} />

			<div className=''>
				<h1 className=' hover:underline hover:text-green-400 inline-block text-2xl text-gray-100 cursor-pointer'>
					{title}
				</h1>
				<p className=' mt-1 text-sm font-semibold text-gray-400 uppercase'>
					{subtitle}
				</p>
				<p className=' text-md mt-2'>{description}</p>

				<div>
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
		</div>
	);
}
export default ProjectCard;
