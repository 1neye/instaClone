var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');

gulp.task('sass', function(done) {
    gulp.src("app/scss/*.scss") // путь к sass файлам
        .pipe(plumber())    
        .pipe(sass())
        .pipe(gulp.dest("app/css/")) //папка для выгрузки css файлов
        .pipe(browserSync.stream());


    done();
});

gulp.task('serve', function(done) {

   browserSync.init({
        server: {
            baseDir: "app/"
        },
        files:['app/*.html','app/css/*.css']
    });

    gulp.watch("app/scss/*.scss", gulp.series('sass'));
    gulp.watch("app/*.html").on('change', () => {
      browserSync.reload();
      done();
    });
  

    done();
});

gulp.task('default', gulp.series('sass', 'serve'));
