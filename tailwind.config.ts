import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./index.html', './src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			colors: {
				lagoon: {
					dark: '#020617',      // deep background
					deep: '#052c65',      // deep blue
					blue: '#0ea5e9',      // accent blue
					turquoise: '#14b8a6', // accent turquoise
					light: '#e5f3ff',     // light background
					gray: '#e2e8f0'       // light grey
				}
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif']
			},
			boxShadow: {
				soft: '0 18px 45px rgba(15, 23, 42, 0.45)'
			},
			borderRadius: {
				'4xl': '2rem'
			},
			backgroundImage: {
				'lagoon-radial':
					'radial-gradient(circle at top, rgba(56,189,248,0.2), transparent 60%), radial-gradient(circle at bottom, rgba(45,212,191,0.18), transparent 55%)'
			}
		}
	},
	plugins: []
};

export default config;