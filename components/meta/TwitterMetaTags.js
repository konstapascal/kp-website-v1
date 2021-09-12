function TwitterMetaTags({ title, description }) {
	return (
		<>
			<meta name='twitter:card' content='summary_large_image' />
			<meta name='twitter:title' content={title} />
			<meta name='twitter:description' content={description} />
			<meta name='twitter:site' content='@konstapascal' />
			<meta name='twitter:image' content='/img/kp-thumbnail.jpg' />
			<meta name='twitter:image:alt' content='Image of the KP logo' />
		</>
	);
}
export default TwitterMetaTags;
