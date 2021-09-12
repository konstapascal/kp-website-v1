import '../styles/tailwind.css';
import '../styles/globals.css';
import '../styles/prism-syntax-theme.css';

import { useEffect } from 'react';

import fadeInElement from '../lib/fadeInElement';
import fadeOutElement from '../lib/fadeOutElement';

// import '../styles/nprogress.css';
// import useProgressBar from '../lib/useProgressBar';

function MyApp({ Component, pageProps }) {
	// useEffect(() => {
	// 	useProgressBar();
	// }, []);

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

			<div
				id='go-up'
				className=' fixed bottom-0 right-0 z-50 p-6 transition-opacity duration-500 opacity-0'>
				<a
					id='go-up-a'
					href='#'
					title='Scroll all the way back up.'
					className='transform-gpu hover:scale-110 flex transition-transform duration-200 cursor-default pointer-events-none'>
					<img
						alt='Arrow pointing up.'
						href='#'
						src='/svg/arrow-circle-up-solid.svg'
						width={40}
						height={40}
					/>
				</a>
			</div>
		</>
	);
}
export default MyApp;
