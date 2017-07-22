var gulp            = require('gulp');
    uglify          = require('gulp-uglify'),
    server          = require('gulp-live-server'),
    browserify      = require('gulp-browserify'),
    rename          = require("gulp-rename"),
    cleancss        = require('gulp-clean-css'),
    useref          = require('gulp-useref'),
    gulpif          = require('gulp-if'),
    uncache         = require('gulp-uncache'),
    htmlmin         = require('gulp-htmlmin'),
    debug           = require('gulp-debug'),
    sourcemaps      = require('gulp-sourcemaps'),
    jasmineBrowser  = require('gulp-jasmine-browser');


gulp.task('default', ['minify-js','minify-html','minify-css','jasmine','watch','serve']);

gulp.task('watch', () => {
  gulp.watch('./app/**/*', ['minify-js','minify-html','minify-css']);
});

gulp.task('minify-html', () => {
  return gulp.src('./app/src/*.html')
    .pipe(htmlmin({collapseWhitespace: true, removeComments: true, debug: true}, function(response) {
      console.log('The file ' + response.name + ' had : ' + response.stats.originalSize);
      console.log('Now ' + response.name + ' has : ' + response.stats.minifiedSize);
    }))
    .pipe(debug({title: 'html minify:'}))
    .pipe(gulp.dest('./public/'));
});

gulp.task('minify-css', () => {
  return gulp.src('./app/src/css/**/*.css')
    .pipe(cleancss())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./public/build/css/'));
});

gulp.task('minify-js', () => {
  return gulp.src(['./app/core/models/app.js'])
  .pipe(browserify())
  .pipe(uglify())
  .pipe(rename("all.min.js"))
  .pipe(gulp.dest('./public/build/js/'));
});

gulp.src(['./app/src/fonts']).pipe(gulp.dest('./public/build')); //baaad
gulp.src(['./app/src/fonts/*']).pipe(gulp.dest('./public/build/fonts')); //Maybe I could be better. I have no time!

gulp.src(['./app/src/images']).pipe(gulp.dest('./public/build'));// :(
gulp.src(['./app/src/images/**/*']).pipe(gulp.dest('./public/build/images')); //This is B.I.Z.A.R.R.O

gulp.src(['./app/src/views']).pipe(gulp.dest('./public')); // :-(
gulp.src(['./app/src/views/**/*']).pipe(gulp.dest('./public/views')); //One more once... B.I.Z.A.R.R.O

gulp.task('jasmine', () => {
  return gulp.src(['src/**/*.js', 'spec/**/*_spec.js'])
    .pipe(jasmineBrowser.specRunner())
    .pipe(jasmineBrowser.server({port: 8088}));
});

gulp.task('serve', () => {
  var serve = server.static('./public', 8000);//aff
  serve.start();
  gulp.watch('./app/**/*', function (file) {
    server.notify.apply(serve, [file]);
  });
});
