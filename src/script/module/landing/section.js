var Section = {};

Section.currentSlide = 0;

Section.initSwiper = function( _links ) {

    var _self = this;

    var _swiper = new Swiper('.swiper-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        spaceBetween: 0,
        loop: false,
        hashnav: true
    });

    _self.currentSlide = _swiper.activeIndex;
    _self.updateLinks( _links );

    _swiper.on( 'slideChangeEnd', function () {
        _self.currentSlide = _swiper.activeIndex;
        _self.updateLinks( _links );
    });

    return _swiper;
}

Section.initNav = function( swiper, navLinks ) {

    var _self = this;

    Array.prototype.forEach.call( navLinks, function( link, i ) {

        link.addEventListener( 'click', function( e ) {
            e.preventDefault();
            var swipeTargetId = e.target.dataset.slideTo || 0;

            _self.swipeTo( swiper, swipeTargetId );
        })
    });
}

Section.swipeTo = function( _swiper, _id ) {

    var _self = this;

    _id = parseInt( _id, 10 );

    if ( _self.currentSlide === _id ) return;

    _swiper.slideTo( _id, 300 );
};

Section.updateLinks = function( _links ) {

    var _self = this;

    Array.prototype.forEach.call( _links, function( _link, i ) {

        if ( parseInt( _link.dataset.slideTo, 10 ) === _self.currentSlide ) _link.classList.add( 'active' );
        else _link.classList.remove( 'active' );
    });
}

module.exports = Section;