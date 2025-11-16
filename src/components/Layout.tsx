import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout: React.FC = () => {
	return (
		<div className="min-h-screen bg-lagoon-dark bg-lagoon-radial text-slate-50 flex flex-col">
			<Navbar />
			<main className="flex-1 pt-20 pb-12">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<Outlet />
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default Layout;