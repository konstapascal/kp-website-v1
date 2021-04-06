import React from 'react';
import BlogPost from './BlogPost';

function BlogPostList() {
	return (
		<section className='bg-gray-300'>
			<div className='container p-6 py-24 lg:py-24'>
				<h1 className='text-5xl font-bold mb-6'>Blog Posts</h1>
				<BlogPost />
				<BlogPost />
				<BlogPost />
				<BlogPost />
			</div>
		</section>
	);
}

export default BlogPostList;
