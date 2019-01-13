var gulp           = require('gulp'),
    sass           = require('gulp-sass'),
    browserSync    = require('browser-sync'),
    gutil          = require("gulp-util"),
    notify         = require("gulp-notify"),
    autoprefixer   = require('gulp-autoprefixer'),
    rename         = require('gulp-rename'),
    webpack        = require('webpack');

    gulp.task('webpack', function(callback) {
        // run webpack
        webpack(require('./webpack.config.js'), function(err, stats) {
            if(err) throw new gutil.PluginError("webpack", err);
            gutil.log("[webpack]", stats.toString({
                // output options
            }));
            callback();
            browserSync.reload();
        });
    });

    gulp.task('browser-sync', function() {
		browserSync({
			server: {
				baseDir: 'client'
			},
			notify: false,
			// tunnel: true,
			// tunnel: "projectmane", //Demonstration page: http://projectmane.localtunnel.me
		});
	});

    gulp.task('styles', function() {
        return gulp.src('client/sass/**/*.scss')
        .pipe(sass({outputStyle: 'expand'}).on("error", notify.onError()))
        .pipe(rename({suffix: '.min', prefix : ''}))
        .pipe(autoprefixer(['last 15 versions']))
        //.pipe(cleanCSS()) // Опционально, закомментировать при отладке
        .pipe(gulp.dest('client/css'))
        .pipe(browserSync.stream())
    });

    gulp.task('watch', function() {
        gulp.watch('client/sass/**/*.scss', gulp.series('styles'));
        gulp.watch(['client/common.js', 'client/router.js', 'client/store/*.js'], gulp.series('webpack'));
        gulp.watch('client/**/*.vue', gulp.series('webpack'));
        gulp.watch('client/*.html', browserSync.reload);
    });

    gulp.task('default', gulp.parallel(['watch', 'styles', 'webpack', 'browser-sync']));