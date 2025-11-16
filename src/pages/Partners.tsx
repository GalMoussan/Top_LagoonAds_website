import React from 'react';
import Card from '../components/Card';

const logos = [
	'SearchLift',
	'ClickSphere',
	'AdMirage',
	'NovaTraffic',
	'PixelBridge',
	'Skyline Media'
];

const Partners: React.FC = () => {
	return (
		<div className="space-y-12">
			<header className="space-y-3 max-w-2xl">
				<p className="text-xs font-semibold uppercase tracking-wide text-lagoon-turquoise">
					Partners & Affiliates
				</p>
				<h1 className="text-3xl sm:text-4xl font-semibold">
					Built for serious affiliates and advertisers
				</h1>
				<p className="text-sm sm:text-base text-slate-300">
					LagoonAds works with selected partners who care about user experience,
					data quality, and long-term collaboration. We&apos;re not a volume
					marketplace — we&apos;re a performance network.
				</p>
			</header>

			{/* Logos showcase */}
			<section className="space-y-4">
				<h2 className="text-sm font-semibold text-slate-200">
					Trusted by growth-focused teams
				</h2>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
					{logos.map((name) => (
						<div
							key={name}
							className="h-16 rounded-3xl border border-white/10 bg-slate-950/60 flex items-center justify-center text-xs sm:text-sm text-slate-300 hover:border-lagoon-blue/60 hover:text-lagoon-blue transition"
						>
							{name}
						</div>
					))}
				</div>
			</section>

			{/* Affiliate / advertiser benefits */}
			<section className="grid gap-6 md:grid-cols-2">
				<Card eyebrow="For affiliates" title="Monetize smarter, not harder">
					<ul className="list-disc list-inside space-y-2">
						<li>Premium search & display offers with proven EPCs.</li>
						<li>Smart routing and pre-filtering to protect your audience.</li>
						<li>Real humans you can ping when you need faster tests.</li>
						<li>Timely payouts with clear terms and no surprises.</li>
						<li>Support for custom tracking and custom parameters.</li>
					</ul>
				</Card>

				<Card eyebrow="For advertisers" title="Scale high-intent traffic safely">
					<ul className="list-disc list-inside space-y-2">
						<li>Access vetted publishers that match your verticals.</li>
						<li>Quality controls and invalid traffic monitoring.</li>
						<li>Granular reporting by source, GEO, and device.</li>
						<li>Partner success team focused on lifetime value.</li>
						<li>Flexible commercial models tailored to your goals.</li>
					</ul>
				</Card>
			</section>

			{/* Secondary CTA */}
			<section className="rounded-4xl border border-white/10 bg-slate-950/70 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
				<div>
					<h2 className="text-lg sm:text-xl font-semibold text-slate-50">
						Want to see if we&apos;re a fit?
					</h2>
					<p className="text-sm text-slate-300 mt-1 max-w-md">
						Share a bit about your traffic or offers, and we&apos;ll reply with
						an honest assessment and next steps — no aggressive sales scripts.
					</p>
				</div>
				<a
					href="/contact"
					className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-lagoon-blue to-lagoon-turquoise px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-soft hover:opacity-95 transition"
				>
					Fill the partner form
				</a>
			</section>
		</div>
	);
};

export default Partners;