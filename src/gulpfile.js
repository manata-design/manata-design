const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass',function (){
    return gulp.src('./sass/**/*.scss')
    .pipe(sass())
    .pipe( autoprefixer({
        cascade: false
    }))
    .pipe(gulp.dest('../css'));
});


gulp.task("default", function () {
    // scssフォルダを監視し、変更があったらコンパイルする
    gulp.watch('./sass/**/*.scss',gulp.series('sass'));
});