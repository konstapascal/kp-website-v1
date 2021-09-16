function NoArticleResults({ setSearch }) {
	return (
		<div className='text-center'>
			<p className='text-2xl'>No articles with that tag or title.</p>
			<button
				className='hover:cursor-pointer px-4 py-2 mt-4 text-xl font-semibold text-green-400'
				onClick={() => setSearch('')}>
				Clear search
			</button>
		</div>
	);
}
export default NoArticleResults;
