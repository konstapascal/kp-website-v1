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
				className='rounded shadow-xl'
			/>
			<h5 className='mt-4 text-2xl text-[#1E1F1C] dark:text-gray-200 text-gray-900 font-bold transition duration-300 ease-in'>
				{title}
			</h5>
			<p className='dark:text-gray-400 mt-1 text-sm font-semibold text-gray-500 uppercase transition duration-300 ease-in'>
				{description}
			</p>

			<div className='mt-2'>
				{labels.map(label => {
					return <Label key={`${label}`} content={`${label}`} />;
				})}
			</div>
		</div>
	);
}

export default ProjectCard;
