import type { Config } from 'tailwindcss'

const config: Config = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				lagoon: {
					dark: '#020617',
					deep: '#052c65',
					blue: '#0ea5e9',
					turquoise: '#14b8a6',
					light: '#e5f3ff',
					gray: '#e2e8f0'
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
			},

			// ⭐ ADD DOT GRID ANIMATION
			keyframes: {
				'dot-grid-move': {
					'0%': { transform: 'translate3d(0,0,0)' },
					'100%': { transform: 'translate3d(-48px,-48px,0)' }
				}
			},
			animation: {
				'dot-grid-move': 'dot-grid-move 22s linear infinite'
			}
		}
	},
	plugins: []
}

export default config