export default function makeAnchorsOpenNewTab(parent) {
	const parent = document.querySelector(parent);
	const anchors = parent.querySelectorAll('a');

	anchors.forEach(a => {
		a.setAttribute('target', '_blank');
		a.setAttribute('rel', 'noopener noreferrer');
	});
}
