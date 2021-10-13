import { useRouter } from 'next/router';
import { useContext } from 'react';

import LangContext from '../context/lang-context';
import shared from '../data/website-contents/shared-text';

function Error404() {
	const [lang] = useContext(LangContext);
	const { error, error_msg, back } = shared[lang].notfound;

	const router = useRouter();

	return (
		<>
			<section className='bg-main-dark '>
				<div className='relative flex flex-col items-center justify-center min-h-screen font-semibold text-gray-100'>
					<div
						id='watermark'
						className=' text-main-light whitespace-nowrap  absolute text-[6rem] sm:text-[8rem] md:text-[10rem] font-extrabold top-[22.5%] lg:text-[10rem] text-center opacity-50 select-none'>
						<p>{error.toUpperCase()} 404</p>
						<p>{error_msg.toUpperCase()}</p>
					</div>
					<div className=' top-[27.5%] sm:top-[30%] md:top-[32.5%] absolute text-center'>
						<p className=' lg:text-6xl md:text-5xl text-4xl'>
							{error} <span className='text-accent-light'>404</span> - {error_msg}
						</p>

						<div className='mt-40'>
							<a
								title='Go back to the previous page'
								className=' hover:underline hover:text-green-400 text-2xl font-semibold text-gray-100 cursor-pointer'
								onClick={() => router.back()}>
								{back}
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
export default Error404;
