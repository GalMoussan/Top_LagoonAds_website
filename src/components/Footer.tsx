import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
	return (
		<footer className="border-t border-white/5 bg-slate-950/80 backdrop-blur">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-sm text-slate-400">
				<p>© {new Date().getFullYear()} LagoonAds. All rights reserved.</p>

				<div className="flex flex-wrap items-center gap-4">
					<div className="flex gap-4">
						<Link to="/about" className="hover:text-lagoon-blue transition">
							About
						</Link>
						<Link
							to="/how-it-works"
							className="hover:text-lagoon-blue transition"
						>
							How It Works
						</Link>
						<Link to="/partners" className="hover:text-lagoon-blue transition">
							Partners
						</Link>
						<Link to="/contact" className="hover:text-lagoon-blue transition">
							Contact
						</Link>
					</div>
					<div className="flex gap-3">
						<a
							href="#"
							aria-label="LagoonAds on LinkedIn"
							className="h-8 w-8 rounded-full border border-white/10 flex items-center justify-center hover:border-lagoon-blue hover:text-lagoon-blue transition"
						>
							in
						</a>
						<a
							href="#"
							aria-label="LagoonAds on Twitter"
							className="h-8 w-8 rounded-full border border-white/10 flex items-center justify-center hover:border-lagoon-blue hover:text-lagoon-blue transition"
						>
							<span className="text-xs">X</span>
						</a>
						<a
							href="#"
							aria-label="LagoonAds on Facebook"
							className="h-8 w-8 rounded-full border border-white/10 flex items-center justify-center hover:border-lagoon-blue hover:text-lagoon-blue transition"
						>
							f
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;