import React from 'react';
import { Link } from 'react-router-dom';
import ElectricBorder from './ElectricBorder';
import useInView from '../hooks/useInView';

type Feature = {
	title: string;
	eyebrow: string;
	description: string;
	hint?: string;
};

const FEATURES: Feature[] = [
	{
		title: 'Smart routing',
		eyebrow: 'Monetization Engine',
		description:
			'LagoonAds analyzes intent signals and device patterns to route each click to the offer with the highest expected value, not just the top bidder.',
		hint: '+10–25% RPM uplift reported by top partners.'
	},
	{
		title: 'Human + AI optimization',
		eyebrow: 'Performance Stack',
		description:
			'Automation runs 24/7 — A/B testing, anomaly alerts, pacing — while our team steps in where nuance and relationships matter most.',
		hint: 'Daily feedback loops keep your feeds and traffic aligned.'
	},
	{
		title: 'Transparent collaboration',
		eyebrow: 'Partnership',
		description:
			'Clean reporting, no black boxes, and honest conversations about what is and isn’t working — so we can scale together with confidence.',
		hint: 'Shared dashboards and clear escalation paths.'
	}
];

const FeaturesShowcase: React.FC = () => {
	const { ref, isInView } = useInView<HTMLDivElement>();

	return (
		<section
			ref={ref}
			className={`
        transition-all duration-700 ease-out space-y-10
        ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
      `}
		>
			{/* Header */}
			<div className="flex items-end justify-between gap-4">
				<div>
					<p className="text-xs font-semibold uppercase tracking-wide text-lagoon-turquoise">
						Why LagoonAds
					</p>
					<h2 className="text-3xl sm:text-4xl font-semibold text-slate-50 mt-1">
						Built for performance-first partners
					</h2>
					<p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl">
						We treat every click like an asset: routed, scored, and optimized to find its best-performing destination.
					</p>
				</div>

				<Link
					to="/how-it-works"
					className="hidden sm:inline-flex text-xs text-lagoon-blue hover:text-lagoon-turquoise transition-colors"
				>
					See how it works →
				</Link>
			</div>

			{/* Feature Cards */}
			<div className="grid gap-6 md:grid-cols-3">
				{FEATURES.map((f, i) => (
					<ElectricBorder
						key={i}
						color="#48c5ff"
						speed={1.2}
						chaos={0.6}
						thickness={2}
						style={{
							borderRadius: 20,
							padding: '1.25rem',
							background: 'rgba(10, 15, 30, 0.65)',
							backdropFilter: 'blur(10px)'
						}}
						className="hover:scale-[1.025] transition-transform duration-300"
					>
						<div className="space-y-3">
							<p className="text-[11px] uppercase tracking-wide text-lagoon-turquoise">
								{f.eyebrow}
							</p>
							<h3 className="text-lg sm:text-xl font-semibold text-slate-50">
								{f.title}
							</h3>
							<p className="text-sm text-slate-300">{f.description}</p>
							{f.hint && (
								<p className="text-[11px] text-lagoon-turquoise/90">{f.hint}</p>
							)}
						</div>
					</ElectricBorder>
				))}
			</div>
		</section>
	);
};

export default FeaturesShowcase;