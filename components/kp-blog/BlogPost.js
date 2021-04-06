import React from 'react';

function BlogPost() {
	return (
		<div className='p-4'>
			<p className='inline-block rounded-sm p-2 text-2xl font-semibold hover:bg-black hover:text-green-400 cursor-pointer transition ease-in duration-100'>
				Blog post title
			</p>
			<p className='text-gray-700 p-2'>06 April 2021</p>
			<p className='p-2'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
				ullam esse excepturi nam, cumque illum, numquam quia fuga
				necessitatibus, non officia nesciunt vero voluptatem architecto
				voluptatum aperiam quasi. Sapiente, eaque.
			</p>
		</div>
	);
}

export default BlogPost;
