import Head from 'next/head';

import FacebookMetaTags from '../meta/FacebookMetaTags';
import GenericMetaTags from '../meta/GenericMetaTags';
import TwitterMetaTags from '../meta/TwitterMetaTags';

import metadata from '../../data/metadata';

const { title, description } = metadata.website;

function HomeHead({ url, labels }) {
	return (
		<Head>
			<title>kp-website</title>

			<GenericMetaTags
				description={description}
				author='Konstantinos Pascal'
				keywords={labels}
			/>
			<TwitterMetaTags title={title} description={description} />
			<FacebookMetaTags url={url} type='website' title={title} description={description} />
		</Head>
	);
}

export default HomeHead;
