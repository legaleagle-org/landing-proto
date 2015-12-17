var Viewport = {};

Viewport.isLandscape = function() {
    return !!(verge.viewportW() > verge.viewportH());
}

module.exports = Viewport;