function Footer() {
	return (
		<footer className=' bg-main-dark pt-16 pb-20 border-t-2 border-green-400'>
			<div className=' container max-w-3xl text-center text-gray-100'>
				<p className='text-xl font-semibold text-gray-100'>
					Find me on any of these platforms.{' '}
				</p>
				<div className=' flex justify-center my-6'>
					<a
						className='transform-gpu hover:scale-110 flex items-center mr-1 transition-transform duration-200'
						href='https://github.com/konstapascal'
						target='_blank'
						rel='noopener noreferrer'>
						<img src='/svg/github-square-brands.svg' width={40} height={40} />
					</a>
					<a
						className=' transform-gpu hover:scale-110 flex items-center mx-1 transition-transform duration-200'
						href='https://duckduckgo.com/'
						target='_blank'
						rel='noopener noreferrer'>
						<img src='/svg/linkedin-brands.svg' width={40} height={40} />
					</a>
					<a
						className=' transform-gpu hover:scale-110 flex items-center ml-1 transition-transform duration-200'
						href='https://twitter.com/konstapascal'
						target='_blank'
						rel='noopener noreferrer'>
						<img src='/svg/twitter-square-brands.svg' width={40} height={40} />
					</a>
				</div>

				<p className='text-base font-semibold text-gray-400'>
					Made by <span className='font-semibold text-green-400'>Konstantinos Pascal</span>
				</p>
				<p class="text-base font-semibold text-gray-400 my-4">2021 - {new Date().getFullYear()}</p>
			</div>
		</footer>
	);
}
export default Footer;
