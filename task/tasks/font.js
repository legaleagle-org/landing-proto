/** ------------------------------------------------------------------------- *\
 * Fonts
 ** ------------------------------------------------------------------------- */

var gulp       = require('gulp')
,   config     = require('../configs/config').font
,   changed    = require('gulp-changed')
,   size       = require('gulp-size')
,   notify     = require('gulp-notify')
,   gulpif     = require('gulp-if')
;

gulp.task('font', function() {

    var s = size();

    return gulp.src( config.input )
        .pipe( changed( config.output ) )
        .pipe( s )
        .pipe( gulp.dest( config.output ) )
        .pipe( notify( {
            onLast: true,
            message: function() {
                return 'Generated font files\n' + s.prettySize;
            }
        } ) )
    ;
});
