import { useContext } from 'react';
import LangContext from '../../context/lang-context';
import shared from '../../data/website-contents/shared-text';

function Footer() {
	const [lang] = useContext(LangContext);
	const { paragraph, by } = shared[lang].footer;

	return (
		<footer className=' bg-main-dark pt-16 pb-20'>
			<div className=' container max-w-3xl text-center text-gray-100'>
				<p className='text-xl font-semibold text-gray-100'>{paragraph}</p>
				<div className=' flex justify-center my-6'>
					<a
						title={
							lang === 'no' ? 'Lenke til min Github profil' : 'Link to my GitHub profile'
						}
						className='transform-gpu hover:scale-110 flex items-center mr-1 transition-transform duration-200'
						href='https://github.com/konstapascal'
						target='_blank'
						rel='noopener noreferrer'>
						<img
							alt='GitHub Logo'
							src='/svg/github-square-brands.svg'
							width={40}
							height={40}
						/>
					</a>
					<a
						title={
							lang === 'no' ? 'Lenke til min Github profil' : 'Link to my GitHub profile'
						}
						className=' transform-gpu hover:scale-110 flex items-center mx-1 transition-transform duration-200'
						href='https://www.linkedin.com/in/konstapascal'
						target='_blank'
						rel='noopener noreferrer'>
						<img alt='LinkedIn Logo' src='/svg/linkedin-brands.svg' width={40} height={40} />
					</a>
					<a
						title='Link to my Twitter profile'
						className=' transform-gpu hover:scale-110 flex items-center ml-1 transition-transform duration-200'
						href='https://twitter.com/konstapascal'
						target='_blank'
						rel='noopener noreferrer'>
						<img
							alt='Twitter Logo'
							src='/svg/twitter-square-brands.svg'
							width={40}
							height={40}
						/>
					</a>
				</div>

				<p className='text-base font-semibold text-gray-400'>
					{by}
					<a
						title='Link to my main website'
						href='https://konstapascal.dev'
						className='font-semibold text-green-400'>
						Konstantinos Pascal
					</a>
				</p>
				<p className='my-4 text-base font-semibold text-gray-400'>
					2021 - {new Date().getFullYear()}
				</p>
			</div>
		</footer>
	);
}
export default Footer;
