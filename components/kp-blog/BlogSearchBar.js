function BlogSearchBar() {
	return (
		<div>
			<label htmlFor='search' className='sr-only'>
				Search articles
			</label>
			<input
				id='search'
				type='text'
				name='search'
				aria-label='Search articles'
				placeholder='Search articles'
				className='bg-main-dark w-full px-4 py-2 mt-2'
			/>
		</div>
	);
}

export default BlogSearchBar;
