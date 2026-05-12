import versionNumber from "gulp-version-number";
import webpHtmlNosvg from "gulp-webp-html-nosvg";

export const html = () => {
	return app.gulp.src(`${app.path.build.html}*.html`)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "HTML",
				message: "Error: <%= error.message %>"
			}))
		)
		// При запуске любого сценария кроме npm run devbuild app.isWebP
		// принимает true и запускается плагин "gulp-webp-html-nosvg"
		.pipe(app.plugins.if(app.isWebP,
			// что делает плагин?
			webpHtmlNosvg()
		))
		.pipe(versionNumber({
			'value': '%DT%',
			'append': {
				'key': '_v',
				'cover': 0,
				'to': ['css', 'js', 'img']
			},
			'output': {
				'file': 'config/version.json'
			}
		}))
		.pipe(app.gulp.dest(app.path.build.html));
};
