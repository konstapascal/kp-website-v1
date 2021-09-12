import Link from 'next/link';

function Button({ linkHref, linkTitle, content }) {
	return (
		<Link href={`${linkHref}`}>
			<a
				title={linkTitle}
				className='text-sm hover:scale-105 transform-gpu transition-transform duration-200 lg:text-lg  px-4 py-2 font-semibold tracking-wider text-gray-100  border-2 border-green-400 rounded-[0.2rem]'>
				{content}
			</a>
		</Link>
	);
}

export default Button;
