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
				dotSize={10}
				gap={18}
				baseColor="#0f172a"          // dark slate-ish
				activeColor="#38bdf8"        // lagoon blue when close
				proximity={120}
				shockRadius={260}
				shockStrength={5}
				resistance={750}
				returnDuration={1.5}
				className="opacity-25"
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