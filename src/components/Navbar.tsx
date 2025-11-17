import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Button from './Button';

const navItems = [
	{ label: 'Overview', to: '/' },
	{ label: 'How it works', to: '/how-it-works' },
	{ label: 'For partners', to: '/partners' },
	{ label: 'Company', to: '/about' },
	{ label: 'Contact', to: '/contact' }
];

const Navbar: React.FC = () => {
	const [open, setOpen] = useState(false);
	const location = useLocation();

	const toggleMenu = () => setOpen((prev) => !prev);
	const closeMenu = () => setOpen(false);

	return (
		<header className="fixed top-0 inset-x-0 z-40">
			{/* Subtle gradient + blur */}
			<div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-transparent" />

			<div className="relative backdrop-blur-xl bg-slate-950/70 border-b border-white/5">
				<nav className="max-w-7xl w-full mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">

					{/* LEFT — Logo */}
					<Link
						to="/"
						onClick={closeMenu}
						className="flex items-center gap-3 group"
					>
						<div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-lagoon-blue to-lagoon-turquoise flex items-center justify-center shadow-lg relative">
							<span className="text-sm font-black tracking-tight text-slate-950">LA</span>
							<span className="pointer-events-none absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
						</div>

						<div className="leading-snug">
							<div className="text-lg font-semibold tracking-tight">LagoonAds</div>
							<div className="hidden sm:block text-[11px] text-slate-400">
								Affiliate performance network
							</div>
						</div>
					</Link>

					{/* RIGHT — nav + CTA + burger */}
					<div className="flex items-center gap-6">

						{/* Desktop nav (now right-aligned) */}
						<div className="hidden md:flex items-center">
							<div className="flex items-center gap-2 rounded-full bg-slate-900/60 px-3 py-2 border border-white/10 shadow-soft">
								{navItems.map((item) => (
									<NavLink
										key={item.to}
										to={item.to}
										onClick={closeMenu}
										className={({ isActive }) =>
											[
												"px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
												isActive
													? "bg-gradient-to-r from-lagoon-blue to-lagoon-turquoise text-slate-950 shadow-md ring-1 ring-lagoon-turquoise/40"
													: "text-slate-300 hover:text-slate-50 hover:bg-white/5"
											].join(" ")
										}
									>
										{item.label}
									</NavLink>
								))}
							</div>
						</div>

						{/* Desktop CTA */}
						<div className="hidden md:block">
							<Link to="/contact">
								<Button size="md" className="text-sm px-5 py-2">
									Talk to our team
								</Button>
							</Link>
						</div>

						{/* Mobile: current page label */}
						<div className="md:hidden text-[11px] text-slate-400">
							{navItems.find((n) => n.to === location.pathname)?.label ?? 'Menu'}
						</div>

						{/* Mobile hamburger */}
						<button
							onClick={toggleMenu}
							className="md:hidden rounded-xl border border-white/10 bg-slate-900/80 p-3 hover:bg-slate-800/80"
						>
							<div className="space-y-1">
								<span
									className={`block w-5 h-0.5 bg-slate-200 transition-transform ${open ? "translate-y-1 rotate-45" : ""
										}`}
								/>
								<span
									className={`block w-5 h-0.5 bg-slate-200 transition-opacity ${open ? "opacity-0" : "opacity-100"
										}`}
								/>
								<span
									className={`block w-5 h-0.5 bg-slate-200 transition-transform ${open ? "-translate-y-1 -rotate-45" : ""
										}`}
								/>
							</div>
						</button>
					</div>
				</nav>

				{/* Mobile dropdown */}
				<div
					className={`
						md:hidden border-t border-white/5 bg-slate-950/95 backdrop-blur-xl 
						transition-all duration-300 overflow-hidden
						${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
					`}
				>
					<div className="px-6 py-4 space-y-3">
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
													"flex items-center justify-between px-4 py-3 rounded-xl transition-colors",
													isActive || active
														? "bg-slate-900 text-slate-50"
														: "text-slate-300 hover:bg-slate-800 hover:text-slate-50"
												].join(" ")
											}
										>
											<span>{item.label}</span>
											{active && (
												<span className="h-1.5 w-1.5 rounded-full bg-lagoon-turquoise" />
											)}
										</NavLink>
									</li>
								);
							})}
						</ul>

						{/* Mobile CTA */}
						<div className="pt-3 border-t border-white/10 flex justify-between items-center">
							<div className="text-[11px] text-slate-400">
								Let’s talk about your traffic.
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