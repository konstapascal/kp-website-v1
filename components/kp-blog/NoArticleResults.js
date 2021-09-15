function NoArticleResults({ setSearch }) {
	return (
		<div className='text-center'>
			<p className='text-2xl'>No articles with that tag or title.</p>
			<button
				className='hover:cursor-pointer hover:text-green-400 mt-6 text-xl font-semibold'
				onClick={() => setSearch('')}>
				Clear search
			</button>
		</div>
	);
}
export default NoArticleResults;
