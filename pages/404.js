function Error404() {
	return (
		<>
			<section className='bg-main-dark '>
				<div className='relative flex flex-col items-center justify-center min-h-screen font-semibold text-gray-100'>
					<div
						id='watermark'
						className=' text-main-light whitespace-nowrap  absolute text-[6rem] sm:text-[8rem] md:text-[10rem] font-extrabold top-[22.5%] lg:text-[10rem] text-center opacity-50 select-none'>
						<p>ERROR 404</p>
						<p>PAGE NOT FOUND!</p>
					</div>
					<div className=' top-[27.5%] sm:top-[30%] md:top-[32.5%] absolute text-center'>
						<p className=' lg:text-6xl md:text-5xl text-4xl'>
							Error <span className='text-accent-light'>404</span> - Page
							not found!
						</p>
					</div>
				</div>
			</section>
		</>
	);
}
export default Error404;
