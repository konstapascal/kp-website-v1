import '../styles/tailwind.css';
import '../styles/globals.css';

import Footer from '../components/shared/Footer';

function MyApp({ Component, pageProps }) {
	return (
		<>
			{/* TODO: DELETE THIS LATER */}
			<div className='fixed bottom-0 right-0 z-50 text-md font-bold text-black p-2 text-center'>
				<p className='sm:hidden rounded px-1 bg-yellow-400 p-1'>
					XS <p className='text-sm'>(0px to 640px)</p>
				</p>
				<p className='hidden sm:inline-block md:hidden rounded px-1 bg-yellow-400'>
					SM <p className='text-sm'>(640px to 768px)</p>
				</p>
				<p className='hidden sm:hidden md:inline-block lg:hidden rounded px-1 bg-yellow-400'>
					MD <p className='text-sm'>(768px to 1024px)</p>
				</p>
				<p className='hidden lg:inline-block xl:hidden rounded px-1 bg-yellow-400'>
					LG <p className='text-sm'>(1024px to 1280px)</p>
				</p>
				<p className='hidden xl:inline-block 2xl:hidden rounded px-1 bg-yellow-400'>
					XL <p className='text-sm'>(1280px to 1536px)</p>
				</p>
				<p className='hidden 2xl:inline-block rounded px-1 bg-yellow-400'>
					2XL <p className='text-sm'>(1536px+)</p>
				</p>
			</div>
			{/* TODO: DELETE THIS LATER */}

			<Component {...pageProps} />
			<Footer />
		</>
	);
}

export default MyApp;
