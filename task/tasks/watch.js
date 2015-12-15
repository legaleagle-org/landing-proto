/** ------------------------------------------------------------------------- *\
 *  WATCHERS
 ** ------------------------------------------------------------------------- */

var gulp = require( 'gulp' )
,   config = require( '../configs/config' )
;

gulp.task( 'watch', [ 'setWatch' ], function() {

    /* let gulp knows when markups change */
    gulp.watch( config.markup.view.input[0], [ 'markups' ] );

    /* tell webpack when client-side sources change */
    gulp.watch( config.webpack.input + '/**/*.js', [ 'webpack' ] );

    /* let gulp knows when stylesheet change */
    gulp.watch( config.style.input + '/**/*.scss', [ 'styles' ] );
} );