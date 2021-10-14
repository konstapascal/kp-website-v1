import { useContext } from 'react';

import LangContext from '../../context/lang-context';

function LanguageSelect() {
	const [lang, setLang] = useContext(LangContext);

	function selectOption(lang) {
		setLang(lang);
		localStorage.setItem('lang', lang);
		document.documentElement.lang = lang;
	}

	return (
		<div className='flex'>
			<a className=' cursor-pointer' onClick={() => selectOption('en')}>
				<img alt='English flag' src='/svg/gb.svg' width={30} />
			</a>
			<a className='ml-3 cursor-pointer' onClick={() => selectOption('no')}>
				<img alt='Norwegian flag' src='/svg/no.svg' width={30} />
			</a>
		</div>
	);
}
export default LanguageSelect;
