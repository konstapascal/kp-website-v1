export default function makeAnchorsNewTab() {
	const article = document.querySelector('#article-content');
	const anchors = article.querySelectorAll('a');

	anchors.forEach(a => {
		a.setAttribute('target', '_blank');
		a.setAttribute('rel', 'noopener noreferrer');
	});
}
