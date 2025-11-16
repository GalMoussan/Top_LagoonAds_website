import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import DotGrid from './DotGrid';

const Layout: React.FC = () => {
	return (
		<div className="relative min-h-screen bg-lagoon-dark bg-lagoon-radial text-slate-50 overflow-hidden">
			{/* Interactive dot grid background */}
			<DotGrid
				dotSize={9}
				gap={22}
				baseColor="#020617"        // very dark slate / lagoon base
				activeColor="#38bdf8"      // lagoon blue when close
				proximity={110}            // how close you need to be for color change
				shockRadius={220}          // click ripple radius
				shockStrength={3.5}        // base strength (rest is scaled in dot logic)
				maxSpeed={2200}            // cap insane mouse flings
				returnDuration={1.8}       // time to settle back
				className="opacity-18"     // subtle overlay
			/>

			{/* Foreground app content */}
			<div className="relative z-10 flex flex-col min-h-screen">
				<Navbar />
				<main className="flex-1 pt-20 pb-12">
					<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
						<Outlet />
					</div>
				</main>
				<Footer />
			</div>
		</div>
	);
};

export default Layout;