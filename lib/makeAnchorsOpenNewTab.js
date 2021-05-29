export default function makeAnchorsOpenNewTab(parent) {
	const element = document.querySelector(parent);
	const anchors = element.querySelectorAll('a');

	anchors.forEach(a => {
		a.setAttribute('target', '_blank');
		a.setAttribute('rel', 'noopener noreferrer');
	});
}
