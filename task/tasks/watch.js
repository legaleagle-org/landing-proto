/** ------------------------------------------------------------------------- *\
 *  WATCHERS
 ** ------------------------------------------------------------------------- */

var gulp = require( 'gulp' )
,   config = require( '../configs/config' )
;

gulp.task( 'watch', [ 'setWatch' ], function() {

    /* tell webpack when client-side sources change */
    gulp.watch( config.webpack.input + '/**/*.+(html|js|scss)', [ 'webpack' ] );

    /* let gulp knows when blade markup change */
    // gulp.watch( './client/**/*.php', [ 'markup:view' ] ); /* idk. this doesn't work */

    /* let gulp knows when partial markup change */
    gulp.watch( config.markup.cache.input, [ 'markup:cache' ] );

    /* let gulp knows when stylesheet change */
    gulp.watch( config.style.input + '/**/*.scss', [ 'styles' ] );

    /* let gulp knows when dummy json change */
    gulp.watch( './src/script' + '/**/*.dummy.json', [ 'dummy' ] );
} );

gulp.task( 'watch:style', [ 'setWatch' ], function() {

    /* let gulp knows when stylesheet change */
    gulp.watch( config.style.input + '/**/*.scss', [ 'styles' ] );
} );