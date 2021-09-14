import Head from 'next/head';

import FacebookMetaTags from '../meta/FacebookMetaTags';
import GenericMetaTags from '../meta/GenericMetaTags';
import TwitterMetaTags from '../meta/TwitterMetaTags';

const meta = {
	title: 'KP Blog',
	description:
		'I am Konstantinos Pascal and this is my writing corner on the web. You can expect articles on both Javascript and other random topics, aimed at both begginers and more advanced developers!'
};

function BlogHead({ uniqueLabels, url }) {
	return (
		<Head>
			<title>kp-blog</title>
			<link rel='icon' href='/favicon.png' />

			<GenericMetaTags
				description={meta.description}
				author='Konstantinos Pascal'
				keywords={uniqueLabels}
			/>
			<TwitterMetaTags title={meta.title} description={meta.description} />
			<FacebookMetaTags
				url={url}
				type='blog'
				title={meta.title}
				description={meta.description}
			/>
		</Head>
	);
}

export default BlogHead;
