import Label from '../shared/Label';

import Link from 'next/link';

import formatDate from '../../lib/formatDate';
import ReadTime from '../shared/ReadTime';

function BlogPost({ title, excerpt, read_time, date, author, labels, url }) {
	return (
		<div className=' first:mt-0 last:mb-0 my-14'>
			<Link href={`/blog/${url}`}>
				<a
					title={`Link to the blog post with title ${title}`}
					className=' hover:underline hover:text-green-400 lg:text-4xl inline-block text-3xl font-semibold text-gray-100 cursor-pointer'>
					{title}
				</a>
			</Link>

			<div className='sm:flex-row flex flex-col mt-2 text-gray-400'>
				<p>
					by
					<span className='hover:underline font-semibold text-green-400 cursor-pointer'>
						{` ${author} `}
					</span>
					on <span>{formatDate(date)}</span>
				</p>
				<span className='sm:ml-6 sm:mt-0 flex items-center mt-1 ml-0'>
					<ReadTime read_time={read_time} />
				</span>
			</div>

			<Link href={`/blog/${url}`}>
				<p className='text-md lg:text-lg mt-3 text-gray-100 cursor-pointer'>{excerpt}</p>
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
