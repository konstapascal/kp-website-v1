function ReadTime({ read_time }) {
	return (
		<span className='flex items-center'>
			<img
				src='/svg/hourglass-regular.svg'
				alt='Hourglass Icon'
				title='Hourglass Icon'
				width={15}
				height={15}
			/>
			<span className='ml-2 italic'>{read_time}</span>
		</span>
	);
}
export default ReadTime;
