const gulp = require('gulp'),
    {dest, watch, series, src} = require('gulp'),
    sass = require('gulp-sass')(require('sass')),
    minify = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename');

function build() {
    return src('style.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(minify())
    .pipe(rename({
        extname: '.min.css'
    }))
    .pipe(dest('dist'));
}

exports.default = function() {
    watch('style.scss', build);
}