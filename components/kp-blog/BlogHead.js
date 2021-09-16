import Head from 'next/head';

import FacebookMetaTags from '../meta/FacebookMetaTags';
import GenericMetaTags from '../meta/GenericMetaTags';
import TwitterMetaTags from '../meta/TwitterMetaTags';

import metadata from '../../data/metadata';

function BlogHead({ uniqueLabels, url }) {
	const { title, description } = metadata.website;

	return (
		<Head>
			<title>kp-blog</title>
			<link rel='icon' href='/favicon.png' />

			<GenericMetaTags
				description={description}
				author='Konstantinos Pascal'
				keywords={uniqueLabels}
			/>
			<TwitterMetaTags title={title} description={description} />
			<FacebookMetaTags url={url} type='blog' title={title} description={description} />
		</Head>
	);
}

export default BlogHead;
