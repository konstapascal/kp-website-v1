function GenericMetaTags({ title, description, author, keywords }) {
	return (
		<>
			{title && <meta name='title' content={title} />}
			{description && <meta name='description' content={description} />}
			{author && <meta name='author' content={author} />}
			{keywords && <meta name='keywords' content={keywords.join(', ')} />}
		</>
	);
}

export default GenericMetaTags;
