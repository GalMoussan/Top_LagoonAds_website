import React from 'react';

interface CardProps {
	title?: string;
	children: React.ReactNode;
	eyebrow?: string;
}

const Card: React.FC<CardProps> = ({ title, children, eyebrow }) => {
	return (
		<article className="rounded-3xl bg-slate-950/60 border border-white/5 shadow-soft p-6 hover:border-lagoon-blue/60 transition-colors">
			{eyebrow && (
				<p className="text-xs font-semibold tracking-wide uppercase text-lagoon-turquoise mb-2">
					{eyebrow}
				</p>
			)}
			{title && (
				<h3 className="text-lg font-semibold text-slate-50 mb-2">{title}</h3>
			)}
			<div className="text-sm text-slate-300 leading-relaxed">{children}</div>
		</article>
	);
};

export default Card;