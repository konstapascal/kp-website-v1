import React from 'react';
import BlogPost from './BlogPost';

function BlogPosts() {
	return (
		<section className=' bg-main-light py-16 border-b-2 border-green-400'>
			<div className=' lg:max-w-3xl container'>
				<BlogPost />
				<BlogPost />
				<BlogPost />
				<BlogPost />
			</div>
		</section>
	);
}
export default BlogPosts;
