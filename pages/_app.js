import '../styles/tailwind.css';
import '../styles/globals.css';

import { useEffect } from 'react';

import Footer from '../components/shared/Footer';

function MyApp({ Component, pageProps }) {
	// dark by default
	useEffect(() => {
		document.querySelector('html').classList.add('dark');
	}, []);

	function handleClick() {
		const html = document.querySelector('html');
		const toggle = document.querySelector('#toggle');

		toggle.classList.toggle('left-0');
		toggle.classList.toggle('right-0');
		toggle.classList.toggle('ml-1');
		toggle.classList.toggle('mr-1');

		html.classList.toggle('dark');
	}

	return (
		<>
			{/* TODO: DELETE THIS LATER */}
			<div className='text-md fixed bottom-0 right-0 z-50 p-2 font-bold text-center text-black'>
				<p className='sm:hidden px-1 bg-yellow-400 rounded'>
					XS (0px to 640px)
				</p>
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

			{/* DARKMODE TOGGLE */}
			<span
				className='bottom-10 right-2 fixed z-50'
				onClick={() => handleClick()}>
				<span className=' block w-12 h-6 bg-gray-400 rounded-full'></span>
				<span
					id='toggle'
					className='absolute inset-y-0 left-0 w-4 h-4 mt-1 ml-1 bg-white rounded-full'></span>
			</span>

			<Component {...pageProps} />
			<Footer />
		</>
	);
}
export default MyApp;
