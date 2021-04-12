import React from 'react';

function Label({ content }) {
	return (
		<span
			key={`${content}`}
			className='bg-accent-dark text-green-100 inline-block px-2 py-1 m-[2px] text-xs font-bold tracking-wide uppercase rounded'>
			{content}
		</span>
	);
}

export default Label;
