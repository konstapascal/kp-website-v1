export default function blink(element, speed) {
	let blink = true;

	setInterval(() => {
		if (blink) {
			element.classList.replace('opacity-0', 'opacity-100');
			blink = false;
		} else {
			element.classList.replace('opacity-100', 'opacity-0');
			blink = true;
		}
	}, speed);
}
