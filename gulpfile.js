var gulp = require('gulp');
var path = require('path');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var typescript = require('gulp-typescript');
var uglify = require('gulp-uglify');
var systemjsBuilder = require('systemjs-builder');
var del = require("del");

//Copy all resources that are not TypeScript files into build directory.
gulp.task("copy:resources", function () {
    return gulp.src(["src/**/*.html", "src/**/*.css"])
        .pipe(gulp.dest("dist"));
});

// Compile TypeScript app to JS
gulp.task('compile:ts', function () {
    return gulp
        .src([
            "./src/**/*.ts"
        ])
        .pipe(sourcemaps.init())
        .pipe(typescript({
            "module": "system",
            "moduleResolution": "node",
            "outDir": "dist",
            "target": "ES5"
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));
});

gulp.task('concat:app', function () {
    return gulp.src([
        'dist/**/*.js'
    ])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('dist'));
});

// Generate systemjs-based bundle (dist/app.js)
gulp.task('bundle:block', function() {
    var builder = new systemjsBuilder('dist', './src/systemjs.config.js');
    return builder.buildStatic('app.js', 'dist/block.js');
});

// Copy and bundle dependencies into one file (vendor/vendors.js)
// system.config.js can also bundled for convenience
gulp.task('bundle:vendor', function () {
    return gulp.src([
        'node_modules/zone.js/dist/zone.js',
        'node_modules/reflect-metadata/Reflect.js',
        'node_modules/systemjs/dist/system-polyfills.js',
        'node_modules/core-js/client/shim.min.js',
        'node_modules/systemjs/dist/system.js',
        'system.config.js'
    ])
        .pipe(concat('vendors.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

// Copy dependencies loaded through SystemJS into dir from node_modules
gulp.task('copy:vendor', function () {
    return gulp.src([
        'node_modules/rxjs/bundles/Rx.js',
        'node_modules/@angular/**/*'
    ])
        .pipe(gulp.dest('dist'));
});

gulp.task('vendor', ['bundle:vendor', 'copy:vendor']);
gulp.task('app', ['compile:ts', 'bundle:app']);

// Bundle dependencies and app into one file (app.bundle.js)
gulp.task('bundle', ['vendor', 'app'], function () {
    return gulp.src([
        'app/app.js',
        'vendor/vendors.js'
    ])
        .pipe(concat('app.bundle.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./app'));
});

gulp.task('default', ['bundle']);
















