gulp = require('gulp')
browsersync = require('browser-sync').create()
// var sass = require('gulp-sass')

gulp.task('server', function () {
    browsersync.init({
        server: "./src"
    })

    gulp.watch('src/css/*.css').on('change', browsersync.reload);
    gulp.watch('src/*.html').on('change', browsersync.reload);
})

gulp.task('default', ['server']);