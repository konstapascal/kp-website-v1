function BlogSearchBar({ search, setSearch }) {
	return (
		<div>
			<label htmlFor='search' className='sr-only'>
				Search articles by title or tag
			</label>
			<input
				id='search'
				type='text'
				name='search'
				aria-label='Search articles'
				placeholder='Search articles by title or tag'
				className='bg-main-dark w-full px-4 py-2 mt-2'
				onChange={e => setSearch(e.target.value.trim())}
				value={search}
			/>
		</div>
	);
}

export default BlogSearchBar;
