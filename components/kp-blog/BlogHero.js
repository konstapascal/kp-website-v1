import Link from 'next/link';

function Hero() {
	return (
		<section>
			<div className='bg-main-dark border-green-4 h-80 md:h-72 relative flex items-end justify-center border-b-2 border-green-400'>
				<nav className='md:px-6 md:pt-6 lg:px-8 lg:pt-8 absolute inset-x-0 top-0 flex items-center justify-between px-4 pt-4'>
					<Link href='/blog'>
						<a className='lg:text-3xl text-2xl rounded-[0.2rem] font-bold tracking-wide text-green-400 px-4 py-2'>
							KP-BLOG
						</a>
					</Link>
					<Link href='/'>
						<a className='text-sm lg:text-lg  hover:underline px-4  py-2 font-semibold tracking-wider text-gray-100  border-2 border-green-400 rounded-[0.2rem]'>
							WEBSITE
						</a>
					</Link>
				</nav>
				<div className='lg:max-w-3xl lg:px-0 xl:text-left container px-4 mb-16 text-center'>
					<p className=' lg:text-4xl text-3xl font-semibold text-green-400'>
						Welcome to my blog!
					</p>
					<p className='lg:text-xl mt-4 text-lg text-gray-100'>
						Here you can expect weekly articles on Javascript, tailored
						for both begginers and advanced!
					</p>
				</div>
			</div>
		</section>
	);
}
export default Hero;
