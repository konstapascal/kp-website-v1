import React from 'react';

function Label({ content }) {
	return (
		<span
			key={`${content}`}
			className='dark:bg-green-600 dark:text-green-100 inline-block px-2 py-1 m-1 text-xs font-bold tracking-wide text-green-700 uppercase transition duration-300 ease-in bg-green-200 rounded'>
			{content}
		</span>
	);
}

export default Label;
