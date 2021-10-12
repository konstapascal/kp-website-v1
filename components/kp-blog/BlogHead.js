import Head from 'next/head';

import FacebookMetaTags from '../meta/FacebookMetaTags';
import GenericMetaTags from '../meta/GenericMetaTags';
import TwitterMetaTags from '../meta/TwitterMetaTags';

import metadata from '../../data/metadata';

const { title, description } = metadata.website;

function BlogHead({ uniqueLabels, url }) {
	return (
		<Head>
			<title>kp-blog</title>

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
