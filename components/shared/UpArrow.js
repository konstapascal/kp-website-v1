function UpArrow() {
	return (
		<div
			id='go-up'
			className=' fixed bottom-0 right-0 z-50 p-6 transition-opacity duration-500 opacity-0'>
			<a
				id='go-up-a'
				href='#'
				title='Scroll all the way back up'
				className='transform-gpu hover:scale-110 flex transition-transform duration-200 cursor-default pointer-events-none'>
				<img
					alt='Arrow pointing up'
					href='#'
					src='/svg/arrow-circle-up-solid.svg'
					width={40}
					height={40}
				/>
			</a>
		</div>
	);
}

export default UpArrow;
