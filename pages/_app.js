import '../styles/tailwind.css';
import '../styles/globals.css';
// import '../styles/nprogress.css';

// import { useEffect } from 'react';
// import useProgressBar from '../lib/useProgressBar';

function MyApp({ Component, pageProps }) {
	// useEffect(() => {
	// 	useProgressBar();
	// }, []);

	return (
		<>
			{/* TODO: DELETE THIS LATER */}
			<div className='text-md fixed bottom-0 right-0 z-50 p-4 font-bold text-center text-black'>
				<div className='mb-1 text-gray-100'>
					<a href='#'>UP</a>
				</div>
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
			<Component {...pageProps} />
		</>
	);
}
export default MyApp;
