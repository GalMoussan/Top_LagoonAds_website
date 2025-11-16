import React from 'react';

const DotGridBackground: React.FC = () => {
	return (
		<div
			aria-hidden="true"
			className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
		>
			<div
				className="
          h-full w-full
          opacity-20
          bg-[radial-gradient(circle_at_center,_rgba(148,163,184,0.7)_1px,_transparent_1px)]
          bg-[size:22px_22px]
          animate-dot-grid-move
        "
			/>
		</div>
	);
};

export default DotGridBackground;