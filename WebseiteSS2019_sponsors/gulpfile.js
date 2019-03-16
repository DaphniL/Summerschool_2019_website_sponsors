
var gulp = require('gulp');
var sass = require('gulp-sass')
gulp.task('default', defaultTask);

gulp.task('sass', function(){
    return gulp.src('./assets/sass/**/*.scss')
    .pipe(sass().on('error',sass.logError))
    .pipe(gulp.dest('./assets/css'))
})

gulp.task('sass:watch', function(){
    gulp.watch('./assets/sass/**/*.scss',['sass'])
})



function defaultTask(done) {
  // place code for your default task here
  done();
}
