import '../styles/tailwind.css';
import '../styles/globals.css';
import Image from 'next/image';
import fadeInElement from '../lib/fadeInElement';
// import '../styles/nprogress.css';

import { useEffect } from 'react';
import fadeOutElement from '../lib/fadeOutElement';
// import useProgressBar from '../lib/useProgressBar';

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		// useProgressBar();
		const button = document.querySelector('#go-up');

		document.addEventListener('scroll', () => {
			window.pageYOffset >= 500 ? fadeInElement(button) : fadeOutElement(button);
		});
	}, []);

	return (
		<>
			<div
				id='go-up'
				className=' fixed bottom-0 right-0 z-50 p-6 transition-opacity duration-500 opacity-0'>
				<a href='#' className='flex'>
					<Image href='#' src='/svg/arrow-circle-up-solid.svg' width={40} height={40} />
				</a>
			</div>

			{/* TODO: DELETE THIS LATER */}
			{/* <div className='text-md left-0-0 fixed bottom-0 z-50 p-4 font-bold text-center text-black'>
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
			</div> */}
			{/* TODO: DELETE THIS LATER */}
			<Component {...pageProps} />
		</>
	);
}
export default MyApp;
