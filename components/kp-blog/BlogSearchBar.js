import FilterBy from './FilterBy';

function BlogSearchBar({ search, setSearch, filterBy, setFilterBy }) {
	return (
		<div>
			<label htmlFor='search' className='sr-only'>
				Search articles by title, excerpt, label or author
			</label>
			<input
				id='search'
				type='text'
				name='search'
				aria-label='Search articles'
				placeholder='Search articles by title, excerpt, label or author'
				className='bg-main-dark w-full px-4 py-2 mt-2'
				onChange={e => setSearch(e.target.value.trim())}
				value={search}
			/>
			<FilterBy filterBy={filterBy} setFilterBy={setFilterBy} />
		</div>
	);
}
export default BlogSearchBar;
