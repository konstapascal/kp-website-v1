import React from 'react';

import HomeHero from '../components/kp-website/HomeHero';
import HomeAbout from '../components/kp-website/HomeAbout';
import HomeProjects from '../components/kp-website/HomeProjects';

import Head from 'next/head';
import Footer from '../components/shared/Footer';

export default function Home() {
	return (
		<>
			<Head>
				<title>kp-website</title>
				<link rel='icon' href='/favicon.png' />
			</Head>
			<HomeHero />
			<HomeAbout />
			<HomeProjects />
			<Footer />
		</>
	);
}

// TODO: GIVE CREDIT FOR IMAGES ON WEBSITE
// TODO: FIX MOBILE SPACINGS
// TODO: IMPLEMENT TAILWIND CONTAINERS ON COMPONENTS
// TODO: IMPLEMENT BLOG WITH DYNAMIC ROUTES FOR ARTICLES
