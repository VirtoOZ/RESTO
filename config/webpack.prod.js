import fs from 'fs';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import FileIncludeWebpackPlugin from 'file-include-webpack-plugin-replace';
import CopyPlugin from "copy-webpack-plugin";
import HtmlWebpackPlugin from 'html-webpack-plugin';
import TerserPlugin from "terser-webpack-plugin";
import ImageMinimizerPlugin from 'image-minimizer-webpack-plugin';
import babelLocal from './babel.config.js';
import sharp from 'sharp';
import * as path from 'path';

const srcFolder = "src";
const builFolder = "dist";
const rootFolder = path.basename(path.resolve());

let pugPages = fs.readdirSync(srcFolder).filter(fileName => fileName.endsWith('.pug'));
let htmlPages = [];

if (!pugPages.length) {
	htmlPages = [new FileIncludeWebpackPlugin({
		source: srcFolder,
		destination: '../',
		htmlBeautifyOptions: { "indent-with-tabs": true, 'indent_size': 3 },
		replace: [
			{ regex: '../img', to: 'img' },
			{ regex: '@img', to: 'img' },
			{ regex: '.png|.jpeg|.jpg|.gif', to: '.webp' },
			{ regex: 'NEW_PROJECT_NAME', to: rootFolder }
		],
	})];
}

const paths = { src: path.resolve(srcFolder), build: path.resolve(builFolder) };

export default {
	mode: "production",
	entry: './src/js/react/index.jsx',
	output: {
		path: paths.build,
		filename: 'app.min.js',
		publicPath: '/',
	},
	optimization: {
		minimizer: [
			new TerserPlugin({
				extractComments: false
			}),
			// Сжатие оригиналов
			new ImageMinimizerPlugin({
				minimizer: {
					implementation: ImageMinimizerPlugin.imageminMinify,
					options: {
						plugins: [
							['jpegtran', { progressive: true }],
							['optipng', { optimizationLevel: 5 }]
						],
					},
				},
			}),
			// Генерация webp
			new ImageMinimizerPlugin({
				generator: [
					{
						preset: 'webp',
						implementation: ImageMinimizerPlugin.imageminGenerate,
						options: {
							plugins: [['imagemin-webp', { quality: 85 }]]
						},
					},
				],
			}),
		],
	},
	module: {
		rules: [
			{
				test: /\.(scss|css)$/,
				use: [
					MiniCssExtractPlugin.loader,
					{ loader: 'string-replace-loader', options: { search: '@img', replace: '../img', flags: 'ig' } },
					{ loader: 'string-replace-loader', options: { search: '.png|.jpeg|.jpg|.gif', replace: '.webp', flags: 'ig' } },
					{ loader: 'css-loader', options: { importLoaders: 1, sourceMap: false } },
					{ loader: 'sass-loader', options: { sassOptions: { outputStyle: "expanded" } } },
					{
						loader: 'postcss-loader', options: {
							postcssOptions: {
								plugins: [
									['autoprefixer', { overrideBrowserslist: ['last 1 versions'] }],
									['cssnano', { preset: 'default' }] // Минификация
								]
							}
						}
					},
				],
			},
			{
				test: /\.pug$/,
				use: [
					{ loader: '@webdiscus/pug-loader' },
					{ loader: 'string-replace-loader', options: { search: '@img', replace: 'img', flags: 'g' } }
				]
			},
			// {
			// 	test: /\.(jsx)$/,
			// 	exclude: /node_modules/,
			// 	use: [
			// 		{
			// 			loader: 'string-replace-loader',
			// 			options: {
			// 				search: '@img',
			// 				replace: '../../img',
			// 				flags: 'g'
			// 			}
			// 		}, {
			// 			loader: "babel-loader",
			// 			options: {
			// 				presets: ["@babel/preset-react"]
			// 			}
			// 		}
			// 	],
			// },
			{
				test: /\.(jsx?)$/,
				// exclude: /node_modules/,
				use: {
					// 	loader: "babel-loader",
					// 	options: {
					// 		presets: ['@babel/preset-env', ["@babel/preset-react", { runtime: "automatic" }]],
					// 		plugins: ['./babel-plugin-img-to-picture.js']
					// 	}
					...babelLocal
				}
			},
			{
				test: /\.(png|jpe?g)$/i,
				type: 'asset/resource',
				generator: { filename: 'images/[name][ext]' }
			},
			{
				test: /\.(png|jpe?g)$/i,
				resourceQuery: /webp/,
				use: [
					{ loader: 'responsive-loader', options: { adapter: sharp, format: 'webp', quality: 80 } }
				]
			}
		]
	},
	plugins: [
		...htmlPages,
		...pugPages.map(pugPage => new HtmlWebpackPlugin({
			minify: false,
			template: `${srcFolder}/${pugPage}`,
			filename: `../${pugPage.replace(/\.pug/, '.html')}`
		})),
		new MiniCssExtractPlugin({ filename: '../css/style.css' }),
		new CopyPlugin({
			patterns: [
				{ from: `${paths.src}/files`, to: `../files`, noErrorOnMissing: true },
				{ from: `${paths.src}/php`, to: `../`, noErrorOnMissing: true },
				{ from: `${paths.src}/favicon.ico`, to: `../`, noErrorOnMissing: true }
			],
		})
	],
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			"@scss": `${paths.src}/scss`,
			"@js": `${paths.src}/js`,
			"@img": `${paths.src}/img`
		}
	}
};
