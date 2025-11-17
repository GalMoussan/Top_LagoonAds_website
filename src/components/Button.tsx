import React from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'secondary' | 'ghost';
	size?: 'sm' | 'md' | 'lg';
	fullWidth?: boolean;
	className?: string;
}

const Button: React.FC<ButtonProps> = ({
	variant = 'primary',
	size = 'md',
	fullWidth = false,
	className = '',
	children,
	...props
}) => {
	const baseStyles =
		'inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-sm whitespace-nowrap';

	const variants = {
		primary:
			'bg-gradient-to-r from-lagoon-blue to-lagoon-turquoise text-slate-900 hover:opacity-90 focus:ring-lagoon-blue',
		secondary:
			'bg-slate-900/70 border border-white/10 text-slate-200 hover:bg-slate-900/90 focus:ring-lagoon-blue',
		ghost:
			'bg-transparent text-slate-200 hover:bg-slate-900/50 focus:ring-lagoon-blue'
	};

	const sizes = {
		sm: 'text-xs px-3 py-1.5',
		md: 'text-sm px-4 py-2.5',
		// if you ever need a bigger CTA:
		lg: 'text-base px-6 py-3'
	};

	return (
		<button
			{...props}
			className={clsx(
				baseStyles,
				variants[variant],
				sizes[size],
				fullWidth && 'w-full',
				className
			)}
		>
			{children}
		</button>
	);
};

export default Button;