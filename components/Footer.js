import React from 'react';

function Footer() {
	return (
		<footer className=' bg-black'>
			<div className='container text-center pt-20 pb-14'>
				<div className=''>
					<p className='text-2xl font-semibold text-gray-300'>
						Follow me on social media
					</p>
					<p className='text-md mb-2 text-gray-400'>
						Find me on any of these platforms.
					</p>
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
