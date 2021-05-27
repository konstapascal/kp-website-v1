export default function fadeInElement(element, delay) {
	setTimeout(() => {
		element.classList.replace('opacity-0', 'opacity-100');
	}, delay);
}
