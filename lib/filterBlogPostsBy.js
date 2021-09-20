export default function filterBlogPostsBy(filterBy, blogPosts, searchTerm) {
	if (filterBy === 'title')
		return [...blogPosts].filter(post => {
			return post.title.toLowerCase().includes(searchTerm.toLowerCase());
		});

	if (filterBy === 'label')
		return [...blogPosts].filter(post => {
			return post.labels.includes(searchTerm.toUpperCase());
		});

	if (filterBy === 'author')
		return [...blogPosts].filter(post => {
			return post.author.toLowerCase().includes(searchTerm.toLowerCase());
		});
}
