import React from 'react';
import Image from 'next/image';

function Footer() {
	return (
		<footer className=' bg-black'>
			<div className=' py-28 container px-6 text-center'>
				<p className='text-xl font-semibold text-gray-300'>
					Find me on any of these platforms.{' '}
				</p>
				<div className='flex justify-center mt-4'>
					<div className='mr-1 cursor-pointer'>
						<a href='https://github.com/konstapascal'>
							<Image
								src='/svg/github-square-brands.svg'
								width={40}
								height={40}
							/>
						</a>
					</div>
					<div className='ml-1 cursor-pointer'>
						<a href='https://duckduckgo.com/'>
							<Image
								src='/svg/linkedin-brands.svg'
								href='#'
								width={40}
								height={40}
							/>
						</a>
					</div>
				</div>

				<p className='mt-6 text-sm font-semibold text-gray-400'>
					Made by{' '}
					<span className='font-semibold text-green-400'>
						Konstantinos Pascal
					</span>
				</p>
			</div>
		</footer>
	);
}

export default Footer;
