/**
*
* This is it.
*
*/

__webpack_public_path__ =
    ( ( location.protocol === 'https:' ) ? 'https://' : 'http://' )
    + window.location.host
    + '/public/script/'
;

var dommon = require( './module/dommon' )
,   landing = require( './module/landing' );

if ( !landing.viewport.isLandscape() )
    document.getElementById( 'restrick-portrait' )
        .style.display = 'table';

dommon.ready( function() {

    console.log( landing.viewport );

    this.swiper = landing.section.initSwiper();
});