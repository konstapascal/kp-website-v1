import Button from '../shared/Button';
import LanguageSelect from '../shared/LanguageSelect';

import LangContext from '../../context/lang-context';
import blog from '../../data/website-contents/blog-text';
import { useContext } from 'react';

function Hero() {
	const [lang] = useContext(LangContext);
	const { greeting, am, description } = blog[lang].hero;

	return (
		<section id='blog-section' className='bg-main-dark '>
			<nav className=' lg:px-8 lg:pt-8 md:px-6 md:pt-6 flex items-center justify-between px-4 pt-4'>
				<LanguageSelect />
				<Button linkTitle={'Link to the main website'} linkHref={'/'} content={'WEBSITE'} />
			</nav>
			<div className='lg:max-w-3xl lg:px-0 lg:text-left lg:pt-16 lg:pb-20 pt-14 container px-4 pb-16 text-center text-gray-100'>
				<p className=' lg:text-4xl text-3xl font-semibold text-green-400'>{greeting}</p>
				<p className='lg:text-xl mt-4 text-lg text-gray-100'>
					{am} <span className='font-semibold text-green-400'>Konstantinos Pascal</span>
					{description}
				</p>

				{lang === 'no' && (
					<p className='lg:text-lg text-md mt-4 italic text-gray-100'>
						<span className='font-semibold text-green-400'>NB:</span> Artiklene er skrevet kun
						på engelsk!
					</p>
				)}
			</div>
		</section>
	);
}
export default Hero;
