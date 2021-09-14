import Head from 'next/head';

import FacebookMetaTags from '../meta/FacebookMetaTags';
import GenericMetaTags from '../meta/GenericMetaTags';
import TwitterMetaTags from '../meta/TwitterMetaTags';

const meta = {
	title: 'KP Website',
	description:
		'I am a developer with a big interest in web development and a passion for both the frontend and the backend! I am very comfortable with modern web languages, frameworks and technologies such as React, Next and Tailwind.'
};

function HomeHead({ url, labels }) {
	return (
		<Head>
			<title>kp-website</title>
			<link rel='icon' href='/favicon.png' />

			<script async src='https://www.googletagmanager.com/gtag/js?id=G-Z2FSLL37JV' />
			<script src='js/analytics.js' />

			<GenericMetaTags
				description={meta.description}
				author='Konstantinos Pascal'
				keywords={labels}
			/>
			<TwitterMetaTags title={meta.title} description={meta.description} />
			<FacebookMetaTags
				url={url}
				type='website'
				title={meta.title}
				description={meta.description}
			/>
		</Head>
	);
}

export default HomeHead;
