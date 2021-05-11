import React from 'react';
import Image from 'next/image';

function Footer() {
	return (
		<footer className=' bg-main-dark py-20 border-t-2 border-green-400'>
			<div className=' container text-center text-gray-100'>
				<p className='text-xl font-semibold text-gray-100'>
					Find me on any of these platforms.{' '}
				</p>
				<div className=' flex justify-center m-6'>
					<a className='mr-1' href='https://github.com/konstapascal'>
						<Image
							src='/svg/github-square-brands.svg'
							width={40}
							height={40}
						/>
					</a>
					<a className='ml-1' href='https://duckduckgo.com/'>
						<Image
							src='/svg/linkedin-brands.svg'
							href='#'
							width={40}
							height={40}
						/>
					</a>
				</div>

				<p className='text-sm font-semibold text-gray-400'>
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
