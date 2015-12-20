/**
*
* This is it.
*
*/

(function( _self ){

    var dommon = require( './module/dommon' )
    ,   landing = require( './module/landing' );

    dommon.ready( function() {

        // Navigation Elements
        var elNav = document.getElementById( 'nav-landing' )
        ,   elNavLinks = elNav.querySelectorAll( '.nav-link' );

        // Init Swiper JS
        _self.swiper = landing.section.initSwiper( elNavLinks );

        // Init main navigation
        landing.section.initNav( _self.swiper, elNavLinks );

        // Background Elements
        var elBg = document.querySelectorAll('.bg-img');

        // Init imagesloaded js
        this.il = new imagesLoaded(
            elBg,
            function( instance ) {
                console.log( instance );
            }
        );

    });

}( this ));