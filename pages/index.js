import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<title>kp-website</title>
				<link rel='icon' href='/favicon.png' />
			</Head>
			<Hero />
			<About />
			<Projects />
			<Footer />
		</>
	);
}

// TODO: GIVE CREDIT FOR IMAGES ON WEBSITE
// TODO: FIX MOBILE SPACINGS
// TODO: IMPLEMENT TAILWIND CONTAINERS ON COMPONENTS
// TODO: IMPLEMENT BLOG WITH DYNAMIC ROUTES FOR ARTICLES
