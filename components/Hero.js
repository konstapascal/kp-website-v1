import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Hero() {
	return (
		<section>
			<div className='relative flex items-center justify-center min-h-screen'>
				{/* ---------- BACKGROUND AND FILTER ---------- */}
				<Image src='/hero.jpg' layout='fill' objectFit='cover' />
				<span className='absolute w-full h-full bg-black opacity-70 ' />

				{/* ---------- LOGO AND BLOG BUTTON ---------- */}
				<nav className='absolute flex justify-between items-center p-4 md:p-6 lg:p-8 top-0 inset-x-0'>
					<Link href='/'>
						<a className='text-xl md:text-2xl lg:text-3xl font-bold text-green-400'>
							KP-WEBSITE
						</a>
					</Link>
					<Link href='/blog'>
						<a className='text-md md:text-lg lg:text-xl  text-gray-300  border-2 rounded-sm px-4 py-2 border-green-400 hover:bg-green-400 hover:text-gray-900  transition ease-in duration-150'>
							Blog
						</a>
					</Link>
				</nav>

				<div className='container absolute top-1/3'>
					<div className='text-center m-auto w-11/12 md:w-7/12 lg:w-6/12'>
						<div>
							<h1 className='text-xl md:text-2xl lg:text-3xl text-gray-200 '>
								Hello, this is{' '}
							</h1>
							<p className='text-green-400 font-semibold text-3xl md:text-4xl lg:text-5xl'>
								Konstantinos Pascal
							</p>
							<p className='mt-6 text-md md:text-lg text-gray-300'>
								I am a new developer always excited to learn! Most
								interested in web development with a passion for both
								the frontend and the backend!
							</p>
						</div>
					</div>
					<div className='flex justify-center mt-6'>
						<div className='mr-1 cursor-pointer'>
							<Link href='https://github.com/konstapascal'>
								<Image
									src='/github-square-brands.svg'
									width={40}
									height={40}
								/>
							</Link>
						</div>
						<div className='ml-1 cursor-pointer'>
							<Link href='https://duckduckgo.com/'>
								<Image
									src='/linkedin-brands.svg'
									href='#'
									width={40}
									height={40}
								/>
							</Link>
						</div>
					</div>
				</div>
				<div className='absolute bottom-2'>
					<Image src='/chevron-down-solid.svg' width={40} height={40} />
				</div>
			</div>
		</section>
	);
}

export default Hero;
