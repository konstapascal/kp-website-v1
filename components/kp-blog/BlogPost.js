import React from 'react';

function BlogPost() {
	return (
		<div className='p-4'>
			<p className='md:text-3xl hover:bg-black hover:text-green-400 inline-block p-2 text-2xl font-semibold transition duration-100 ease-in rounded-sm cursor-pointer'>
				Blog post title
			</p>
			<p className='p-2 text-gray-700'>06 April 2021</p>
			<p className='text-md md:text-lg lg:text-xl p-2'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
				ullam esse excepturi nam, cumque illum, numquam quia fuga
				necessitatibus, non officia nesciunt vero voluptatem architecto
				voluptatum aperiam quasi. Sapiente, eaque.
			</p>
		</div>
	);
}

export default BlogPost;
