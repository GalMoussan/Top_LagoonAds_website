import React, { useEffect, useRef, useState } from 'react';

const useInView = <T extends HTMLElement>() => {
	const ref = useRef<T | null>(null);
	const [isInView, setIsInView] = useState(false);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsInView(true);
					observer.unobserve(entry.target);
				}
			},
			{
				threshold: 0.18,
				rootMargin: '0px 0px -10% 0px'
			}
		);

		observer.observe(el);
		return () => observer.disconnect();
	}, []);

	return { ref, isInView };
};

export default useInView;