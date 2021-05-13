import React from 'react';
import Label from '../shared/Label';

import Link from 'next/link';

function BlogPost({ title, excerpt, date, author, labels, url }) {
	return (
		<div className='p-6'>
			<Link href={`/blog/${url}`}>
				<p className=' hover:underline hover:text-green-400 lg:text-4xl inline-block text-3xl font-semibold text-gray-100 cursor-pointer'>
					{title}
				</p>
			</Link>

			<p className=' mt-2 text-gray-400'>
				by{' '}
				<span className='hover:text-green-400 hover:underline font-semibold cursor-pointer'>
					{author}
				</span>{' '}
				on <span>{date}</span>
			</p>
			<Link href={`/blog/${url}`}>
				<p className='text-md md:text-lg lg:text-xl mt-4 text-gray-100 cursor-pointer'>
					{excerpt}
				</p>
			</Link>
			<div className='mt-4'>
				{labels.map(label => {
					return <Label content={label}></Label>;
				})}
			</div>
		</div>
	);
}
export default BlogPost;
