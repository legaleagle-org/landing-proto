/** ------------------------------------------------------------------------- *\
 | Your Config
 |
 | @description
 | This is an example of a user config to use in your local environment only.
 | You can rename this to config-user.js
 | and the parameters of the dev config will be overridden.
 | The real config-user.js will not be added to the repository
 | since it's ONLY FOR YOU
 | once again: This is only example. Change as you wish
 |
 | @see https://github.com/whatwedo/gulp-wp-theme
 ** ------------------------------------------------------------------------- */

var packageConfig = require( '../package.json' );
var dest = './dist/wp-content/themes/' + packageConfig.name;
var src = './src';

module.exports = {

    /* THIS IS DUMMY CONFIG */
    browserSync: {
        server: false,
        files: [
            dest + "/**",
            "!" + dest + "/**.map"
        ],
        proxy: "myapp.dev",
        open: false
    }
};