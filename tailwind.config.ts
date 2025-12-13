
import type { Config } from "tailwindcss";

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
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
				display: ['Playfair Display', 'serif'],
				body: ['Lato', 'system-ui', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				elegant: {
					blue: 'hsl(var(--elegant-blue))',
					'blue-light': 'hsl(var(--elegant-blue-light))',
					gray: 'hsl(var(--elegant-gray))',
					dark: 'hsl(var(--elegant-dark))',
					light: 'hsl(var(--elegant-light))'
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
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in-left': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-50px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'bounce-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.3)'
					},
					'50%': {
						opacity: '1',
						transform: 'scale(1.1)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'glow': {
					'0%, 100%': {
						boxShadow: '0 0 5px rgba(59, 130, 246, 0.5)'
					},
					'50%': {
						boxShadow: '0 0 20px rgba(59, 130, 246, 0.8)'
					}
				},
				'scroll-wheel': {
					'0%': {
						opacity: '1',
						transform: 'translateY(0)'
					},
					'50%': {
						opacity: '0.5',
						transform: 'translateY(8px)'
					},
					'100%': {
						opacity: '0',
						transform: 'translateY(8px)'
					}
				},
				'bounce-slow': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(6px)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'fade-in-up': 'fade-in-up 0.8s ease-out',
				'slide-in-left': 'slide-in-left 0.8s ease-out',
				'bounce-in': 'bounce-in 0.8s ease-out',
				'glow': 'glow 2s ease-in-out infinite',
				'scroll-wheel': 'scroll-wheel 1.5s ease-in-out infinite',
				'bounce-slow': 'bounce-slow 1.5s ease-in-out infinite'
			},
			animationDelay: {
				'200': '200ms',
				'400': '400ms',
				'600': '600ms',
				'700': '700ms'
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		function({ addUtilities }: any) {
			const newUtilities = {
				'.hover-scale': {
					'transition': 'transform 0.2s ease-in-out',
					'&:hover': {
						'transform': 'scale(1.05)'
					}
				},
				'.bg-grid-pattern': {
					'background-image': 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)',
					'background-size': '20px 20px'
				},
				'.animated-button': {
					'background': 'linear-gradient(45deg, currentColor, currentColor)',
					'transition': 'all 0.3s ease',
					'&:hover': {
						'background': 'linear-gradient(45deg, rgba(59, 130, 246, 0.9), rgba(147, 51, 234, 0.9))',
						'transform': 'translateY(-3px) scale(1.05)',
						'box-shadow': '0 10px 25px rgba(0,0,0,0.2)'
					}
				},
				'.social-icon': {
					'transition': 'all 0.3s ease',
					'&:hover': {
						'transform': 'translateY(-3px) scale(1.05) rotate(5deg)',
						'box-shadow': '0 10px 25px rgba(0,0,0,0.15)'
					}
				},
				'.project-card': {
					'transition': 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
					'&:hover': {
						'transform': 'translateY(-8px) scale(1.02)',
						'box-shadow': '0 25px 50px rgba(0,0,0,0.15)'
					}
				},
				'.contact-card': {
					'transition': 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
					'&:hover': {
						'background': 'linear-gradient(135deg, rgba(55, 65, 81, 0.8), rgba(75, 85, 99, 0.9))',
						'box-shadow': '0 20px 40px rgba(0,0,0,0.3)'
					}
				},
				'.animation-delay-200': {
					'animation-delay': '200ms'
				},
				'.animation-delay-400': {
					'animation-delay': '400ms'
				},
				'.animation-delay-500': {
					'animation-delay': '500ms'
				},
				'.animation-delay-600': {
					'animation-delay': '600ms'
				},
				'.animation-delay-700': {
					'animation-delay': '700ms'
				}
			}
			addUtilities(newUtilities)
		}
	],
} satisfies Config;
