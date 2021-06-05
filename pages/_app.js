import '../styles/tailwind.css';
import '../styles/globals.css';

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
				a.classList.remove('pointer-events-none', 'cursor-default');
			} else {
				fadeOutElement(button);
				a.classList.add('pointer-events-none', 'cursor-default');
			}
		});

		return document.removeEventListener('scroll', buttonEventListener);
	}, []);

	return (
		<>
			<div id='go-up' className=' fixed bottom-0 right-0 p-6 transition duration-500 opacity-0'>
				<a id='go-up-a' href='#' className='flex cursor-default pointer-events-none'>
					<img href='#' src='/svg/arrow-circle-up-solid.svg' width={40} height={40} />
				</a>
			</div>

			{/* TODO: DELETE THIS LATER */}
			<div className='text-md left-0-0 fixed bottom-0 z-50 p-4 font-bold text-center text-black'>
				<p className='sm:hidden px-1 bg-yellow-400 rounded'>XS (0px to 640px)</p>
				<p className='sm:inline-block md:hidden hidden px-1 bg-yellow-400 rounded'>
					SM (640px to 768px)
				</p>
				<p className='sm:hidden md:inline-block lg:hidden hidden px-1 bg-yellow-400 rounded'>
					MD (768px to 1024px)
				</p>
				<p className='lg:inline-block xl:hidden hidden px-1 bg-yellow-400 rounded'>
					LG (1024px to 1280px)
				</p>
				<p className='xl:inline-block 2xl:hidden hidden px-1 bg-yellow-400 rounded'>
					XL (1280px to 1536px)
				</p>
				<span className='2xl:inline-block hidden px-1 bg-yellow-400 rounded'>
					2XL (1536px+)
				</span>
			</div>
			{/* TODO: DELETE THIS LATER */}
			<Component {...pageProps} />
		</>
	);
}
export default MyApp;
