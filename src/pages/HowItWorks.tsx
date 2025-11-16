import React from 'react';
import Button from '../components/Button';

const steps = [
	{
		title: '1. Connect your traffic or offers',
		desc: 'Publishers plug in their traffic sources; advertisers share their feeds or offers with clear KPIs and targeting rules.'
	},
	{
		title: '2. Configure goals & guardrails',
		desc: 'We define your performance goals, GEOs, verticals, and quality thresholds to protect brand and user experience.'
	},
	{
		title: '3. Smart routing & testing',
		desc: 'Our engine routes traffic to the best-fit destinations and continuously tests variations to find new winners.'
	},
	{
		title: '4. Daily optimization loop',
		desc: 'We monitor performance, spot anomalies, and adjust bids, caps, and routing in collaboration with your team.'
	},
	{
		title: '5. Transparent reporting',
		desc: 'You get clean stats, breakdowns by source and segment, and insights you can actually act on.'
	},
	{
		title: '6. Scale with confidence',
		desc: 'Once performance is stable, we scale volume gradually while maintaining quality and partner satisfaction.'
	}
];

const HowItWorks: React.FC = () => {
	return (
		<div className="space-y-12">
			{/* Header */}
			<header className="space-y-3 max-w-2xl">
				<p className="text-xs font-semibold uppercase tracking-wide text-lagoon-turquoise">
					How it Works
				</p>

				<h1 className="text-3xl sm:text-4xl font-semibold">
					A clear path from click to value
				</h1>

				<p className="text-sm sm:text-base text-slate-300">
					LagoonAds keeps the complexity under the surface. For you, it’s a simple flow:
					plug in your traffic or offers, and we handle routing, optimization, and reporting.
				</p>
			</header>

			{/* Steps */}
			<section className="relative">
				{/* Vertical dotted line (desktop) */}
				<div className="hidden md:block absolute inset-x-8 top-6 bottom-6 border-l border-dashed border-lagoon-blue/40" />

				<div className="space-y-6">
					{steps.map((step, idx) => (
						<div
							key={step.title}
							className="relative grid md:grid-cols-[auto,1fr] gap-4 items-start"
						>
							{/* Step number */}
							<div className="flex items-center md:flex-col md:items-center md:pt-1">
								<div className="
                  h-8 w-8 rounded-2xl 
                  bg-gradient-to-br from-lagoon-blue to-lagoon-turquoise
                  flex items-center justify-center 
                  text-xs font-semibold text-slate-950 
                  shadow-soft mr-3 md:mr-0
                ">
									{idx + 1}
								</div>
							</div>

							{/* Step card */}
							<div className="
                rounded-3xl bg-slate-950/70 
                border border-white/5 
                p-4 
                hover:border-lagoon-blue/60 
                transition-colors
              ">
								<h2 className="text-base sm:text-lg font-semibold mb-1">
									{step.title}
								</h2>
								<p className="text-sm text-slate-300">{step.desc}</p>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Final CTA */}
			<section className="
        rounded-4xl 
        border border-lagoon-blue/40 
        bg-gradient-to-r 
        from-lagoon-blue/20 
        via-lagoon-turquoise/15 
        to-slate-950 
        shadow-soft 
        p-6 sm:p-8 
        flex flex-col md:flex-row 
        items-center justify-between 
        gap-4
      ">
				<div>
					<h2 className="text-xl sm:text-2xl font-semibold text-slate-50">
						Ready to plug into LagoonAds?
					</h2>

					<p className="text-sm text-slate-200 mt-1 max-w-md">
						Whether you're an affiliate with traffic or an advertiser with offers,
						we'll guide you through a quick, human onboarding process.
					</p>
				</div>

				<div className="flex gap-3">
					<Button onClick={() => (window.location.href = '/contact')}>
						Talk to our team
					</Button>

					<Button
						variant="secondary"
						onClick={() => (window.location.href = '/partners')}
					>
						View partner benefits
					</Button>
				</div>
			</section>
		</div>
	);
};

export default HowItWorks;