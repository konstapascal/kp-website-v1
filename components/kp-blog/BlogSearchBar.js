import FilterBy from './FilterBy';

import LangContext from '../../context/lang-context';
import blog from '../../data/website-contents/blog-text';
import { useContext } from 'react';

function BlogSearchBar({ search, setSearch, filterBy, setFilterBy }) {
	const [lang] = useContext(LangContext);
	const { label, placeholder } = blog[lang].articles;

	return (
		<div>
			<label htmlFor='search' className='sr-only'>
				{label}
			</label>
			<input
				id='search'
				type='text'
				name='search'
				aria-label='Search articles'
				placeholder={placeholder}
				className='bg-main-dark w-full px-4 py-2 mt-2 mb-2'
				onChange={e => setSearch(e.target.value.trim())}
				value={search}
			/>
			<FilterBy filterBy={filterBy} setFilterBy={setFilterBy} />
		</div>
	);
}
export default BlogSearchBar;
