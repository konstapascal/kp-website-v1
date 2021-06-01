export default function fadeOutElement(element, delay = 0) {
	setTimeout(() => {
		element.classList.replace('opacity-100', 'opacity-0');
	}, delay);
}
