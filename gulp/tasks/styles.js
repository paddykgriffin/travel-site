const gulp = require('gulp'),
      postcss = require('gulp-postcss'),
      autoprefixer = require('autoprefixer'),
      cssvars = require('postcss-simple-vars'),
      nested = require('postcss-nested'),
      cssimport = require('postcss-import'),
      mixins = require('postcss-mixins'),
      rgba = require('postcss-hexrgba')



gulp.task('styles', function(){
    return gulp.src('./app/assets/styles/main.css')
        .pipe(postcss([cssimport, mixins, cssvars, nested, rgba, autoprefixer]))
        .on('error', function(errorInfo){
            console.log(errorInfo.toString())
            this.emit('end')
        })
        .pipe(gulp.dest('./app/temp/'))
})