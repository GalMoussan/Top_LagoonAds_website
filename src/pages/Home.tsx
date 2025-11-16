import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import TestimonialCarousel from '../components/TestimonialCarousel';
import GridDistortion from '../components/GridDistortion';

const Home: React.FC = () => {
	return (
		<div className="flex-1 flex flex-col gap-16">
			<div className="space-y-16">
				<section className="relative">
					<div className="relative h-[440px] sm:h-[520px] lg:h-[620px] rounded-4xl overflow-hidden border border-white/10 bg-slate-950/70 shadow-soft">
						<GridDistortion
							imageSrc="https://picsum.photos/1920/1080?grayscale"
							grid={18}
							mouse={0.25}
							strength={0.5}
							relaxation={0.94}
							className="opacity-100"
						/>


						{/* Gradient veil so text is readable but background visible */}
						<div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-lagoon-dark/75 via-slate-950/40 to-lagoon-deep/80" />

						{/* Foreground content */}
						<div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
							<p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-lagoon-turquoise/80 mb-3">
								Welcome to LagoonAds
							</p>

							<h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-3">
								LagoonAds
							</h1>

							<p className="text-lg sm:text-2xl lg:text-3xl font-medium text-slate-200 mb-6">
								Breaking the scales
							</p>

							<p className="max-w-xl text-sm sm:text-base text-slate-300 mb-8">
								A next-generation affiliate network built to squeeze more value from every click
								while keeping your partners and users happy.
							</p>

							<div className="flex flex-wrap justify-center gap-3">
								<Button onClick={() => (window.location.href = '/partners')}>
									Join as an Affiliate
								</Button>
								<Button
									variant="secondary"
									onClick={() => (window.location.href = '/contact')}
								>
									Partner with Us
								</Button>
							</div>
						</div>
					</div>
				</section>


				{/* Hero */}
				<section className="grid gap-10 md:grid-cols-[1.2fr,1fr] items-center">
					<div className="space-y-6">
						<p className="inline-flex items-center gap-2 rounded-full border border-lagoon-blue/30 bg-slate-950/60 px-3 py-1 text-xs text-slate-200 mb-1">
							<span className="inline-block h-1.5 w-1.5 rounded-full bg-lagoon-turquoise animate-pulse" />
							Performance-first affiliate network for search & display traffic
						</p>
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-50">
							Empowering growth through{' '}
							<span className="bg-gradient-to-r from-lagoon-blue to-lagoon-turquoise bg-clip-text text-transparent">
								affiliate innovation
							</span>
						</h1>
						<p className="text-sm sm:text-base text-slate-300 max-w-xl">
							LagoonAds connects premium traffic owners with high-intent offers,
							using smart routing and human expertise so every click finds its
							best destination.
						</p>

						<div className="flex flex-wrap items-center gap-4">
							<Link to="/partners">
								<Button>Join as an Affiliate</Button>
							</Link>
							<Link to="/contact">
								<Button variant="secondary">Partner with us</Button>
							</Link>
						</div>


						<dl className="mt-4 grid grid-cols-3 gap-4 max-w-md text-xs sm:text-sm">
							<div>
								<dt className="text-slate-400">Monthly clicks managed</dt>
								<dd className="font-semibold text-slate-50">25M+</dd>
							</div>
							<div>
								<dt className="text-slate-400">Average eCPM uplift</dt>
								<dd className="font-semibold text-slate-50">+18%</dd>
							</div>
							<div>
								<dt className="text-slate-400">Active partners</dt>
								<dd className="font-semibold text-slate-50">120+</dd>
							</div>
						</dl>
					</div>

					{/* Right side visual */}
					<div className="relative">
						<div className="absolute -inset-6 blur-3xl bg-gradient-to-br from-lagoon-blue/40 via-lagoon-turquoise/30 to-slate-900/0 pointer-events-none" />
						<div className="relative rounded-4xl border border-white/10 bg-slate-950/80 shadow-soft p-5 space-y-4">
							<p className="text-xs font-semibold uppercase text-lagoon-turquoise">
								Live snapshot (demo)
							</p>
							<div className="space-y-3 text-xs text-slate-200">
								<div className="flex items-center justify-between">
									<span>Global clicks (24h)</span>
									<span className="font-semibold">842,193</span>
								</div>
								<div className="flex items-center justify-between">
									<span>Optimized redirects</span>
									<span className="font-semibold text-lagoon-turquoise">
										97.3%
									</span>
								</div>
								<div className="flex items-center justify-between">
									<span>Avg. RPM uplift</span>
									<span className="font-semibold text-lagoon-blue">+19.4%</span>
								</div>
							</div>
							<div className="mt-4 h-24 rounded-2xl bg-gradient-to-r from-lagoon-blue/30 via-lagoon-turquoise/30 to-slate-800/40 flex items-end overflow-hidden">
								<div className="flex w-full h-full items-end gap-1 p-2">
									{Array.from({ length: 24 }).map((_, i) => (
										<div
											key={i}
											className="flex-1 rounded-t-full bg-lagoon-turquoise/80"
											style={{
												height: `${30 + Math.random() * 70}%`,
												opacity: 0.8 + Math.random() * 0.2
											}}
										/>
									))}
								</div>
							</div>
							<p className="text-[11px] text-slate-400">
								* Demo chart for illustration. Actual data is visible in your
								LagoonAds dashboard.
							</p>
						</div>
					</div>
				</section>

				{/* Feature highlights */}
				<section className="space-y-6">
					<div className="flex items-end justify-between gap-4">
						<div>
							<p className="text-xs font-semibold uppercase tracking-wide text-lagoon-turquoise">
								Why LagoonAds
							</p>
							<h2 className="text-2xl sm:text-3xl font-semibold text-slate-50 mt-1">
								Built for performance-first partners
							</h2>
						</div>
						<Link
							to="/how-it-works"
							className="hidden sm:inline-flex text-xs text-lagoon-blue hover:text-lagoon-turquoise transition"
						>
							See how it works →
						</Link>
					</div>

					<div className="grid gap-5 md:grid-cols-3">
						<Card title="Smart routing" eyebrow="Monetization Engine">
							LagoonAds analyzes intent signals and device patterns to route each
							click to the best-performing offer, not just the highest bid.
						</Card>
						<Card title="Human + AI optimization" eyebrow="Performance Stack">
							Our team pairs human affiliate expertise with automation — A/B
							testing, anomaly alerts, and daily optimization cycles.
						</Card>
						<Card title="Transparent collaboration" eyebrow="Partnership">
							Clear reporting, honest feedback, and a shared goal: sustainable
							long-term growth for both publishers and advertisers.
						</Card>
					</div>
				</section>

				{/* Testimonials */}
				<section className="space-y-4">
					<TestimonialCarousel />
				</section>

				{/* Newsletter CTA */}
				<section className="rounded-4xl border border-lagoon-blue/30 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 shadow-soft p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6">
					<div className="flex-1">
						<p className="text-xs font-semibold uppercase tracking-wide text-lagoon-turquoise mb-1">
							Stay ahead
						</p>
						<h2 className="text-xl sm:text-2xl font-semibold">
							Get affiliate insights straight from the Lagoon
						</h2>
						<p className="text-sm text-slate-300 mt-2 max-w-md">
							Monthly digest with real tests, monetization tactics, and upcoming
							opportunities. No spam, only value.
						</p>
					</div>
					<form
						className="w-full md:w-auto flex flex-col sm:flex-row gap-3"
						onSubmit={(e) => e.preventDefault()}
					>
						<label className="sr-only" htmlFor="newsletter-email">
							Email
						</label>
						<input
							id="newsletter-email"
							type="email"
							required
							placeholder="you@affiliate.com"
							className="flex-1 rounded-full border border-white/10 bg-slate-950/70 px-4 py-2.5 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-lagoon-blue focus:ring-offset-2 focus:ring-offset-slate-950"
						/>
						<Button type="submit" className="whitespace-nowrap">
							Join newsletter
						</Button>
					</form>
				</section>
			</div>
		</div>
	);
};

export default Home;