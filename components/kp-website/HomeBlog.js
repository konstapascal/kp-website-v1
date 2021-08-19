import Link from 'next/link';

function Blog() {
	return (
		<section className=' bg-main-light lg:pb-32 px-4 pb-20'>
			<div className=' lg:max-w-3xl container text-center text-gray-100'>
				<p className='font-semibold text-gray-100'>Check out my</p>

				<Link href='/blog'>
					<h3 className='lg:text-5xl inline-block text-4xl font-semibold text-green-400 uppercase cursor-pointer'>
						Articles
					</h3>
				</Link>

				<p className='text-md md:text-lg lg:text-xl mt-8 leading-relaxed text-gray-100'>
					I also write about Javascript and web development, check out my{' '}
					<Link href='/blog'>
						<a className='hover:underline font-semibold text-green-400 cursor-pointer'>
							blog!
						</a>
					</Link>
				</p>
			</div>
		</section>
	);
}
export default Blog;
