const gulp = require('gulp');
const postcss = require('gulp-postcss');

gulp.task('css', () => {
    return gulp
        .src('assets/tailwind.css')
        .pipe(postcss([
            require('tailwindcss'),
            require('autoprefixer')
        ]))
        .pipe(gulp.dest('assets/'));
});

gulp.task('watch', () => {
    gulp.watch([
        './**/*.liquid',
        './**/*.html',
        './**/*.js',
        './assets/tailwind.css'
    ], gulp.series('css'));
});

gulp.task('default', gulp.series('css', 'watch'));
