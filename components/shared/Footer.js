import Image from 'next/image';

function Footer() {
	return (
		<footer className=' bg-main-dark pt-16 pb-20 border-t-2 border-green-400'>
			<div className=' container text-center text-gray-100'>
				<p className='text-xl font-semibold text-gray-100'>
					Find me on any of these platforms.{' '}
				</p>
				<div className=' flex justify-center gap-2 my-6'>
					<a
						className=''
						href='https://github.com/konstapascal'
						target='_blank'
						rel='noopener noreferrer'>
						<Image
							src='/svg/github-square-brands.svg'
							width={40}
							height={40}
						/>
					</a>
					<a
						className=''
						href='https://duckduckgo.com/'
						target='_blank'
						rel='noopener noreferrer'>
						<Image
							src='/svg/linkedin-brands.svg'
							href='#'
							width={40}
							height={40}
						/>
					</a>
				</div>

				<p className='text-base font-semibold text-gray-400'>
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
