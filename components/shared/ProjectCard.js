import React from 'react';
import Image from 'next/image';
import Label from './Label';

function ProjectCard({ title, description, src, labels }) {
	return (
		<div className='m-10'>
			<Image
				src={`${src}`}
				width='250'
				height='375'
				className=' rounded-sm shadow-xl'
			/>
			<h5 className='mt-4 text-2xl font-bold'>{title}</h5>
			<p className='mt-1 text-sm font-semibold text-gray-500 uppercase'>
				{description}
			</p>

			<div className='mt-2'>
				{labels.map(label => {
					return <Label content={`${label}`} />;
				})}
			</div>
		</div>
	);
}

export default ProjectCard;
