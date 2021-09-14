function NoArticleResults({ setSearch }) {
	return (
		<div className='text-center'>
			<p className='text-2xl'>No articles with that tag or title.</p>
			<div className=' flex justify-center mt-6'>
				<img
					src='/svg/times-solid.svg'
					alt='React Logo'
					title='React Logo'
					width={60}
					height={60}
				/>
			</div>
			<button
				className='hover:cursor-pointer hover:text-green-400 mt-6 text-xl font-semibold'
				onClick={() => setSearch('')}>
				Clear search
			</button>
		</div>
	);
}
export default NoArticleResults;
