import React, { useState } from 'react';

export default function Navbar() {
	const [navbarOpen, setNavbarOpen] = useState(false);

	return (
		<>
			<nav className='fixed flex inset-x-0 flex-wrap items-center justify-between px-1 py-2 bg-blue-700 opacity-80'>
				<div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
					<div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
						<a className='font-bold text-3xl leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white'>
							KP
						</a>
						<button
							className='text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
							type='button'
							onClick={() => setNavbarOpen(!navbarOpen)}>
							<i> Menu</i>
						</button>
					</div>
					<div
						className={
							'lg:flex flex-grow items-center' +
							(navbarOpen ? ' flex' : ' hidden')
						}
						id='example-navbar-danger'>
						<ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
							<li className='nav-item'>
								<a
									className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
									href='#pablo'>
									<i className='text-lg leading-lg text-white opacity-75'></i>
									<span className='ml-2'>Home</span>
								</a>
							</li>
							<li className='nav-item'>
								<a
									className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
									href='#pablo'>
									<i className='text-lg leading-lg text-white opacity-75'></i>
									<span className='ml-2'>Projects</span>
								</a>
							</li>
							<li className='nav-item'>
								<a
									className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
									href='#pablo'>
									<i className='text-lg leading-lg text-white opacity-75'></i>
									<span className='ml-2'>About</span>
								</a>
							</li>
							<li className='nav-item'>
								<a
									className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
									href='#pablo'>
									<i className='text-lg leading-lg text-white opacity-75'></i>
									<span className='ml-2'>Blog</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}
