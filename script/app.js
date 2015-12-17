/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	*
	* This is it.
	*
	*/

	__webpack_require__.p =
	    ( ( location.protocol === 'https:' ) ? 'https://' : 'http://' )
	    + window.location.host
	    + '/public/script/'
	;

	var dommon = __webpack_require__( 1 )
	,   landing = __webpack_require__( 3 );

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

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var Dommon = {
	    ready: __webpack_require__( 2 )
	};

	module.exports = Dommon;

/***/ },
/* 2 */
/***/ function(module, exports) {

	var domReady = function(callback) {
	    var ready = false;

	    var detach = function() {
	        if(document.addEventListener) {
	            document.removeEventListener("DOMContentLoaded", completed);
	            window.removeEventListener("load", completed);
	        } else {
	            document.detachEvent("onreadystatechange", completed);
	            window.detachEvent("onload", completed);
	        }
	    }
	    var completed = function() {
	        if(!ready && (document.addEventListener || event.type === "load" || document.readyState === "complete")) {
	            ready = true;
	            detach();
	            callback();
	        }
	    };

	    if(document.readyState === "complete") {
	        callback();
	    } else if(document.addEventListener) {
	        document.addEventListener("DOMContentLoaded", completed);
	        window.addEventListener("load", completed);
	    } else {
	        document.attachEvent("onreadystatechange", completed);
	        window.attachEvent("onload", completed);

	        var top = false;

	        try {
	            top = window.frameElement == null && document.documentElement;
	        } catch(e) {}

	        if(top && top.doScroll) {
	            (function scrollCheck() {
	                if(ready) return;

	                try {
	                    top.doScroll("left");
	                } catch(e) {
	                    return setTimeout(scrollCheck, 50);
	                }

	                ready = true;
	                detach();
	                callback();
	            })();
	        }
	    }
	};

	module.exports = domReady;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var Landing = {
	    section: __webpack_require__( 4 ),
	    viewport: __webpack_require__( 5 )
	};

	module.exports = Landing;

/***/ },
/* 4 */
/***/ function(module, exports) {

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

/***/ },
/* 5 */
/***/ function(module, exports) {

	var Viewport = {};

	Viewport.isLandscape = function() {
	    return !!(verge.viewportW() > verge.viewportH());
	}

	module.exports = Viewport;

/***/ }
/******/ ]);