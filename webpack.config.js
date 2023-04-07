const path = require('path');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
    // environment: {
    //   arrowFunction: false,
    // },
	},
  devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.m?js$/,
        exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [['@babel/preset-env', { targets: 'defaults' }]],
					},
				},
			},
		],
	},
};
