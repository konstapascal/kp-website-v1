function FacebookMetaTags({ url, type, title, description }) {
	return (
		<>
			<meta name='og:url' content={url} />
			<meta name='og:type' content={type} />
			<meta name='og:title' content={title} />
			<meta name='og:description' content={description} />
			<meta name='og:image' content='https://konstapascal.dev/img/kp-thumbnail.jpg' />
		</>
	);
}
export default FacebookMetaTags;
