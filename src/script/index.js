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

    var _self = this;

    var elNav = document.getElementById( 'nav-landing' )
    ,   elNavLinks = elNav.querySelectorAll( '.nav-link' );

    _self.swiper = landing.section.initSwiper( elNavLinks );

    Array.prototype.forEach.call( elNavLinks, function( link, i ) {
        link.addEventListener( 'click', function( e ) {
            e.preventDefault();
            var swipeTargetId = e.target.dataset.slideTo || 0;

            landing.section.swipeTo( _self.swiper, swipeTargetId );
        })
    })
});