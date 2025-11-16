import React from 'react';
import clsx from 'clsx';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant;
}

const baseClasses =
	'inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lagoon-blue focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:opacity-60 disabled:cursor-not-allowed';

const Button: React.FC<ButtonProps> = ({
	variant = 'primary',
	className,
	...props
}) => {
	const variantClasses: Record<ButtonVariant, string> = {
		primary:
			'bg-gradient-to-r from-lagoon-blue to-lagoon-turquoise text-slate-950 shadow-soft hover:opacity-95',
		secondary:
			'border border-lagoon-blue/70 text-lagoon-light bg-slate-950/40 hover:bg-slate-900',
		ghost: 'text-slate-200 hover:bg-white/10'
	};

	return (
		<button
			className={clsx(baseClasses, variantClasses[variant], className)}
			{...props}
		/>
	);
};

export default Button;