import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import useInView from '../hooks/useInView';

const tiles = [
	{
		label: 'For publishers',
		title: 'Turn raw traffic into reliable revenue',
		body: 'Plug in your search, display, or native placements. We handle smart routing, A/B tests, and yield optimization so your RPM moves up — not sideways.',
		tag: 'Yield & UX in balance'
	},
	{
		label: 'For advertisers',
		title: 'High-intent clicks that actually convert',
		body: 'We qualify traffic before it hits your landing pages, align on KPIs, and cut what doesn’t work fast — so budgets flow to the winners.',
		tag: 'ROAS-driven distribution'
	},
	{
		label: 'Insights',
		title: 'See what your traffic is really doing',
		body: 'Breakdowns by GEO, device, funnel and partner type. Spot the pockets of gold, not just the averages.',
		tag: 'Actionable analytics'
	},
	{
		label: 'Automation',
		title: 'Let the system handle the boring parts',
		body: 'Caps, pacing, day-parting, and anomaly alerts handled by automation — so your team can focus on growth, not spreadsheets.',
		tag: 'Human + AI co-pilot'
	},
	{
		label: 'Partnership',
		title: 'A network that actually feels human',
		body: 'You get signal, pushback, and ideas — not just “send more traffic”. We only scale what both sides are excited about.',
		tag: 'Built on conversations'
	},
	{
		label: 'Roadmap',
		title: 'Growing with you, not just off you',
		body: 'Custom routing logic, private offers, and dedicated lanes for partners that want to push volume with control.',
		tag: 'Co-created growth'
	}
];

const MotionGridSection: React.FC = () => {
	const { ref, isInView } = useInView<HTMLDivElement>();

	return (
		<section ref={ref} className="relative mt-4">
			<div className="relative overflow-hidden rounded-4xl border border-white/10 bg-slate-950/80 shadow-soft px-5 py-6 sm:px-7 sm:py-8">
				{/* Animated grid background */}
				<div className="lagoon-grid-bg" />

				{/* Glow accent */}
				<div className="pointer-events-none absolute -inset-20 bg-gradient-to-tr from-lagoon-blue/25 via-lagoon-turquoise/10 to-transparent opacity-70" />

				{/* Content */}
				<div className="relative space-y-6">
					<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
						<div>
							<p className="text-xs font-semibold uppercase tracking-[0.25em] text-lagoon-turquoise">
								The Lagoon in motion
							</p>
							<h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight">
								Designed for how modern affiliate teams really work
							</h2>
							<p className="mt-2 text-sm text-slate-300 max-w-xl">
								Not just “more offers” or “more traffic” — a connected surface
								where performance, UX, and relationships move together.
							</p>
						</div>

						<div className="flex flex-wrap gap-2">
							<Button variant="secondary" size="sm">
								Explore use cases
							</Button>
							<Button size="sm">Talk to our team</Button>
						</div>
					</div>

					{/* Motion grid */}
					<div className="grid gap-4 md:grid-cols-3 mt-4">
						{tiles.map((tile, index) => (
							<motion.article
								key={tile.title}
								initial={{ opacity: 0, y: 20, scale: 0.96 }}
								animate={
									isInView
										? { opacity: 1, y: 0, scale: 1 }
										: { opacity: 0, y: 20, scale: 0.96 }
								}
								transition={{
									duration: 0.5,
									delay: 0.08 * index,
									ease: [0.22, 1, 0.36, 1]
								}}
								whileHover={{
									y: -6,
									scale: 1.02,
									transition: { duration: 0.18 }
								}}
								whileTap={{ scale: 0.99 }}
								className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-4 flex flex-col justify-between shadow-[0_16px_45px_rgba(15,23,42,0.6)]"
							>
								{/* soft corner glow */}
								<div className="pointer-events-none absolute -top-16 -right-16 h-32 w-32 rounded-full bg-gradient-to-br from-lagoon-blue/40 via-lagoon-turquoise/30 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity" />

								<div className="relative space-y-2">
									<p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
										{tile.label}
									</p>
									<h3 className="text-sm sm:text-base font-semibold text-slate-50">
										{tile.title}
									</h3>
									<p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed">
										{tile.body}
									</p>
								</div>

								<div className="relative mt-4 flex items-center justify-between text-[11px]">
									<span className="inline-flex items-center gap-1 rounded-full border border-lagoon-blue/40 bg-slate-950/80 px-2 py-1 text-[10px] text-lagoon-turquoise">
										<span className="h-1.5 w-1.5 rounded-full bg-lagoon-turquoise/90" />
										{tile.tag}
									</span>
									<span className="text-slate-400 group-hover:text-slate-200 transition-colors">
										Learn more →
									</span>
								</div>
							</motion.article>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default MotionGridSection;