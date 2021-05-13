import React from 'react';
import Label from './Label';

function ProjectCard({ title, description, src, labels }) {
	return (
		<div
			key={title}
			className='bg-main-dark lg:max-w-md lg:m-4 w-full py-8 my-2 border-b-2 border-r-2 border-green-400 rounded'>
			<h1 className=' hover:underline text-2xl text-gray-100 cursor-pointer'>
				{title}
			</h1>
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
