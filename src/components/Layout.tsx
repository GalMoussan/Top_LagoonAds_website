import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import DotGrid from './DotGrid';

const Layout: React.FC = () => {
	const location = useLocation();

	return (
		<div className="relative min-h-screen bg-lagoon-dark bg-lagoon-radial text-slate-50 overflow-hidden">
			{/* Interactive dot grid background */}
			<DotGrid
				dotSize={9}
				gap={22}
				baseColor="#020617"
				activeColor="#38bdf8"
				proximity={110}
				shockRadius={220}
				shockStrength={3.5}
				maxSpeed={2200}
				returnDuration={1.8}
				className="opacity-18"
			/>

			{/* Foreground app content */}
			<div className="relative z-10 flex flex-col min-h-screen">
				<Navbar />

				<main className="flex-1 pt-20 pb-12">
					<motion.div
						key={location.pathname}
						initial={{ opacity: 0, y: 14 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.38, ease: 'easeOut' }}
					>
						<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
							<Outlet />
						</div>
					</motion.div>
				</main>

				<Footer />
			</div>
		</div>
	);
};

export default Layout;