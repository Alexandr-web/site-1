const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const scss = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const babel = require('gulp-babel');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');

gulp.task('copy-html', () => {
    return gulp.src('app/*.html')
        .pipe(gulp.dest('dist/'))
        .pipe(browserSync.stream());
});

gulp.task('copy-assets', () => {
    return gulp.src('app/assets/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/assets'))
        .pipe(browserSync.stream());
});

gulp.task('copy-css', () => {
    return gulp.src(['app/scss/*.scss', '!app/scss/_*.scss'])
        .pipe(scss({ outputStyle: 'expanded' }))
        .pipe(autoprefixer({
            cascade: true,
            overrideBrowserslist: ['last 5 versions']
        }))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
});

gulp.task('copy-js', () => {
    return gulp.src('app/js/*.js')
        .pipe(concat('main.js'))
        .pipe(babel({ presets: ['@babel/env'] }))
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream());
});

gulp.task('browserSync', () => {
    browserSync.init({
        server: { baseDir: 'dist/' }
    });
});

gulp.task('watch', () => {
    gulp.watch('app/*.html', gulp.parallel('copy-html'));
    gulp.watch('app/assets/**/*', gulp.parallel('copy-assets'));
    gulp.watch('app/scss/*.scss', gulp.parallel('copy-css'));
    gulp.watch('app/js/*.js', gulp.parallel('copy-js'));
});

gulp.task('default', gulp.parallel('watch', 'browserSync'));