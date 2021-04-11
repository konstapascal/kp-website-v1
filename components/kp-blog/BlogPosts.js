import React from 'react';
import BlogPost from './BlogPost';

function BlogPosts() {
	return (
		<section className=' bg-[#2F312C] border-b-2 border-green-400'>
			<div className='container border'>
				<BlogPost />
				<BlogPost />
				<BlogPost />
				<BlogPost />
			</div>
		</section>
	);
}
export default BlogPosts;
