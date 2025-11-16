import React from 'react';

const About: React.FC = () => {
	return (
		<div className="space-y-10">
			<header className="space-y-3 max-w-2xl">
				<p className="text-xs font-semibold uppercase tracking-wide text-lagoon-turquoise">
					About LagoonAds
				</p>
				<h1 className="text-3xl sm:text-4xl font-semibold">
					A network born inside affiliate operations
				</h1>
				<p className="text-sm sm:text-base text-slate-300">
					LagoonAds was created by performance marketers who spent years on both
					sides of the table — managing traffic and buying it. We built the
					network we always wanted to use ourselves.
				</p>
			</header>

			<section className="grid gap-8 md:grid-cols-[1.3fr,0.9fr] items-start">
				<div className="space-y-5 text-sm text-slate-300 leading-relaxed">
					<p>
						We believe a good affiliate partnership feels like a calm, clear
						lagoon — not a stormy ocean. That means transparent communication,
						shared targets, and systems that make it easy to grow together.
					</p>
					<p>
						Our team has experience across search monetization, display, native,
						and lead generation. We&apos;ve seen how much revenue is left on the
						table when data is siloed, reporting is confusing, or there&apos;s
						no one willing to do the hard, boring optimization work.
					</p>
					<p>
						LagoonAds exists to fix that. We combine automation with thoughtful,
						human review so you can move fast without losing control. Every
						connection we create — between publisher and advertiser — is treated
						like a long-term asset, not a quick win.
					</p>

					<div className="grid gap-4 sm:grid-cols-3">
						<div>
							<p className="text-xs text-slate-400">Founded</p>
							<p className="font-semibold text-slate-50">2024</p>
						</div>
						<div>
							<p className="text-xs text-slate-400">Team</p>
							<p className="font-semibold text-slate-50">Ops, Tech, Growth</p>
						</div>
						<div>
							<p className="text-xs text-slate-400">Focus</p>
							<p className="font-semibold text-slate-50">
								Search & performance
							</p>
						</div>
					</div>
				</div>

				{/* Founder card */}
				<aside className="rounded-4xl border border-white/5 bg-slate-950/70 shadow-soft p-6 space-y-4">
					<div className="flex items-center gap-4">
						<div className="h-14 w-14 rounded-3xl bg-gradient-to-br from-lagoon-blue to-lagoon-turquoise flex items-center justify-center text-lg font-semibold text-slate-950">
							G
						</div>
						<div>
							<p className="text-sm font-semibold text-slate-50">
								Gal, Founder
							</p>
							<p className="text-xs text-slate-400">
								Performance marketer & product builder
							</p>
						</div>
					</div>
					<blockquote className="text-sm text-slate-200 border-l-2 border-lagoon-blue/70 pl-3">
						“I wanted a network where I&apos;d actually enjoy being a partner —
						where people pick up the phone, dashboards are clear, and everyone
						is aligned on one thing: making good traffic more valuable.”
					</blockquote>

					<div className="text-xs text-slate-400">
						<p className="font-semibold text-slate-300 mb-1">Our values</p>
						<ul className="list-disc list-inside space-y-1">
							<li>Clarity over hype</li>
							<li>Partnership over one-off wins</li>
							<li>Continuous, compounding optimization</li>
						</ul>
					</div>
				</aside>
			</section>
		</div>
	);
};

export default About;