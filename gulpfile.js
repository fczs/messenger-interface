var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require("gulp-rename"),
    del = require("del");

gulp.task('bundle', function () {
    return gulp.src([
        'dist/inline.*.js',
        'dist/polyfills.*.js',
        'dist/vendor.*.js',
        'dist/main.*.js'
    ])
        .pipe(concat('bundle.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/assets'));
});

gulp.task('rename', ['bundle'], function () {
    gulp.src('dist/styles.*.css')
        .pipe(rename('styles.css'))
        .pipe(gulp.dest('dist/assets'));
});

gulp.task('clean', ['rename'], function () {
    del(['dist/*.*', '!dist/*.html']);
});

gulp.task('default', ['clean']);