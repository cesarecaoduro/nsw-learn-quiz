import type { Config } from "tailwindcss";
// eslint-disable-next-line @typescript-eslint/no-require-imports
const tailwindcssAnimate = require("tailwindcss-animate");

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				// Base system colors
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				
				// Semantic Primary Scale (Purple) - Main brand color
				primary: {
					50: 'hsl(var(--primary-50))',
					100: 'hsl(var(--primary-100))',
					200: 'hsl(var(--primary-200))',
					300: 'hsl(var(--primary-300))',
					400: 'hsl(var(--primary-400))',
					500: 'hsl(var(--primary-500))',
					600: 'hsl(var(--primary-600))',
					700: 'hsl(var(--primary-700))',
					800: 'hsl(var(--primary-800))',
					900: 'hsl(var(--primary-900))',
					DEFAULT: 'hsl(var(--primary-500))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				
				// Semantic Secondary Scale (Pink) - Accent color
				secondary: {
					50: 'hsl(var(--secondary-50))',
					100: 'hsl(var(--secondary-100))',
					200: 'hsl(var(--secondary-200))',
					300: 'hsl(var(--secondary-300))',
					400: 'hsl(var(--secondary-400))',
					500: 'hsl(var(--secondary-500))',
					600: 'hsl(var(--secondary-600))',
					700: 'hsl(var(--secondary-700))',
					800: 'hsl(var(--secondary-800))',
					900: 'hsl(var(--secondary-900))',
					DEFAULT: 'hsl(var(--secondary-500))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				
				// Semantic Accent Scale (Complementary) - Supporting colors
				accent: {
					50: 'hsl(var(--accent-50))',
					100: 'hsl(var(--accent-100))',
					200: 'hsl(var(--accent-200))',
					300: 'hsl(var(--accent-300))',
					400: 'hsl(var(--accent-400))',
					500: 'hsl(var(--accent-500))',
					600: 'hsl(var(--accent-600))',
					700: 'hsl(var(--accent-700))',
					800: 'hsl(var(--accent-800))',
					900: 'hsl(var(--accent-900))',
					DEFAULT: 'hsl(var(--accent-500))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				
				// Semantic State Colors
				success: {
					50: 'hsl(var(--success-50))',
					100: 'hsl(var(--success-100))',
					200: 'hsl(var(--success-200))',
					300: 'hsl(var(--success-300))',
					400: 'hsl(var(--success-400))',
					500: 'hsl(var(--success-500))',
					600: 'hsl(var(--success-600))',
					700: 'hsl(var(--success-700))',
					800: 'hsl(var(--success-800))',
					900: 'hsl(var(--success-900))',
					DEFAULT: 'hsl(var(--success-500))',
					foreground: 'hsl(var(--success-foreground))'
				},
				
				warning: {
					50: 'hsl(var(--warning-50))',
					100: 'hsl(var(--warning-100))',
					200: 'hsl(var(--warning-200))',
					300: 'hsl(var(--warning-300))',
					400: 'hsl(var(--warning-400))',
					500: 'hsl(var(--warning-500))',
					600: 'hsl(var(--warning-600))',
					700: 'hsl(var(--warning-700))',
					800: 'hsl(var(--warning-800))',
					900: 'hsl(var(--warning-900))',
					DEFAULT: 'hsl(var(--warning-500))',
					foreground: 'hsl(var(--warning-foreground))'
				},
				
				error: {
					50: 'hsl(var(--error-50))',
					100: 'hsl(var(--error-100))',
					200: 'hsl(var(--error-200))',
					300: 'hsl(var(--error-300))',
					400: 'hsl(var(--error-400))',
					500: 'hsl(var(--error-500))',
					600: 'hsl(var(--error-600))',
					700: 'hsl(var(--error-700))',
					800: 'hsl(var(--error-800))',
					900: 'hsl(var(--error-900))',
					DEFAULT: 'hsl(var(--error-500))',
					foreground: 'hsl(var(--error-foreground))'
				},
				
				// Backwards compatibility (deprecated)
				destructive: {
					DEFAULT: 'hsl(var(--error-500))',
					foreground: 'hsl(var(--error-foreground))'
				},
				
				info: {
					DEFAULT: 'hsl(var(--primary-500))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				
				// Neutral system colors
				muted: {
					50: 'hsl(var(--muted-50))',
					100: 'hsl(var(--muted-100))',
					200: 'hsl(var(--muted-200))',
					300: 'hsl(var(--muted-300))',
					400: 'hsl(var(--muted-400))',
					500: 'hsl(var(--muted-500))',
					600: 'hsl(var(--muted-600))',
					700: 'hsl(var(--muted-700))',
					800: 'hsl(var(--muted-800))',
					900: 'hsl(var(--muted-900))',
					DEFAULT: 'hsl(var(--muted-500))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				
				// Surface colors
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			fontFamily: {
				'fredoka': ['Fredoka', 'sans-serif'],
				'comic': ['Comic Neue', 'cursive'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'bounce-in': {
					'0%': {
						transform: 'scale(0.3)',
						opacity: '0'
					},
					'50%': {
						transform: 'scale(1.05)'
					},
					'70%': {
						transform: 'scale(0.9)'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'wiggle': {
					'0%, 100%': {
						transform: 'rotate(-3deg)'
					},
					'50%': {
						transform: 'rotate(3deg)'
					}
				},
				'pulse-fun': {
					'0%, 100%': {
						transform: 'scale(1)',
						opacity: '1'
					},
					'50%': {
						transform: 'scale(1.05)',
						opacity: '0.8'
					}
				},
				'rainbow-glow': {
					'0%, 100%': {
						'box-shadow': '0 0 20px #ff6b6b, 0 0 40px #4ecdc4, 0 0 60px #45b7d1'
					},
					'33%': {
						'box-shadow': '0 0 20px #96ceb4, 0 0 40px #ffeaa7, 0 0 60px #fab1a0'
					},
					'66%': {
						'box-shadow': '0 0 20px #a29bfe, 0 0 40px #fd79a8, 0 0 60px #e17055'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-out'
			}
		}
	},
	plugins: [tailwindcssAnimate],
} satisfies Config;
