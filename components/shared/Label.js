function Label({ content }) {
	return (
		<span className='first:ml-0 last:mr-0 inline-block px-2 py-1 m-1 text-xs font-bold tracking-wide text-green-100 uppercase bg-green-600 rounded'>
			{content}
		</span>
	);
}
export default Label;
