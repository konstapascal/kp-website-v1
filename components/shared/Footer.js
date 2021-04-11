import React from 'react';
import Image from 'next/image';

function Footer() {
	return (
		<footer className=' bg-[#1E1F1C]'>
			<div className=' container text-center text-gray-300 border'>
				<p className='text-xl font-semibold text-gray-300'>
					Find me on any of these platforms.{' '}
				</p>
				<div className=' flex justify-center'>
					<div className=' cursor-pointer'>
						<a href='https://github.com/konstapascal'>
							<Image
								src='/svg/github-square-brands.svg'
								width={40}
								height={40}
							/>
						</a>
					</div>
					<div className=' cursor-pointer'>
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
