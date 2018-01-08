require('./gulp/tasks/styles');
require('./gulp/tasks/watch');

// MOVED ALL TASK TO SEPARATE FILES
// var gulp = require('gulp');
// watch  = require('gulp-watch'),
// browserSync = require('browser-sync').create();
// postcss = require('gulp-postcss'),
// autoprefixer = require('autoprefixer'),
// cssvars = require('postcss-simple-vars'),
// nested = require('postcss-nested'),
// cssImport = require('postcss-import'),

// CSS PIPE TASK moved to gulp/styles.js
// gulp.task('styles', function() {
//   return gulp.src('app/assets/styles/styles.css')
//              .pipe(postcss([cssvars, cssImport, nested, autoprefixer]))
//              .pipe(gulp.dest('app/temp/styles'));
// }); 

// WATCH TASK moved to gulp/watch.js
// gulp.task('watch', function() {

//   browserSync.init({
//     notify: false,
//     server: {
//       baseDir: 'app'
//     }
//   });

//   watch('app/index.html', function() {
//     browserSync.reload();
//   });

//   watch('app/assets/styles/**/*.css', function() {
//     gulp.start('cssInject');
//   });
// });

// CSS INJECT TASK
// gulp.task('cssInject', ['styles'], function() {
//   return gulp.src('app/temp/styles/styles.css')
//       .pipe(browserSync.stream());
// });