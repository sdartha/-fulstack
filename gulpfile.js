var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

//sass

gulp.task('sass',async function(){
    return sass('html/**/*.sass').pipe(gulp.dest('css'))
});

//watch

gulp.task('watch',async function(){
    gulp.watch('html/**/*.sass', ['sass']);
});

//default

gulp.task('default', ['sass', 'watch']);

