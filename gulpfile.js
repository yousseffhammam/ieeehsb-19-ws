const gulp = require("gulp"),
	util = require("gulp-util"),
	sass = require("gulp-sass"),
	autoprefixer = require('gulp-autoprefixer'),
	minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin');
	log = util.log;

// compiling sass to css

gulp.task("styles", function(){
	log("Generate CSS files " + (new Date()).toString());
    gulp.src("./sass/**/*.scss")
		.pipe(sass({
            style: 'expanded',
            includePaths: ['node_modules/susy/sass/']
        }))
        .pipe(autoprefixer("last 3 version","safari 5", "ie 8", "ie 9"))
		.pipe(gulp.dest("./css"))
		.pipe(rename({suffix: '.min'}))
		.pipe(minifycss())
		.pipe(gulp.dest('./css'));
});



// minifying js script
gulp.task('scripts', () => {
    gulp.src([
            'js/*.js'
        ])
        .pipe(uglify())
        .pipe(gulp.dest('./js'));
});

// compress images
gulp.task('image', () => {
    gulp.src('img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./images'));
});

// font awesome
gulp.task('fontawesome', () => {
    gulp.src('node_modules/font-awesome/css/font-awesome.min.css')
        .pipe(gulp.dest('./css'));
});

// fonts
gulp.task('fonts', () => {
    gulp.src('node_modules/font-awesome/fonts/*')
        .pipe(gulp.dest('./fonts'))
});

// watching files
gulp.task('watch', () => {
    gulp.watch([
        'node_modules/susy/sass/_susy.scss',
        'sass/**/*.scss'
    ], ['styles']);
    gulp.watch('js/*.js', ['scripts']);
    gulp.watch('img/*', ['image']);
});



gulp.task('default', [
    'styles',
    'scripts',
    'image',
    'fontawesome',
    'fonts',
    'watch'
])