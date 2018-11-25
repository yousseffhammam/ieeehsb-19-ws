const gulp = require("gulp"),
    // files collector
    concat = require('gulp-concat'),
    // sass to css compiler
    sass = require("gulp-sass"),
    // autoprefixer
    autoprefixer = require('gulp-autoprefixer'),
    // minifying CSS files
    cleanCSS  = require('gulp-clean-css'),
    // minifying js files
    minify = require('gulp-minify'),
    // es6 compiler
    babel = require('gulp-babel'),
    // image minifying
    imagemin = require('gulp-imagemin'),
    // files renamer
    rename = require('gulp-rename'),
    // loging the time and special message when changing
    util = require("gulp-util"),
    log = util.log;

// move HTML
gulp.task('moveindex', () => {
    gulp.src('*.html')
    .pipe(gulp.dest('./build/'))
});

// compiling sass to css
gulp.task("styles", function () {
    log("Generate CSS files " + (new Date()).toString());
    gulp.src(["./sass/**/*.scss", ])
    .pipe(sass({
        style: 'expanded',
        includePaths: ['node_modules/susy/sass/']
    }))
    .pipe(autoprefixer("last 5 version", "safari 5", "ie 8", "ie 9"))
    .pipe(gulp.dest("./build/css"))
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./build/css'))
});

// libraries style
gulp.task('libraries_CSS', () => {
    gulp.src([
        'node_modules/font-awesome/css/font-awesome.min.css'
    ])
    .pipe(gulp.dest('./build/css'));
});

// minifying js script
gulp.task('scripts', () => {
    gulp.src(['js/**/*.js'])
    .pipe(minify({
        ext:{
            min:'.min.js'
        },
        noSource: false
    }))
    .pipe(gulp.dest('./build/js'));
});

// library scripts
gulp.task('libraries_scripts', () => {
    gulp.src([
        './bower_components/jquery/dist/jquery.min.js'
    ])
    .pipe(gulp.dest('./build/js'))
});

// compress images
gulp.task('image', () => {
    gulp.src('images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'))
});

// font awesome fonts
gulp.task('fontawesome_Fonts', () => {
    gulp.src('node_modules/font-awesome/fonts/*')
        .pipe(gulp.dest('./build/fonts'))
});

// articles
gulp.task('articles', () => {
    gulp.src('pdf/**/**')
        .pipe(gulp.dest('./build/pdf'))
});

// watching files
gulp.task('watch', () => {
    gulp.watch('*.html', ["moveindex"]);
    gulp.watch(['sass/**/*.scss'], ['styles']);
    gulp.watch('js/**/*.js', ['scripts']);
    gulp.watch('images/**/**', ['image']);
    gulp.watch('./pdf/**/**', ["articles"]);
});



gulp.task('default', ['moveindex', 'styles', 'libraries_CSS',  'libraries_scripts', 'image', 'fontawesome_Fonts', 'articles', 'watch']);