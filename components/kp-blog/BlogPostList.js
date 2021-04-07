import React from 'react';
import BlogPost from './BlogPost';

function BlogPostList() {
	return (
		<section className='bg-gray-300'>
			<div className='lg:py-24 lg:max-w-4xl container p-6 py-24'>
				<h1 className='mb-6 text-5xl font-bold'>Blog Posts</h1>
				<BlogPost />
				<BlogPost />
				<BlogPost />
				<BlogPost />
			</div>
		</section>
	);
}

export default BlogPostList;
