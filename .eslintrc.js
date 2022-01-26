/**
 * ESLint config.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2018-present
 */

"use strict";

// ...
const

    { realpathSync } = require("fs"),
    { resolve } = require("path"),
    appDirectory = realpathSync(process.cwd());




// ...
module.exports = {

    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true,
    },


    "extends": [
        "eslint:recommended",
    ],


    "parser": "@babel/eslint-parser",


    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
    },


    "plugins": [
        "import",
    ],


    "root": true,


    "rules": {
        "comma-dangle": [
            "error",
            {
                "arrays": "always-multiline",
                "exports": "always-multiline",
                "functions": "always-multiline",
                "imports": "always-multiline",
                "objects": "always-multiline",
            },
        ],
        "indent": ["warn", 4, { "SwitchCase": 1 }],
        "linebreak-style": ["error", "unix"],
        "no-console": "warn",
        "no-dupe-args": "error",
        "no-dupe-class-members": "error",
        "no-dupe-keys": "error",
        "no-redeclare": "error",
        "no-undef": "error",
        "no-unexpected-multiline": "error",
        "no-unused-vars": ["warn", { "args": "all", "argsIgnorePattern": "^_" }],
        "object-curly-newline": "off",
        "object-curly-spacing": ["error", "always"],
        "prefer-const": "error",
        "quotes": ["error", "double"],
        "semi": ["error", "always"],
        "space-before-function-paren": ["error", "always"],
        "strict": "off",

        "import/first": "error",
        "import/no-amd": "error",
        "import/no-webpack-loader-syntax": "error",
    },


    "overrides": [
        {
            "files": ["*.ts"],
            "parser": "@typescript-eslint/parser",
            "extends": [
                "eslint:recommended",
                "plugin:@typescript-eslint/eslint-recommended",
                "plugin:@typescript-eslint/recommended",
            ],
            "plugins": [
                "@typescript-eslint",
            ],
            "rules": {
                "@typescript-eslint/comma-dangle": [
                    "error",
                    {
                        "arrays": "always-multiline",
                        "enums": "always-multiline",
                        "exports": "always-multiline",
                        "functions": "always-multiline",
                        "generics": "always-multiline",
                        "imports": "always-multiline",
                        "objects": "always-multiline",
                        "tuples": "always-multiline",
                    },
                ],
                "@typescript-eslint/explicit-module-boundary-types": ["warn"],
                "@typescript-eslint/indent": "off",
                "@typescript-eslint/interface-name-prefix": "off",
                "@typescript-eslint/no-unused-vars": ["warn", { "args": "all", "argsIgnorePattern": "^_" }],
                "@typescript-eslint/semi": ["error", "always"],
                "@typescript-eslint/no-non-null-assertion": "off",
                "comma-dangle": "off",
                "indent": ["warn", 4, { "SwitchCase": 1 }],
                "prefer-const": "error",
                "semi": "off",
            },
        },
    ],


    "settings": {
        "import/resolver": {
            "alias": {
                "map": [["~", resolve(appDirectory, "src")]],
            },
        },
    },

};
