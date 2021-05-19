import Link from 'next/link';

//

function Hero() {
	return (
		<section
			id='blog-section'
			className='bg-main-dark border-b-2 border-green-400'>
			<nav className=' lg:px-8 lg:pt-8 md:px-6 md:pt-6 flex items-center justify-between px-4 pt-4'>
				<Link href='/blog'>
					<a className='lg:text-3xl text-2xl rounded-[0.2rem] font-bold tracking-wide text-green-400 px-4 py-2'>
						KP-BLOG
					</a>
				</Link>
				<Link href='/'>
					<a className='text-sm lg:text-lg hover:underline px-4 py-2 font-semibold tracking-wider text-gray-100  border-2 border-green-400 rounded-[0.2rem]'>
						WEBSITE
					</a>
				</Link>
			</nav>
			<div className='lg:max-w-3xl lg:px-0 container px-4 pt-10 pb-20 text-gray-100'>
				<p className=' lg:text-4xl text-3xl font-semibold text-green-400'>
					Welcome to my blog!
				</p>
				<p className='lg:text-xl mt-4 text-lg text-gray-100'>
					Here you can expect weekly articles on Javascript, tailored for
					both begginers and advanced!
				</p>
			</div>
		</section>
	);
}
export default Hero;
