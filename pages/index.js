import HomeHero from '../components/kp-website/HomeHero';
import HomeAbout from '../components/kp-website/HomeAbout';
import HomeProjects from '../components/kp-website/HomeProjects';
import HomeBlog from '../components/kp-website/HomeBlog';

import Head from 'next/head';
import Footer from '../components/shared/Footer';

export default function Home() {
	return (
		<>
			<Head>
				<title>kp-website</title>
				<link rel='icon' href='/favicon.png' />
				<script async src='https://www.googletagmanager.com/gtag/js?id=G-Z2FSLL37JV' />
				<script src='js/analytics.js' />
			</Head>

			<HomeHero />

			<HomeAbout />
			<HomeProjects />
			<HomeBlog />

			<Footer />
		</>
	);
}
