export default function fadeInElement(element, delay = 0) {
	setTimeout(() => {
		element.classList.replace('opacity-0', 'opacity-100');
	}, delay);
}
