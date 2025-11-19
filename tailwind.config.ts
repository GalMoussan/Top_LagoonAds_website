import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: ['class'],
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
    			},
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		},
    		fontFamily: {
    			sans: [
    				'Inter',
    				'system-ui',
    				'sans-serif'
    			]
    		},
    		boxShadow: {
    			soft: '0 18px 45px rgba(15, 23, 42, 0.45)'
    		},
    		borderRadius: {
    			'4xl': '2rem',
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		backgroundImage: {
    			'lagoon-radial': 'radial-gradient(circle at top, rgba(56,189,248,0.2), transparent 60%), radial-gradient(circle at bottom, rgba(45,212,191,0.18), transparent 55%)'
    		},
    		keyframes: {
    			'dot-grid-move': {
    				'0%': {
    					transform: 'translate3d(0,0,0)'
    				},
    				'100%': {
    					transform: 'translate3d(-48px,-48px,0)'
    				}
    			}
    		},
    		animation: {
    			'dot-grid-move': 'dot-grid-move 22s linear infinite'
    		}
    	}
    },
	plugins: [require("tailwindcss-animate")]
}

export default config