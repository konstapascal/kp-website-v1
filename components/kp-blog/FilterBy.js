function FilterBy({ filterBy, setFilterBy }) {
	return (
		<div className=' sm:h-12 sm:justify-start flex items-center justify-center h-8 mt-4'>
			<p className='sm:text-xl text-lg'>Filter By</p>
			<div className='sm:ml-4 ml-2'>
				{/* filter by title */}
				<button
					onClick={() =>
						setFilterBy(prev => ({ byTitle: !prev.byTitle, byLabel: false, byAuthor: false }))
					}
					className={
						'px-2 py-1 text-sm font-semibold tracking-wide text-white uppercase rounded border-2 border-[#05875e] ' +
						(filterBy.byTitle && 'bg-[#05875e]')
					}>
					Title
				</button>

				{/* filter by label */}
				<button
					onClick={() =>
						setFilterBy(prev => ({ byTitle: false, byLabel: !prev.byLabel, byAuthor: false }))
					}
					className={
						'px-2 py-1 text-sm ml-1 font-semibold tracking-wide text-white uppercase rounded border-2 border-[#05875e] ' +
						(filterBy.byLabel && 'bg-[#05875e]')
					}>
					Label
				</button>

				{/* filter by author */}
				<button
					onClick={() =>
						setFilterBy(prev => ({
							byTitle: false,
							byLabel: false,
							byAuthor: !prev.byAuthor
						}))
					}
					className={
						'px-2 py-1 text-sm ml-1 font-semibold tracking-wide text-white uppercase rounded border-2 border-[#05875e] ' +
						(filterBy.byAuthor && 'bg-[#05875e]')
					}>
					Author
				</button>
			</div>
		</div>
	);
}

export default FilterBy;
