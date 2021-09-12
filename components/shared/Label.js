function Label({ content }) {
	return (
		<span className='first:ml-0 last:mr-0 inline-block px-2 py-1 m-1 text-xs font-bold tracking-wide text-white uppercase bg-[#05875e] rounded'>
			{content}
		</span>
	);
}
export default Label;
