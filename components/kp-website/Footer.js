import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Footer() {
	return (
		<footer className=' bg-black'>
			<div className='container text-center py-20 border-2 border-gray-100'>
				<p className='text-xl font-semibold text-gray-300'>
					Find me on any of these platforms.{' '}
				</p>
				<div className='flex justify-center mt-4'>
					<div className='mr-1 cursor-pointer'>
						<a href='https://github.com/konstapascal'>
							<Image
								src='/github-square-brands.svg'
								width={40}
								height={40}
							/>
						</a>
					</div>
					<div className='ml-1 cursor-pointer'>
						<a href='https://duckduckgo.com/'>
							<Image
								src='/linkedin-brands.svg'
								href='#'
								width={40}
								height={40}
							/>
						</a>
					</div>
				</div>

				<p className='text-sm text-gray-400 font-semibold mt-6'>
					Made by{' '}
					<span className='text-green-400 font-semibold'>
						Konstantinos Pascal
					</span>
				</p>
			</div>
		</footer>
	);
}

export default Footer;
