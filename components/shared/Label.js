import React from 'react';

function Label({ content }) {
	return (
		<span
			key={`${content}`}
			className='inline-block px-2 py-1 mx-1 text-xs font-semibold text-green-600 uppercase bg-green-200 rounded'>
			{content}
		</span>
	);
}

export default Label;
