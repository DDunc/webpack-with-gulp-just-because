require('babel-core/register');

var gulp = require('gulp');
var webpack = require('webpack-stream');

gulp.task('default', () => {
  return gulp.src('modules/main.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('./'));
});

