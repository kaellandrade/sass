const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {


	entry: ['./src/index.js','./src/style/main.scss'],
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, './dist'),
	},
	mode: "development",
	devServer: {
		static: {
			directory: path.resolve(__dirname, 'dist'),
		},
		compress: true,
		port: 9000,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: [{ loader: "style-loader" }, { loader: "css-loader" }]
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader",
				],
			},
		],
	},
	plugins: [new HtmlWebpackPlugin({filename:"index.html", title: "Sass and Webpack"})],

};
