import React from 'react';
import Image from 'next/image';

function ProjectCard({ title, description, src, labels }) {
	return (
		<div className='m-10'>
			<Image
				src={`${src}`}
				width='250'
				height='375'
				className=' rounded-sm shadow-xl'
			/>
			<h5 className='text-2xl font-bold'>{title}</h5>
			<p className='mt-1 text-sm font-semibold text-gray-500 uppercase'>
				{description}
			</p>
			{labels.map(label => {
				return (
					<span
						key={`${label}`}
						className='inline-block px-2 py-1 mr-1 text-xs font-semibold text-green-600 uppercase bg-green-200 rounded'>
						{label}
					</span>
				);
			})}
		</div>
	);
}

export default ProjectCard;
