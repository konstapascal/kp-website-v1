import React from 'react';
import Label from './Label';

function ProjectCard({ title, description, src, labels }) {
	return (
		<div className='bg-main-dark lg:max-w-md lg:m-4 lg:shadow-2xl w-full px-4 py-8 my-2 text-center border-b-2 border-r-2 border-green-400 rounded shadow-md'>
			<h1 className=' hover:underline hover:text-green-400 inline-block text-2xl text-gray-100 cursor-pointer'>
				{title}
			</h1>
			<p className=' mt-1 text-sm font-semibold text-gray-400 uppercase'>
				{description}
			</p>

			<div className='mt-4'>
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
	);
}
export default ProjectCard;
