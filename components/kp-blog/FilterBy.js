function FilterBy({ filterBy, setFilterBy }) {
	return (
		<div className=' flex items-center justify-start h-16 mt-4'>
			<p className=' text-xl'>Filter By</p>
			<div className='ml-4'>
				{/* filter by title */}
				<button
					onClick={() => setFilterBy({ byTitle: true, byLabel: false, byAuthor: false })}
					className={
						'px-2 py-1 text-sm font-semibold tracking-wide text-white uppercase rounded border-2 border-[#05875e] ' +
						(filterBy.byTitle ? 'bg-[#05875e]' : '')
					}>
					Title
				</button>

				{/* filter by label */}
				<button
					onClick={() => setFilterBy({ byTitle: false, byLabel: true, byAuthor: false })}
					className={
						'px-2 py-1 text-sm ml-1 font-semibold tracking-wide text-white uppercase rounded border-2 border-[#05875e] ' +
						(filterBy.byLabel ? 'bg-[#05875e]' : '')
					}>
					Label
				</button>

				{/* filter by author */}
				<button
					onClick={() => setFilterBy({ byTitle: false, byLabel: false, byAuthor: true })}
					className={
						'px-2 py-1 text-sm ml-1 font-semibold tracking-wide text-white uppercase rounded border-2 border-[#05875e] ' +
						(filterBy.byAuthor ? 'bg-[#05875e]' : '')
					}>
					Author
				</button>
			</div>
		</div>
	);
}

export default FilterBy;
