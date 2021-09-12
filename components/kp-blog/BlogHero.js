import Button from '../shared/Button';
// import Logo from '../shared/Logo';

function Hero() {
	return (
		<section id='blog-section' className='bg-main-dark '>
			<nav className=' lg:px-8 lg:pt-8 md:px-6 md:pt-6 flex items-center justify-end px-4 pt-4'>
				{/* <Logo linkHref={'/blog'} content={'KP-BLOG'} /> */}
				<Button linkTitle={'Link to the main website'} linkHref={'/'} content={'WEBSITE'} />
			</nav>
			<div className='lg:max-w-3xl lg:px-0 lg:text-left lg:pt-16 lg:pb-20 pt-14 container px-4 pb-16 text-center text-gray-100'>
				<p className=' lg:text-4xl text-3xl font-semibold text-green-400'>
					Welcome to my blog!
				</p>
				<p className='lg:text-xl mt-4 text-lg text-gray-100'>
					I am <span className='font-semibold text-green-400'>Konstantinos Pascal</span> and
					this is my writing corner on the web. Here you can expect articles on Javascript and
					other random topics, for both begginers and advanced!
				</p>
			</div>
		</section>
	);
}
export default Hero;
