var gulp = require('gulp');

gulp.task('default', function() {
  console.log('jelllowww from gulp cli');
});

gulp.task('html', function() {
  console.log("something else from gulp");
}); 

gulp.task('watch', function() {
  watch('../app/index.html', function() {
    gulp.start('html');
  })
  
});
