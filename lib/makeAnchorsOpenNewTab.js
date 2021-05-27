export default function makeAnchorsOpenNewTab(parent) {
	const article = document.querySelector(parent);
	const anchors = article.querySelectorAll('a');

	anchors.forEach(a => {
		a.setAttribute('target', '_blank');
		a.setAttribute('rel', 'noopener noreferrer');
	});
}
