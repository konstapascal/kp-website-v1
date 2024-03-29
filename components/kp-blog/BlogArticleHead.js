import Head from 'next/head';

import FacebookMetaTags from '../meta/FacebookMetaTags';
import GenericMetaTags from '../meta/GenericMetaTags';
import TwitterMetaTags from '../meta/TwitterMetaTags';

function BlogArticleHead({ title, excerpt, author, labels, url }) {
	return (
		<Head>
			<title>kp-blog - {title}</title>

			<GenericMetaTags title={title} description={excerpt} author={author} keywords={labels} />
			<TwitterMetaTags title={title} description={excerpt} />
			<FacebookMetaTags url={url} type='article' title={title} description={excerpt} />
		</Head>
	);
}

export default BlogArticleHead;
