import NProgress from 'nprogress';
import Router from 'next/router';

export default function useProgressBar() {
	NProgress.configure({
		minimum: 0.2,
		trickleRate: 0.04,
		trickleSpeed: 600
	});

	const delay = 250; // ms
	let timer;

	const load = () => {
		timer = setTimeout(function () {
			NProgress.start();
		}, delay);
	};

	const stop = () => {
		clearTimeout(timer);
		NProgress.done();
	};

	Router.events.on('routeChangeStart', () => load());
	Router.events.on('routeChangeComplete', () => stop());
	Router.events.on('routeChangeError', () => stop());
}
