/** ------------------------------------------------------------------------- *\
 |  STYLE
 ** ------------------------------------------------------------------------- */


var gulp         = require('gulp')
,   config       = require('../configs/config')
,   errors       = require('../utils/error-handler')
,   util         = require('gulp-util')
,   sass         = require('gulp-sass')
,   styleguide   = require('sc5-styleguide')
,   autoprefixer = require('gulp-autoprefixer')
,   size         = require('gulp-size')
,   gulpif       = require('gulp-if')
,   sourcemaps   = require('gulp-sourcemaps')
,   sequence     = require('run-sequence')
,   replace      = require('gulp-replace')
,   rename       = require('gulp-rename')
;

var file = 'style';

gulp.task('styleguide:generate', function() {

    return gulp.src( config.styleguide.src + '**/*.scss' )
        .pipe(styleguide.generate( config.styleguide.options ))
        .pipe(gulp.dest( config.styleguide.dest ))
    ;
});

gulp.task('styleguide:apply', function() {

    return gulp.src( config.styleguide.src + file + '.scss' )
        .pipe(sass(config.style.options.sass))
        .pipe(styleguide.applyStyles())
        .pipe(gulp.dest( config.styleguide.dest ))
    ;
});

gulp.task( 'styleguides', function( done ) {
    sequence(
        [ 'styleguide:generate' ],
        [ 'styleguide:apply' ],
        done
    );
});