export default function fadeIn(element, seconds) {
	setTimeout(() => {
		document
			.querySelector(`${element}`)
			.classList.replace('opacity-0', 'opacity-100');
	}, seconds);
}
