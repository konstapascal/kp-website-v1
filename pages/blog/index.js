import React from 'react';
import Link from 'next/link';

function Blog() {
	return (
		<section>
			<div
				className='relative pt-16 pb-32 flex content-center items-center justify-center'
				style={{ minHeight: '100vh' }}>
				<div
					className='absolute top-0 w-full h-full bg-cover'
					style={{
						backgroundImage:
							'url(https://images.unsplash.com/photo-1534445817031-c529c7186f30?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
					}}>
					<span className='w-full h-full absolute opacity-70 bg-black'></span>
				</div>
				<Link href='/'>
					<a className='text-3xl absolute font-bold text-green-400 top-0 left-0 p-10'>
						KP-WEBSITE
					</a>
				</Link>
				<div className='container relative mx-auto'>
					<div className='items-center flex flex-wrap'>
						<div className='w-full lg:w-6/12 px-4 ml-auto mr-auto text-center'>
							<div>
								<p className='text-green-400 font-semibold text-5xl'>
									KP-BLOG
								</p>
								<p className='mt-4 text-lg text-gray-400'>
									Welcome to my blog, which is currently in
									development!
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Blog;
