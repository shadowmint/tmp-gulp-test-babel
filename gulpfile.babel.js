import gulp from 'gulp';
import foo2 from './gulp/foo';
import foo from 'foo';

gulp.task('default', (callback) => {
  console.log(foo2());
  console.log(foo());
  callback();
});
