import React from 'react';
import BlogPost from './BlogPost';

function BlogPosts() {
	return (
		<section className=' dark:bg-[#272822] bg-gray-300 transition duration-300 ease-in'>
			<div className='lg:w-2/3 2xl:w-1/2 container px-6 py-20'>
				<BlogPost />
				<BlogPost />
				<BlogPost />
				<BlogPost />
			</div>
		</section>
	);
}
export default BlogPosts;
