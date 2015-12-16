var Section = {};

Section.initSwiper = function() {
    return new Swiper('.swiper-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        spaceBetween: 0,
        loop: false
    });
}

module.exports = Section;