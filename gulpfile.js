var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    browserSync = require('browser-sync').create(),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    imagemin = require('gulp-imagemin')
    

function image() {
    gulp.src('./src/assets/*.+(png|jpg|gif|svg)')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/css/assets/'))
}

function bundleMainPage() {
    browserify('./src/index.js').bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist/js/'))
    .pipe(browserSync.stream());
} 

function bundlePostPage() {
    browserify('./src/js/post-detail.js').bundle()
    .pipe(source('post-detail.js'))
    .pipe(gulp.dest('dist/js/'))
    .pipe(browserSync.stream());
} 

function css() {
    return gulp.src('./src/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/css/'))      
        .pipe(browserSync.stream());
    }

function html() {
    return gulp.src('./src/**/*.html')
        .pipe(gulp.dest('./dist/'))
        .pipe(browserSync.stream());
    }

function serve() {
    browserSync.init({
        server: {
        baseDir: './dist'
        }
    })
    }

gulp.watch('./src/**/*.scss', css);
gulp.watch('./src/**/*.html', html).on('change', browserSync.reload);
gulp.watch('./src/**/*.js', bundleMainPage).on('change', browserSync.reload);
gulp.watch('./src/**/*.js', bundlePostPage).on('change', browserSync.reload);

exports.default = gulp.parallel(html, css, bundleMainPage, bundlePostPage, image, serve);