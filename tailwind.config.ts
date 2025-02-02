import type { Config } from 'tailwindcss'

export default {
	darkMode: ['class'],
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
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
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			typography: {
				DEFAULT: {
					css: {
						// 인라인 코드
						'code::before': {
							content: '""'
						},
						'code::after': {
							content: '""'
						},
						':not(pre) > code': {
							fontFamily: 'var(--font-mono)',
							fontWeight: '400',
							backgroundColor: 'var(--tw-prose-inlineCode-bg)',
							color: 'var(--tw-prose-inlineCode)',
							padding: '0.2em 0.5em',
							borderRadius: '0.375rem',
							overflowWrap: 'break-word'
						},
						// 인용구
						blockquote: {
							fontWeight: '400',
							quotes: 'none',
							textDecoration: 'none',
							borderLeftColor: 'var(--tw-prose-inlineCode)'
						}
					}
				}
			}
		}
	},
	plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')]
} satisfies Config
