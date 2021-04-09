import React from 'react';
import Label from '../shared/Label';

function BlogPost() {
	return (
		<div className='my-14'>
			<p className='md:text-4xl hover:underline inline-block text-2xl font-semibold cursor-pointer'>
				Blog post title
			</p>
			<p className=' mt-2 text-gray-700'>
				by{' '}
				<span className='hover:text-blue-500 hover:underline cursor-pointer'>
					Konstantinos Pascal
				</span>{' '}
				on <span>06 April 2021</span>
			</p>

			<div className='mt-2'>
				<Label content='JS' />
				<Label content='SQL' />
				<Label content='NODE' />
			</div>

			<p className='text-md md:text-lg lg:text-xl mt-4'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
				ullam esse excepturi nam, cumque illum, numquam quia fuga
				necessitatibus, non officia nesciunt vero voluptatem architecto
				voluptatum aperiam quasi. Sapiente, eaque.
			</p>
		</div>
	);
}
export default BlogPost;
