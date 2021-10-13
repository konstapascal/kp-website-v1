import Head from 'next/head';
import { useEffect, useState } from 'react';

import Footer from '../components/shared/Footer';
import UpArrow from '../components/shared/UpArrow';
import LangContext from '../context/lang-context';
import fadeInElement from '../lib/fadeInElement';
import fadeOutElement from '../lib/fadeOutElement';

import '../styles/globals.css';
import '../styles/prism-syntax-theme.css';
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }) {
	const [lang, setLang] = useState('en');

	// initial website language based on localstorage or preference
	useEffect(() => {
		const lang = localStorage.getItem('lang');

		if (lang) {
			setLang(lang);
			document.documentElement.lang = lang;
			return;
		}

		if (navigator.languages.includes('no')) {
			setLang('no');
			document.documentElement.lang = 'no';
			localStorage.setItem('lang', 'no');
		}
	}, []);

	// logic to fade in and out the up button
	useEffect(() => {
		const button = document.querySelector('#go-up');
		const a = button.querySelector('#go-up-a');

		const buttonEventListener = document.addEventListener('scroll', () => {
			if (window.pageYOffset >= 500) {
				fadeInElement(button);
				if (a.classList.contains('pointer-events-none')) {
					a.classList.remove('pointer-events-none', 'cursor-default');
				}
			} else {
				fadeOutElement(button);
				if (!a.classList.contains('pointer-events-none')) {
					a.classList.add('pointer-events-none', 'cursor-default');
				}
			}
		});

		return document.removeEventListener('scroll', buttonEventListener);
	}, []);

	return (
		<>
			<LangContext.Provider value={[lang, setLang]}>
				<Component {...pageProps} />
				<Footer />
			</LangContext.Provider>

			{/* shared meta tags, on all pages */}
			<Head>
				<meta charSet='utf-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.png' />
			</Head>

			<UpArrow />
		</>
	);
}

export default MyApp;
