const gulp = require('gulp'),
      watch = require('gulp-watch'),
      browserSync = require('browser-sync').create()


gulp.task('watch', function(){

    // Browser Sync
   browserSync.init({
       notify: false,
       server: {
           baseDir: "app"
       }
   })
  
   // HTNL
   watch('./app/index.html',function(){
       browserSync.reload()
   })

   // Styles
   watch('./app/assets/styles/**/*.css',function(){
       gulp.start('cssInject')
   })

})


gulp.task('cssInject', ['styles'], function() {
    return gulp.src('./app/temp/main.css')
        .pipe(browserSync.stream())
})