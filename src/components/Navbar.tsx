import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navItems = [
	{ to: '/', label: 'Home' },
	{ to: '/how-it-works', label: 'How It Works' },
	{ to: '/partners', label: 'Partners & Affiliates' },
	{ to: '/about', label: 'About' },
	{ to: '/contact', label: 'Contact' }
];

const Navbar: React.FC = () => {
	const [open, setOpen] = useState(false);

	const linkClasses = ({ isActive }: { isActive: boolean }) =>
		`text-sm font-medium transition-colors ${isActive ? 'text-lagoon-turquoise' : 'text-slate-200 hover:text-lagoon-blue'
		}`;

	return (
		<header className="fixed top-0 inset-x-0 z-40 backdrop-blur bg-slate-950/70 border-b border-white/5">
			<nav
				className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16"
				aria-label="Main navigation"
			>
				{/* Logo */}
				<Link
					to="/"
					className="flex items-center gap-2"
					aria-label="LagoonAds home"
				>
					<div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-lagoon-blue to-lagoon-turquoise flex items-center justify-center shadow-soft">
						<span className="text-xs font-bold tracking-tight text-slate-950">
							LA
						</span>
					</div>
					<div className="flex flex-col leading-none">
						<span className="font-semibold text-sm text-slate-50">
							LagoonAds
						</span>
						<span className="text-[11px] text-slate-400">
							Affiliate Intelligence
						</span>
					</div>
				</Link>

				{/* Desktop nav */}
				<div className="hidden md:flex items-center gap-8">
					{navItems.map((item) => (
						<NavLink key={item.to} to={item.to} className={linkClasses}>
							{item.label}
						</NavLink>
					))}
					<Link
						to="/contact"
						className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-lagoon-blue to-lagoon-turquoise px-4 py-2 text-sm font-semibold text-slate-950 shadow-soft hover:opacity-90 transition"
					>
						Get in touch
					</Link>
				</div>

				{/* Mobile menu button */}
				<button
					type="button"
					onClick={() => setOpen((v) => !v)}
					className="md:hidden inline-flex items-center justify-center p-2 rounded-xl border border-white/10 text-slate-100 hover:bg-white/5 transition"
					aria-label="Toggle navigation menu"
				>
					<span className="sr-only">Open main menu</span>
					<svg
						className="h-5 w-5"
						viewBox="0 0 24 24"
						fill="none"
						aria-hidden="true"
					>
						{open ? (
							<path
								d="M6 18L18 6M6 6l12 12"
								stroke="currentColor"
								strokeWidth="1.8"
								strokeLinecap="round"
							/>
						) : (
							<path
								d="M4 7h16M4 12h16M4 17h10"
								stroke="currentColor"
								strokeWidth="1.8"
								strokeLinecap="round"
							/>
						)}
					</svg>
				</button>
			</nav>

			{/* Mobile nav panel */}
			{open && (
				<div className="md:hidden border-t border-white/5 bg-slate-950/95 backdrop-blur">
					<div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2">
						{navItems.map((item) => (
							<NavLink
								key={item.to}
								to={item.to}
								className={({ isActive }) =>
									`block rounded-xl px-3 py-2 text-sm ${isActive
										? 'bg-white/5 text-lagoon-turquoise'
										: 'text-slate-200 hover:bg-white/5'
									}`
								}
								onClick={() => setOpen(false)}
							>
								{item.label}
							</NavLink>
						))}
						<Link
							to="/contact"
							className="mt-1 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-lagoon-blue to-lagoon-turquoise px-4 py-2 text-sm font-semibold text-slate-950 shadow-soft"
							onClick={() => setOpen(false)}
						>
							Get in touch
						</Link>
					</div>
				</div>
			)}
		</header>
	);
};

export default Navbar;