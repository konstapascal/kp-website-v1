export default function blink(element, speed) {
	let blink = true;
	const letter = document.querySelector(`${element}`);

	setInterval(() => {
		if (blink) {
			letter.classList.replace('opacity-100', 'opacity-0');
			blink = false;
		} else {
			letter.classList.replace('opacity-0', 'opacity-100');
			blink = true;
		}
	}, speed);
}
