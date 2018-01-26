var gulp        = require('gulp'),
    browserSync = require('browser-sync').create(),
    pug         = require('gulp-pug'),
    sass        = require('gulp-sass'),
    uglifycss   = require('gulp-uglifycss'),
    coffee      = require('gulp-coffee'),
    uglify      = require('gulp-uglify'),
    pump        = require('pump'),
    watch       = require('gulp-watch'),
    livereload  = require('gulp-livereload'),
    jsonMinify  = require('gulp-json-minify'),
    nodemon     = require('gulp-nodemon');

gulp.task('assets', function() {
  return gulp.src('./assets/**/*.*')
  .pipe(gulp.dest('public/assets'))
  .pipe(livereload());
});

gulp.task('json', function() {
  return gulp.src('./data.json')
    .pipe(jsonMinify())
    .pipe(gulp.dest('./'))
});

gulp.task('pug', function(){
  gulp.src('client/templates/*.pug')
  .pipe(pug())
  .pipe(gulp.dest('build/html'))
  .pipe(livereload());
});

gulp.task('sass', function () {
  return gulp.src('./sass/*.{sass,scss}')
    .pipe(sass({
      outputStyle: 'compressed',
      includePaths: ['node_modules/modularscale-sass-npm/stylesheets']
    }).on('error', sass.logError))
    .pipe(gulp.dest('./public/css'))
    .pipe(livereload());
});

gulp.task('coffee', function () {
  gulp.src('./coffee/*.coffee')
    .pipe(coffee({bare: true}))
    .pipe(uglify())
    .pipe(gulp.dest('./public/js'))
    .pipe(livereload());
});

gulp.task('font', function() {
  gulp.src('./font/*.*')
  .pipe(gulp.dest('./public/font'))
});

gulp.task('watch', function() {
  livereload.listen()
  gulp.watch('./assets/*.*', ['assets']),
  gulp.watch('./sass/*.sass', ['sass']),
  gulp.watch('./coffee/*.coffee', ['coffee']),
  gulp.watch('./views/*.pug', ['pug']),
  gulp.watch('./assets/*.*', ['assets'])
});

gulp.task('start', function () {
  nodemon({
    script: './bin/www'
  })
})

gulp.task('production', [ 'assets', 'json','pug', 'sass', 'coffee', 'watch', 'font', 'start' ]);
gulp.task('default', [ 'assets', 'json','pug', 'sass', 'coffee', 'watch', 'font', 'start' ]);
