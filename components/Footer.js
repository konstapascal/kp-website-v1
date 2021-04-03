import React from 'react';

function Footer() {
	return (
		<footer className=' bg-black'>
			<div className='container bg-gray-600'>
				<div className='w-full'>
					<p className='text-3xl font-semibold text-gray-300'>
						Follow me on social media
					</p>
					<p className='text-lg mb-2 text-gray-400'>
						Find me on any of these platforms.
					</p>
				</div>
				<hr className='my-6 border-gray-400' />
				<p className='text-lg text-gray-400 font-semibold py-1'>
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
