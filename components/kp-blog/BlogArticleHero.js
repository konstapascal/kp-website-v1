import Button from '../shared/Button';
// import Logo from '../shared/Logo';
import Label from '../shared/Label';
import formatDate from '../../lib/formatDate';
import ReadTime from '../shared/ReadTime';

function ArticleHero({ articleDetails: { last_edited, read_time, title, author, date, labels } }) {
	return (
		<section id='blog-section' className='bg-main-dark '>
			<nav className=' lg:px-8 lg:pt-8 md:px-6 md:pt-6 flex items-center justify-end px-4 pt-4'>
				{/* <Logo linkHref={'/blog'} content={'KP-BLOG'} /> */}
				<Button
					linkTitle={'Link back to the main website.'}
					linkHref={'/'}
					content={'WEBSITE'}
				/>
			</nav>
			<div className='lg:max-w-3xl lg:px-0 lg:text-left lg:pt-16 lg:pb-20 pt-14 container px-4 pb-16 text-center text-gray-100'>
				<p className=' text-5xl font-semibold text-gray-100'>{title}</p>
				<p className=' mt-4 text-lg text-gray-400'>
					by
					<span className='hover:underline font-semibold text-green-400 cursor-pointer'>
						{` ${author} `}
					</span>
					on <span>{formatDate(date)}</span>
				</p>
				<div className='mt-4'>
					{labels.map(label => {
						return (
							<Label
								key={`${label}-` + Math.floor(Math.random() * 1000) + 1}
								content={label}
							/>
						);
					})}
				</div>
				<div className='lg:justify-between flex items-center justify-center mt-4 text-base text-gray-400'>
					{last_edited && (
						<span className='mr-6 italic'>{`Edited ${formatDate(last_edited)}`}</span>
					)}
					<span className=' flex items-center'>
						<ReadTime read_time={read_time} />
					</span>
				</div>
			</div>
		</section>
	);
}
export default ArticleHero;
