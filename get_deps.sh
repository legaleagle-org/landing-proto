#!/bin/bash

# opinionated package downloader

npm_packages_d=(
    autoprefixer-loader
    babel-loader
    bundle-loader
    css-loader
    del
    expose-loader
    gulp
    gulp-autoprefixer
    gulp-cached
    gulp-changed
    gulp-clip-empty-files
    gulp-concat
    gulp-copy
    gulp-data
    gulp-filter
    gulp-flatten
    gulp-html-replace
    gulp-if
    gulp-ignore
    gulp-imagemin
    gulp-jshint
    gulp-logger
    gulp-notify
    gulp-order
    gulp-plumber
    gulp-print
    gulp-rename
    gulp-replace
    gulp-rev
    gulp-sass
    gulp-size
    gulp-sourcemaps
    gulp-streamify
    gulp-substituter
    gulp-template
    gulp-uglify
    gulp-usemin
    gulp-util
    html-loader
    jshint-stylish
    main-bower-files
    node.extend
    path
    pretty-hrtime
    run-sequence
    sass-loader
    style-loader
    vinyl-source-stream
    watchify
    webpack
    webpack-stream
    wiredep
    yargs
)

bower_packages=(
    jquery
    fontawesome
    svg-injector
    verge
    imagesloaded
)

create_package_json()
{
    npm init
}

install_npm_packages()
{
    npm i -D ${npm_packages_d[@]}
}

create_bower_json()
{
    bower init
}

install_bower_packages()
{
    bower install ${bower_packages[@]} --save
}

if ! npm_var="$(type -p "npm")" || [ -z $npm_var ]; then
    echo 'npm command does not exists.';
    exit 1;
else
    if [ -e package.json ]; then
        install_npm_packages
    else
        create_package_json && install_npm_packages
    fi
fi

if ! bower_var="$(type -p "bower")" || [ -z $bower_var ]; then
    echo 'bower command does not exists.';
    exit 1;
else
    if [ -e bower.json ]; then
        install_bower_packages
    else
        create_bower_json && install_bower_packages
    fi
fi