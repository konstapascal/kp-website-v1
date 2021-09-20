import 'tailwindcss/tailwind.css';

import '../styles/prism-syntax-theme.css';
import '../styles/globals.css';

import { useEffect } from 'react';

import fadeInElement from '../lib/fadeInElement';
import fadeOutElement from '../lib/fadeOutElement';
import UpArrow from '../components/shared/UpArrow';
import Footer from '../components/shared/Footer';

function MyApp({ Component, pageProps }) {
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
			<Component {...pageProps} />

			<Footer />
			<UpArrow />
		</>
	);
}
export default MyApp;
