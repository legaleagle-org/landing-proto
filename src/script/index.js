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
                instance.elements.map( function( a ) {

                    var bgParent = dommon.traverse.closest( a, '.bg-inner' )
                    ,   bgNewEl = document.createElement('div')
                    ,   imgSrc = a.attributes.src.value;

                    bgNewEl.classList.add('bgnew-img');

                    bgNewEl = bgParent.insertBefore( bgNewEl, bgParent.firstChild );

                    bgNewEl.style.background = 'url("' + imgSrc + '")';
                    bgNewEl.style.backgroundSize = 'cover';
                    bgNewEl.style.backgroundPosition = '50% 0%';

                    return a;
                });
            }
        );

    });

}( this ));