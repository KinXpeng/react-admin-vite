/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./index.html',
		'./src/**/*.{ts,tsx}' // 用到tailwind的地方
	],
	theme: {
		extend: {},
		boxShadow: {
			box: '0 1px 4px rgb(0 21 41 / 8%)'
		},
		keyframes: {
			load: {
				'0%, 100%': { transform: 'scale(1.5)', backgroundColor: 'lightgreen' },
				'50%': { transform: 'scale(0.8)', backgroundColor: 'lightblue' }
			},
			square: {
				'0%': { transform: 'translateY(0)' },
				'100%': { transform: 'translateY(-500)', transform: 'rotate(600deg)', bottom: '800px' }
			}
		},
		animation: {
			scale: 'load 1s ease infinite',
			'scale-1.2': 'load 1.2s ease infinite',
			'scale-1.4': 'load 1.4s ease infinite',
			'scale-1.6': 'load 1.6s ease infinite',
			'scale-1.8': 'load 1.8s ease infinite',
			square: 'square 30s infinite'
		}
	},
	plugins: []
}
