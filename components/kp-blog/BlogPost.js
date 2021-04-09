import React from 'react';
import Label from '../shared/Label';

function BlogPost() {
	return (
		<div className='my-14'>
			<p className='md:text-4xl dark:text-gray-200 hover:underline inline-block text-2xl font-semibold text-gray-900 transition duration-300 ease-in cursor-pointer'>
				Blog post title
			</p>

			<p className=' dark:text-gray-400 mt-2 text-gray-500 transition duration-300 ease-in'>
				by{' '}
				<span className='hover:text-blue-500 hover:underline font-semibold cursor-pointer'>
					Konstantinos Pascal
				</span>{' '}
				on <span>06 April 2021</span>
			</p>

			<div className='mt-2'>
				<Label content='JS' />
				<Label content='SQL' />
				<Label content='NODE' />
			</div>

			<p className='text-md md:text-lg lg:text-xl dark:text-gray-300 mt-4 text-gray-900 transition duration-300 ease-in'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
				ullam esse excepturi nam, cumque illum, numquam quia fuga
				necessitatibus, non officia nesciunt vero voluptatem architecto
				voluptatum aperiam quasi. Sapiente, eaque.
			</p>
		</div>
	);
}
export default BlogPost;
