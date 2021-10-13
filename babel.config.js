/**
 * Babel config.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2019-present
 */




// ...
const

    presets = [
        "@babel/preset-env",
        "@babel/preset-typescript",
        ["@babel/preset-react", {
            "runtime": "automatic",
        }],
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
        ...config,
    };
};
