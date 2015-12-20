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

	(function( _self ){

	    var dommon = __webpack_require__( 1 )
	    ,   landing = __webpack_require__( 4 );

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
	        this.imgLoaded = new imagesLoaded(
	            elBg,
	            function( instance ) {
	                instance.elements.map( function( a ) {

	                    // DOM Elements & Attributes
	                    var bgParent = dommon.traverse.closest( a, '.bg-container' )
	                    ,   bgNewEl = document.createElement('div')
	                    ,   imgSrc = a.attributes.src.value
	                    ,   imgPos = a.dataset.bgPosition;

	                    if ( bgParent !== null) {

	                        // Add css class
	                        bgNewEl.classList.add('bgnew-img');

	                        // Prepend to bg parent
	                        bgNewEl = bgParent.insertBefore( bgNewEl, bgParent.firstChild );

	                        // Style
	                        bgNewEl.style.background = 'url("' + imgSrc + '")';
	                        bgNewEl.style.backgroundSize = 'cover';
	                        bgNewEl.style.backgroundPosition = imgPos;
	                    }
	                });
	            }
	        );
	    });
	}( this ));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var Dommon = {
	    ready: __webpack_require__( 2 ),
	    traverse: __webpack_require__( 3 )
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
/***/ function(module, exports) {

	function closest( $elem, selector ) {
	    var $matches;

	    // loop through parents
	    while ( $elem && $elem !== document ) {
	        // find all siblings that match the selector
	        $matches = $elem.parentNode.querySelectorAll(selector);
	        // check if our element is matched (poor-man's Element.matches())
	        if ([].indexOf.call($matches, $elem) !== -1) return $elem;

	        // go up the tree
	        $elem = $elem.parentNode;
	    }

	    return null;
	}

	module.exports = {
	    closest: closest
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var Landing = {
	    section: __webpack_require__( 5 ),
	    viewport: __webpack_require__( 6 )
	};

	module.exports = Landing;

/***/ },
/* 5 */
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
	    _self.updateNav( _links );

	    _swiper.on( 'slideChangeEnd', function () {
	        _self.currentSlide = _swiper.activeIndex;
	        _self.updateNav( _links );
	    });

	    return _swiper;
	}

	Section.initNav = function( swiper, linksEl ) {

	    var _self = this;

	    Array.prototype.forEach.call( linksEl, function( link, i ) {

	        link.addEventListener( 'click', function( e ) {
	            e.preventDefault();
	            var swipeTargetId = e.target.dataset.slideTo || 0;

	            _self.swipeTo( swiper, swipeTargetId );
	        })
	    });
	}

	Section.updateNav = function( linksEl ) {

	    var _self = this;

	    Array.prototype.forEach.call( linksEl, function( _link, i ) {

	        if ( parseInt( _link.dataset.slideTo, 10 ) === _self.currentSlide ) _link.classList.add( 'active' );
	        else _link.classList.remove( 'active' );
	    });
	}

	Section.swipeTo = function( _swiper, _id ) {

	    var _self = this;

	    _id = parseInt( _id, 10 );

	    if ( _self.currentSlide === _id ) return;

	    _swiper.slideTo( _id, 300 );
	};

	module.exports = Section;

/***/ },
/* 6 */
/***/ function(module, exports) {

	var Viewport = {};

	Viewport.isLandscape = function() {
	    return !!(verge.viewportW() > verge.viewportH());
	}

	module.exports = Viewport;

/***/ }
/******/ ]);