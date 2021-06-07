import Button from '../shared/Button';
import Logo from '../shared/Logo';

function Hero() {
	return (
		<section id='blog-section' className='bg-main-dark border-b-2 border-green-400'>
			<nav className=' lg:px-8 lg:pt-8 md:px-6 md:pt-6 flex items-center justify-between px-4 pt-4'>
				<Logo linkHref={'/blog'} content={'KP-BLOG'} />
				<Button linkHref={'/'} content={'WEBSITE'} />
			</nav>
			<div className='lg:max-w-3xl lg:px-0 lg:pt-14 lg:pb-16 lg:text-left container px-4 pt-10 pb-12 text-center text-gray-100'>
				<p className=' lg:text-4xl text-3xl font-semibold text-green-400'>
					Welcome to my blog!
				</p>
				<p className='lg:text-xl mt-4 text-lg text-gray-100'>
					Here you can expect weekly articles on Javascript, aimed at both begginers and
					advanced!
				</p>
			</div>
		</section>
	);
}
export default Hero;
