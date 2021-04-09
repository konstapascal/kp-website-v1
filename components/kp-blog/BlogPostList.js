import React from 'react';
import BlogPost from './BlogPost';

function BlogPostList() {
	return (
		<section className='bg-gray-300'>
			<div className='lg:w-2/3 2xl:w-1/2  container px-6 py-16'>
				<BlogPost />
				<BlogPost />
				<BlogPost />
				<BlogPost />
			</div>
		</section>
	);
}

export default BlogPostList;
