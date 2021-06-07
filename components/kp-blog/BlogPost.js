import Label from '../shared/Label';

import Link from 'next/link';

function BlogPost({ title, excerpt, date, author, labels, url }) {
	return (
		<div className=' first:mt-0 last:mb-0 my-14'>
			<Link href={`/blog/${url}`}>
				<a className=' hover:underline hover:text-green-400 lg:text-4xl inline-block text-3xl font-semibold text-gray-100 cursor-pointer'>
					{title}
				</a>
			</Link>

			<p className=' mt-2 text-gray-400'>
				by{' '}
				<span className='hover:underline font-semibold text-green-400 cursor-pointer'>
					{author}
				</span>{' '}
				on <span>{date}</span>
			</p>
			<Link href={`/blog/${url}`}>
				<p className='text-md lg:text-lg mt-4 text-gray-100 cursor-pointer'>{excerpt}</p>
			</Link>
			<div className='mt-4'>
				{labels.map(label => {
					return (
						<Label key={`${label}-` + Math.floor(Math.random() * 1000) + 1} content={label} />
					);
				})}
			</div>
		</div>
	);
}
export default BlogPost;
