import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import TestimonialCarousel from '../components/TestimonialCarousel';
import GridDistortion from '../components/GridDistortion';
import useInView from '../hooks/useInView';
import MotionGridSection from '../components/MotionGridSection';
import FeaturesShowcase from '../components/FeaturesShowcase';

import hero1 from '../assets/image1.jpg';
import hero2 from '../assets/image2.jpg';
import hero6 from '../assets/image6.jpg';
import hero10 from '../assets/image10.jpg';

const heroImages = [hero10, hero1, hero2, hero6];

// Static bar heights for the mini-chart (so it doesn't jump on every render)
const metricBars = [38, 72, 54, 83, 41, 69, 57, 92, 48, 76, 60, 88];

const AnalyticsPanel: React.FC = () => {
	const { ref, isInView } = useInView<HTMLDivElement>();

	return (
		<div
			ref={ref}
			className={`relative transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
				}`}
		>
			{/* Glow */}
			<div className="absolute -inset-10 blur-3xl bg-gradient-to-br from-lagoon-blue/40 via-lagoon-turquoise/25 to-slate-900/0 pointer-events-none" />

			{/* Card */}
			<div className="relative rounded-4xl border border-white/10 bg-slate-950/80 shadow-soft p-5 space-y-4 overflow-hidden">
				{/* Header strip */}
				<div className="flex items-center justify-between gap-2">
					<p className="text-[11px] font-semibold uppercase tracking-wide text-lagoon-turquoise">
						Live snapshot · demo
					</p>
					<span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-300">
						<span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
						Updating in real time
					</span>
				</div>

				{/* Metrics */}
				<div className="space-y-3 text-xs text-slate-200">
					<div className="flex items-center justify-between">
						<span>Global clicks (24h)</span>
						<span className="font-semibold tabular-nums tracking-tight">842,193</span>
					</div>
					<div className="flex items-center justify-between">
						<span>Optimized redirects</span>
						<span className="font-semibold text-lagoon-turquoise tabular-nums">
							97.3%
						</span>
					</div>
					<div className="flex items-center justify-between">
						<span>Avg. RPM uplift</span>
						<span className="font-semibold text-lagoon-blue tabular-nums">
							+19.4%
						</span>
					</div>
				</div>

				{/* Animated mini chart */}
				<div className="mt-4 rounded-2xl bg-gradient-to-tr from-slate-900/60 via-lagoon-blue/20 to-lagoon-turquoise/20 px-3 py-2">
					<div className="flex items-end gap-1.5 h-24">
						{metricBars.map((h, i) => (
							<div
								key={i}
								className="lagoon-bar flex-1 rounded-t-full bg-gradient-to-t from-lagoon-blue/70 via-lagoon-turquoise/80 to-cyan-300"
								style={{
									height: `${h}%`,
									animationDelay: `${i * 0.08}s`
								}}
							/>
						))}
					</div>
					<div className="mt-2 flex items-center justify-between text-[10px] text-slate-400">
						<span>Traffic normalized · UTC</span>
						<span className="text-slate-300">Last 24 hours</span>
					</div>
				</div>

				<p className="text-[11px] text-slate-400">
					* Sample data for illustration. Your LagoonAds dashboard shows live
					numbers by source, GEO, and device.
				</p>
			</div>
		</div>
	);
};

const TestimonialsSection: React.FC = () => {
	const { ref, isInView } = useInView<HTMLElement>();

	return (
		<section
			ref={ref}
			className={`space-y-4 transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
				}`}
		>
			<div className="rounded-4xl border border-white/10 bg-slate-950/70 shadow-soft px-5 py-6 sm:px-7 sm:py-7">
				<div className="flex items-center justify-between gap-4 mb-4">
					<div>
						<p className="text-xs font-semibold uppercase tracking-wide text-lagoon-turquoise">
							What partners say
						</p>
						<h2 className="text-lg sm:text-xl font-semibold text-slate-50">
							Trusted by performance-driven teams
						</h2>
					</div>
					<div className="hidden sm:flex items-center gap-2 text-[11px] text-slate-400">
						<span className="h-6 w-6 rounded-full bg-lagoon-blue/20 flex items-center justify-center">
							<span className="text-base">★</span>
						</span>
						<span>
							Avg. partner rating{' '}
							<span className="font-semibold text-slate-100">4.8/5</span>
						</span>
					</div>
				</div>

				<TestimonialCarousel />
			</div>
		</section>
	);
};

const NewsletterSection: React.FC = () => {
	const { ref, isInView } = useInView<HTMLElement>();

	return (
		<section
			ref={ref}
			className={`transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
				}`}
		>
			<div className="relative rounded-4xl border border-lagoon-blue/40 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 shadow-soft p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 overflow-hidden">
				{/* soft glow */}
				<div className="pointer-events-none absolute -inset-16 bg-gradient-to-r from-lagoon-blue/20 via-lagoon-turquoise/10 to-transparent opacity-60" />
				<div className="relative flex-1">
					<p className="text-xs font-semibold uppercase tracking-wide text-lagoon-turquoise mb-1">
						Stay ahead
					</p>
					<h2 className="text-xl sm:text-2xl font-semibold">
						Get affiliate insights straight from the Lagoon
					</h2>
					<p className="text-sm text-slate-300 mt-2 max-w-md">
						Monthly digest with real tests, monetization tactics, and upcoming
						opportunities — curated from live campaigns. No spam, only value.
					</p>
				</div>
				<form
					className="relative w-full md:w-auto flex flex-col sm:flex-row gap-3"
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
						className="flex-1 rounded-full border border-white/10 bg-slate-950/80 px-4 py-2.5 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-lagoon-blue focus:ring-offset-2 focus:ring-offset-slate-950"
					/>
					<Button type="submit" className="whitespace-nowrap">
						Join newsletter
					</Button>
				</form>
			</div>
		</section>
	);
};

const Home: React.FC = () => {
	const [heroIndex, setHeroIndex] = React.useState(0);

	React.useEffect(() => {
		const id = setInterval(() => {
			setHeroIndex(prev => (prev + 1) % heroImages.length);
		}, 60000); // 60s per hero

		return () => clearInterval(id);
	}, []);

	return (
		<div className="flex-1 flex flex-col gap-16">
			<div className="space-y-16">
				{/* GridDistortion hero */}
				<section className="relative">
					<div className="relative h-[440px] sm:h-[520px] lg:h-[620px] rounded-4xl overflow-hidden border border-white/10 bg-slate-950/70 shadow-soft">
						<GridDistortion
							imageSrc={heroImages[heroIndex]}
							grid={18}
							mouse={0.25}
							strength={0.5}
							relaxation={0.94}
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
								A next-generation affiliate network built to squeeze more value
								from every click while keeping your partners and users happy.
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

				{/* Main hero with stats + analytics panel */}
				<section className="grid gap-10 md:grid-cols-[1.2fr,1fr] items-center">
					<div className="space-y-6">
						<p className="inline-flex items-center gap-2 rounded-full border border-lagoon-blue/30 bg-slate-950/60 px-3 py-1 text-xs text-slate-200 mb-1">
							<span className="inline-block h-1.5 w-1.5 rounded-full bg-lagoon-turquoise animate-pulse" />
							Performance-first affiliate network for search &amp; display traffic
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

					{/* Right side visual – upgraded analytics */}
					<AnalyticsPanel />
				</section>

				{/* Feature highlights – upgraded */}
				<FeaturesShowcase />

				{/* Testimonials – framed + animated */}
				<TestimonialsSection />

				{/* Motion grid section – Lagoon in motion */}
				<MotionGridSection />

				{/* Newsletter CTA – animated */}
				<NewsletterSection />
			</div>
		</div>
	);
};

export default Home;