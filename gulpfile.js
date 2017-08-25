var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('serve', function() {
  connect.server({
    root: './src/',
    port: 8888
  })
});
