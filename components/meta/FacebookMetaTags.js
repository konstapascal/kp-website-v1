function FacebookMetaTags({ url, type, title, description }) {
	return (
		<>
			<meta property='og:url' content={url} />
			<meta property='og:type' content={type} />
			<meta property='og:title' content={title} />
			<meta property='og:description' content={description} />
			<meta property='og:image' content='https://konstapascal.dev/img/kp-thumbnail.jpg' />
		</>
	);
}
export default FacebookMetaTags;
