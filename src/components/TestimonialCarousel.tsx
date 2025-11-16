import React, { useEffect, useState } from 'react';

interface Testimonial {
	name: string;
	role: string;
	company: string;
	quote: string;
}

const testimonials: Testimonial[] = [
	{
		name: 'Maya Cohen',
		role: 'Head of Growth',
		company: 'SearchFlow Media',
		quote:
			'LagoonAds helped us double our search monetization in under 90 days. Their team actually understands traffic quality.'
	},
	{
		name: 'Alex Ramirez',
		role: 'Performance Lead',
		company: 'BrightWave Labs',
		quote:
			'The transparency and reporting are next-level. We always know where performance stands and what to test next.'
	},
	{
		name: 'Liam Parker',
		role: 'Affiliate Partner',
		company: 'LP Performance',
		quote:
			'Fast onboarding, clear communication, and payouts always on time. LagoonAds is my go-to network for search traffic.'
	}
];

const TestimonialCarousel: React.FC = () => {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const id = setInterval(() => {
			setIndex((prev) => (prev + 1) % testimonials.length);
		}, 7000);
		return () => clearInterval(id);
	}, []);

	const current = testimonials[index];

	const goTo = (i: number) => {
		setIndex(i);
	};

	return (
		<section
			aria-label="Testimonials"
			className="rounded-4xl bg-gradient-to-br from-slate-900/80 to-slate-950/95 border border-white/5 shadow-soft p-6 sm:p-8 flex flex-col md:flex-row gap-6 items-center"
		>
			<div className="flex-1">
				<p className="text-xs font-semibold uppercase tracking-wide text-lagoon-turquoise mb-2">
					What partners say
				</p>
				<p className="text-xl sm:text-2xl font-semibold text-slate-50 mb-3">
					“{current.quote}”
				</p>
				<p className="text-sm text-slate-300">
					<span className="font-semibold text-slate-100">{current.name}</span>{' '}
					· {current.role} at {current.company}
				</p>
			</div>

			<div className="flex flex-col items-center gap-3 w-full md:w-auto">
				<div className="flex gap-2">
					{testimonials.map((t, i) => (
						<button
							key={t.name}
							onClick={() => goTo(i)}
							aria-label={`Show testimonial from ${t.name}`}
							className={`h-2.5 w-6 rounded-full transition ${i === index ? 'bg-lagoon-blue' : 'bg-slate-600 hover:bg-slate-500'
								}`}
						/>
					))}
				</div>
				<p className="text-xs text-slate-400">
					{index + 1} / {testimonials.length}
				</p>
			</div>
		</section>
	);
};

export default TestimonialCarousel;