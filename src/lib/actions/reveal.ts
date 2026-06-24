import { browser } from '$app/environment';

interface RevealOptions {
	threshold?: number;
	delay?: number;
}

export function reveal(node: Element, { threshold = 0.12, delay = 0 }: RevealOptions = {}) {
	if (!browser) {
		node.classList.add('reveal--visible');
		return;
	}

	node.classList.add('reveal');

	const observer = new IntersectionObserver(
		([entry]) => {
			if (entry.isIntersecting) {
				const timer = setTimeout(() => {
					node.classList.add('reveal--visible');
				}, delay);
				observer.disconnect();
				return () => clearTimeout(timer);
			}
		},
		{ threshold }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
