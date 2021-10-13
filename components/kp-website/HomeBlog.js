import Link from 'next/link';
import Label from '../shared/Label';

import LangContext from '../../context/lang-context';
import website from '../../data/website-contents/website-text';
import { useContext } from 'react';

function Blog({ uniqueLabels }) {
	const [lang] = useContext(LangContext);
	const { title, paragraph, paragraph_2, blog } = website[lang].blog;

	return (
		<section className=' bg-main-light lg:pb-28 px-4 pb-16'>
			<div className=' lg:max-w-3xl container text-center text-gray-100'>
				<Link href='/blog'>
					<h3 className='lg:text-5xl inline-block text-4xl font-semibold text-green-400 uppercase cursor-pointer'>
						{title}
					</h3>
				</Link>

				<div className='text-md md:text-lg lg:text-xl mt-8 leading-relaxed text-gray-100'>
					<p>
						{paragraph}
						<Link href='/blog'>
							<a
								title='Link to my blog website'
								className='hover:underline font-semibold text-green-400 cursor-pointer'>
								{blog}!
							</a>
						</Link>
					</p>
					<p className='mt-2'>{paragraph_2}</p>
				</div>

				<div className='mt-6'>
					{uniqueLabels.map(label => (
						<Label
							key={`${label}-${Math.floor(Math.random() * 1000) + 1}`}
							content={`${label}`}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

export default Blog;
