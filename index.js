'use strict';

let postcss = require('postcss');

module.exports = postcss.plugin('postcss-responsive-grid', (opts = {}) => {

    // Work with options here

    return function (root, result) {

        root.walkDecls(declaration => {
            // declaration.value = declaration.value.split('').reverse().join('');
        });

    };
});
