import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Button from './Button';

const navItems = [
	{ label: 'Home', to: '/' },
	{ label: 'How it works', to: '/how-it-works' },
	{ label: 'Partners', to: '/partners' },
	{ label: 'About', to: '/about' },
	{ label: 'Contact', to: '/contact' }
];

const Navbar: React.FC = () => {
	const [open, setOpen] = useState(false);
	const location = useLocation();

	const toggleMenu = () => setOpen((prev) => !prev);
	const closeMenu = () => setOpen(false);

	return (
		<header className="fixed top-0 inset-x-0 z-40">
			{/* Glassy background */}
			<div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-transparent" />
			<div className="backdrop-blur-xl border-b border-white/5 bg-slate-950/60">
				<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
					{/* Left: Logo */}
					<div className="flex items-center gap-2">
						<Link
							to="/"
							onClick={closeMenu}
							className="flex items-center gap-2 group"
						>
							<div className="relative h-8 w-8 rounded-2xl bg-gradient-to-br from-lagoon-blue to-lagoon-turquoise shadow-soft flex items-center justify-center">
								<span className="text-xs font-black tracking-tight text-slate-950">
									LA
								</span>
								<span className="pointer-events-none absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
							</div>
							<div className="flex flex-col leading-tight">
								<span className="text-sm sm:text-base font-semibold tracking-tight">
									LagoonAds
								</span>
								<span className="hidden sm:inline text-[11px] text-slate-400">
									Breaking the scales
								</span>
							</div>
						</Link>
					</div>

					{/* Center: Desktop nav */}
					<ul className="hidden md:flex items-center gap-6 text-xs sm:text-sm">
						{navItems.map((item) => (
							<li key={item.to}>
								<NavLink
									to={item.to}
									onClick={closeMenu}
									className={({ isActive }) =>
										[
											'relative inline-flex items-center gap-1 transition-colors',
											'text-slate-300 hover:text-slate-50',
											isActive ? 'text-slate-50' : ''
										].join(' ')
									}
								>
									{({ isActive }) => (
										<>
											<span>{item.label}</span>
											{isActive && (
												<span className="absolute -bottom-1 left-0 right-0 mx-auto h-px w-5/6 bg-gradient-to-r from-lagoon-blue via-lagoon-turquoise to-lagoon-blue rounded-full" />
											)}
										</>
									)}
								</NavLink>
							</li>
						))}
					</ul>

					{/* Right: CTA + burger */}
					<div className="flex items-center gap-3">
						{/* Desktop CTA */}
						<div className="hidden sm:block">
							<Link to="/contact">
								<Button size="sm">Let&apos;s talk</Button>
							</Link>
						</div>

						{/* Mobile current page hint */}
						<div className="md:hidden text-[11px] text-slate-400 mr-1">
							{navItems.find((n) => n.to === location.pathname)?.label ??
								'Menu'}
						</div>

						{/* Mobile menu button */}
						<button
							type="button"
							onClick={toggleMenu}
							className="md:hidden inline-flex items-center justify-center rounded-full border border-white/10 bg-slate-900/70 p-2 text-slate-200 hover:bg-slate-800/80 hover:border-lagoon-blue/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-lagoon-blue focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
							aria-label="Toggle navigation"
							aria-expanded={open}
						>
							<span className="sr-only">Open main menu</span>
							<div className="space-y-1.5">
								<span
									className={`block h-0.5 w-4 rounded-full bg-current transform transition-transform ${open ? 'translate-y-1.5 rotate-45' : ''
										}`}
								/>
								<span
									className={`block h-0.5 w-4 rounded-full bg-current transition-opacity ${open ? 'opacity-0' : 'opacity-100'
										}`}
								/>
								<span
									className={`block h-0.5 w-4 rounded-full bg-current transform transition-transform ${open ? '-translate-y-1.5 -rotate-45' : ''
										}`}
								/>
							</div>
						</button>
					</div>
				</nav>

				{/* Mobile dropdown */}
				<div
					className={`
						md:hidden border-t border-white/5 bg-slate-950/90 backdrop-blur-xl
						transition-[max-height,opacity] duration-300 ease-out overflow-hidden
						${open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}
					`}
				>
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 space-y-3">
						<ul className="flex flex-col gap-1 text-sm">
							{navItems.map((item) => {
								const active = location.pathname === item.to;
								return (
									<li key={item.to}>
										<NavLink
											to={item.to}
											onClick={closeMenu}
											className={({ isActive }) =>
												[
													'flex items-center justify-between rounded-2xl px-3 py-2',
													'transition-colors',
													isActive || active
														? 'bg-slate-900/80 text-slate-50'
														: 'text-slate-300 hover:bg-slate-900/60 hover:text-slate-50'
												].join(' ')
											}
										>
											<span>{item.label}</span>
											{(active || location.pathname === item.to) && (
												<span className="h-1.5 w-1.5 rounded-full bg-lagoon-turquoise" />
											)}
										</NavLink>
									</li>
								);
							})}
						</ul>

						<div className="pt-2 border-t border-white/5 flex justify-between items-center gap-3">
							<div className="text-[11px] text-slate-400">
								<span className="block">Need a custom setup?</span>
								<span className="block text-slate-200">
									Let&apos;s talk about your traffic.
								</span>
							</div>
							<Link to="/contact" onClick={closeMenu}>
								<Button size="sm">Contact</Button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;