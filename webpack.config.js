const path = require('path')

module.exports = {
	mode: 'development',
	entry: './assets/js/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'output.js'
	},
	mode: 'development',
	entry: './assets/js/roadmap-input.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'roadmap-output.js'
	},
	watch: true
}