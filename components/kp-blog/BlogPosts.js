import React from 'react';
import BlogPost from './BlogPost';

function BlogPosts() {
	return (
		<section className=' bg-[#272822] border-b-2 border-green-400'>
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
