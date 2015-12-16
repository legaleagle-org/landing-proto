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

dommon.ready( function() {

    this.swiper = landing.section.initSwiper();
});