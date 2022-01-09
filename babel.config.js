/**
 * Babel config.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2019-present
 */

"use strict";

// ...
const

    presets = [
        [
            "@babel/preset-env",
            {
                targets: {
                    esmodules: true,
                },
            },
        ],
        "@babel/preset-typescript",
    ],

    plugins = [
        [
            "module-resolver",
            {
                root: ["./src"],
                alias: {
                    "~": "./src",
                },
            },
        ],
    ],

    config = {
        comments: false,
        shouldPrintComment: () => false,
    };




// ...
module.exports = function (api) {
    api.cache(true);

    return {
        presets,
        plugins,
        ...config,
    };
};
