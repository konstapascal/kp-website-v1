function NoArticleResults({ setSearch, filterBy: { byTitle, byLabel, byAuthor } }) {
	return (
		<div className='text-center'>
			<p className='text-2xl'>
				{!byTitle && !byLabel && !byAuthor && 'No articles with that title'}

				{byTitle && 'No articles with that title'}
				{byLabel && 'No articles with that label'}
				{byAuthor && 'No articles by that author'}
			</p>
			<button
				className='hover:cursor-pointer px-4 py-2 mt-4 text-xl font-semibold text-green-400'
				onClick={() => setSearch('')}>
				Clear search
			</button>
		</div>
	);
}
export default NoArticleResults;
