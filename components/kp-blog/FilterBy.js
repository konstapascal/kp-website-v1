import LangContext from '../../context/lang-context';
import blog from '../../data/website-contents/blog-text';
import { useContext } from 'react';

function FilterBy({ filterBy, setFilterBy }) {
	const [lang] = useContext(LangContext);
	const { title, excerpt, label, author } = blog[lang].articles;

	return (
		<div className=' sm:h-12 sm:justify-start h-8 mt-4'>
			<div className=' sm:justify-start flex justify-center'>
				{/* filter by title */}
				<button
					onClick={() =>
						setFilterBy(prev => ({
							byTitle: !prev.byTitle,
							byExcerpt: false,
							byLabel: false,
							byAuthor: false
						}))
					}
					className={
						'px-2 py-1 text-xs sm:text-sm font-semibold tracking-wide text-white uppercase rounded border-2 border-[#05875e] ' +
						(filterBy.byTitle && 'bg-[#05875e]')
					}>
					{title}
				</button>

				{/* filter by excerpt */}
				<button
					onClick={() =>
						setFilterBy(prev => ({
							byTitle: false,
							byExcerpt: !prev.byExcerpt,
							byLabel: false,
							byAuthor: false
						}))
					}
					className={
						'px-2 py-1 text-xs sm:text-sm ml-1 font-semibold tracking-wide text-white uppercase rounded border-2 border-[#05875e] ' +
						(filterBy.byExcerpt && 'bg-[#05875e]')
					}>
					{excerpt}
				</button>

				{/* filter by label */}
				<button
					onClick={() =>
						setFilterBy(prev => ({
							byTitle: false,
							byExcerpt: false,
							byLabel: !prev.byLabel,
							byAuthor: false
						}))
					}
					className={
						'px-2 py-1 text-xs sm:text-sm ml-1 font-semibold tracking-wide text-white uppercase rounded border-2 border-[#05875e] ' +
						(filterBy.byLabel && 'bg-[#05875e]')
					}>
					{label}
				</button>

				{/* filter by author */}
				<button
					onClick={() =>
						setFilterBy(prev => ({
							byTitle: false,
							byExcerpt: false,
							byLabel: false,
							byAuthor: !prev.byAuthor
						}))
					}
					className={
						'px-2 py-1 text-xs sm:text-sm ml-1 font-semibold tracking-wide text-white uppercase rounded border-2 border-[#05875e] ' +
						(filterBy.byAuthor && 'bg-[#05875e]')
					}>
					{author}
				</button>
			</div>
		</div>
	);
}
export default FilterBy;
