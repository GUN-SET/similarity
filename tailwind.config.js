/** @type {import('tailwindcss').Config} */
const {colors} = require('tailwindcss/colors')
const {fontFamily} = require('tailwindcss/defaultTheme')

module.exports = {
	darkMode: ['class'],
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',

		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		container: {
			center: true,
			padding: '1.5rem',
			screens: {
				'2xl': ' 1360px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['var(--font-inter)', ...fontFamily.sans]
			},
			colors: {
				...colors,
				'light-gold': '#f5bc51',
				'dark-gold': '#544519'
			}
		}
	},
	plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')]
}
