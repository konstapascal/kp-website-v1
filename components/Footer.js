import React from 'react';

function Footer() {
	return (
		<footer className=' bg-black pt-20 pb-16'>
			<div className='container text-center mx-auto'>
				<div className='w-full'>
					<h4 className='text-3xl font-semibold text-gray-200'>
						Follow me on social media
					</h4>
					<h5 className='text-lg mb-2 text-gray-400'>
						Find me on any of these platforms.
					</h5>
				</div>
				<hr className='my-6 border-gray-400' />
				<div className='flex flex-wrap items-center md:justify-between justify-center'>
					<div className='w-full md:w-4/12 px-4 mx-auto text-center'>
						<div className='text-sm text-gray-400 font-semibold py-1'>
							Made by{' '}
							<span className='text-green-400 font-semibold'>
								Konstantinos Pascal
							</span>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
