const tailwindcss = require('tailwindcss')
module.exports = {
	// plugins: {
	//   tailwindcss: {},
	//   autoprefixer: {},
	// },
	plugins: [tailwindcss('./tailwind.config.js'), require('autoprefixer')]
}
