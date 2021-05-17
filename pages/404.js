import React from 'react';

import Footer from '../components/shared/Footer';

import Image from 'next/image';
import { useRouter } from 'next/router';

function Error404() {
	const router = useRouter();

	return (
		<>
			<section className='bg-main-light '>
				<div className='flex flex-col items-center justify-center min-h-screen font-semibold text-gray-100'>
					<div className=' -mt-60 text-center'>
						<p className=' lg:text-6xl text-4xl'>
							<span className='text-accent-light'>404</span> - Page not
							found!
						</p>
						<div
							className='hover:text-accent-light mt-10 cursor-pointer'
							onClick={() => router.back()}>
							<Image
								src='/svg/arrow-circle-left-solid.svg'
								width={40}
								height={40}
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
export default Error404;
