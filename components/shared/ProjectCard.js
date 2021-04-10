import React from 'react';
import Image from 'next/image';
import Label from './Label';

function ProjectCard({ title, description, src, labels }) {
	return (
		<div className='bg-[#1E1F1C]  px-12 py-8 m-8 border-b-2 border-r-2 border-green-400 rounded'>
			{/* <Image src={`${src}`} width='250' height='375' /> */}
			<h1 className=' text-2xl text-gray-200'>{title}</h1>
			<p className=' mt-1 text-sm font-semibold text-gray-400 uppercase'>
				{description}
			</p>

			<div className='mt-4'>
				{labels.map(label => {
					return <Label key={`${label}`} content={`${label}`} />;
				})}
			</div>
		</div>
	);
}
export default ProjectCard;
