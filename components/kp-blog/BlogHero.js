import Link from 'next/link';

//

function Hero() {
	return (
		<section id='blog-section'>
			<nav className='bg-main-dark lg:p-8 md:p-6 flex items-center justify-between p-4 border-b-2 border-green-400'>
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
		</section>
	);
}
export default Hero;
