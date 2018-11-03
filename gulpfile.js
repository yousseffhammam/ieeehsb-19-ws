const gulp = require("gulp"),
	util = require("gulp-util"),
	sass = require("gulp-sass"),
	autoprefixer = require('gulp-autoprefixer'),
	minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin');
	log = util.log;


// moveHTML
gulp.task('moveindex', () => {
    gulp.src('*.html')
    .pipe(gulp.dest('./build/'))
});
// compiling sass to css
gulp.task("styles", function(){
	log("Generate CSS files " + (new Date()).toString());
    gulp.src("./sass/**/*.scss")
    .pipe(sass({
        style: 'expanded',
        includePaths: ['node_modules/susy/sass/']
    }))
    .pipe(autoprefixer("last 3 version","safari 5", "ie 8", "ie 9"))
    .pipe(gulp.dest("./build/css"))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('./build/css'));
});



// minifying js script
gulp.task('scripts', () => {
    gulp.src(['js/*.js','./bower_components/jquery/dist/jquery.min.js'])
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'));
});

// compress images
gulp.task('image', () => {
    gulp.src('images/*/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'));
});

// font awesome style
gulp.task('fontawesomeCSS', () => {
    gulp.src('node_modules/font-awesome/css/font-awesome.min.css')
    .pipe(gulp.dest('./build/css'));
});


// font awesome 
gulp.task('fontawesomeFonts', () => {
    gulp.src('node_modules/font-awesome/fonts/*')
    .pipe(gulp.dest('./build/fonts'))
});

// watching files
gulp.task('watch', () => {
    gulp.watch('*.html', ["moveindex"]);
    gulp.watch([
        'node_modules/susy/sass/_susy.scss',
        'sass/**/*.scss'
    ], ['styles']);
    gulp.watch('js/*.js', ['scripts']);
    gulp.watch('images/*/*', ['image']);
});



gulp.task('default', ['moveindex','styles','scripts','image','fontawesomeCSS','fontawesomeFonts','watch']);
