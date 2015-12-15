/** ------------------------------------------------------------------------- *\
 *  MARKUPS
 ** ------------------------------------------------------------------------- */

var gulp          = require( 'gulp' )
,   del           = require( 'del' )
,   usemin        = require( 'gulp-usemin' )
,   uglify        = require( 'gulp-uglify' )
,   rev           = require( 'gulp-rev' )
,   replace       = require( 'gulp-replace' )
,   concat        = require( 'gulp-concat' )
,   size          = require( 'gulp-size' )
,   notify        = require( 'gulp-notify' )
,   sequence      = require( 'run-sequence' )
,   changed       = require( 'gulp-changed' )
,   config        = require( '../configs/config.js' ).markup;

gulp.task( 'markup:view', function() {

    var s = size();

    return gulp.src( config.view.input )
        .pipe( s )
        .pipe( gulp.dest( config.view.output ) )
        .pipe( notify( {
            onLast: false,
            message: function() {
                return 'Generated <%= file.relative %>\n' + s.prettySize;
            }
        } ) )
    ;
});

gulp.task( 'markup:clean', function() {
    return del( [
        config.view.output + '/index.html',
        config.cache.output + '/'
    ] );
});

gulp.task( 'markups', function( done ) {
    sequence(
        [ 'markup:view' ],
        done
    );
});