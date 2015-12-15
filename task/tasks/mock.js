var gulp = require( 'gulp' )
,   del = require( 'del' )
,   notify = require( 'gulp-notify' )
,   size = require( 'gulp-size' )
,   changed = require( 'gulp-changed' );

gulp.task( 'mock', function() {

    var s = size();

    return gulp.src( './src/script/**/*.mock.json' )
        .pipe( changed( './public/script/test' ) )
        .pipe( s )
        .pipe( gulp.dest( './public/script/test' ) )
        .pipe( notify( {
            onLast: false,
            message: function() {
                return 'Generated <%= file.relative %>\n' + s.prettySize;
            }
        } ) );
} );