import Link from 'next/link';

const Logo = function ({ linkHref, linkTitle = '', content }) {
	return (
		<Link href={`${linkHref}`}>
			<a
				title={linkTitle}
				className=' lg:text-3xl text-2xl rounded-[0.2rem] font-bold tracking-wide text-green-400 sm:px-4 sm:py-2 '>
				{content}
			</a>
		</Link>
	);
};

export default Logo;
