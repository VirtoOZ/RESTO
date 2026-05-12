import babelPluginImgToPicture from './babel-plugin-img-to-picture.js';

const babelLocal = {
	loader: "babel-loader",
	options: {
		presets: [
			'@babel/preset-env',
			'@babel/preset-react'
		],
		plugins: [
			babelPluginImgToPicture
		]
	}
};
export default babelLocal;