#!/bin/node
/**
 * Copy static assets to `dist` directory.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2019-present
 */

/* eslint-disable no-console */

"use strict";

// ...
const

    {
        copyFileSync,
        mkdirSync,
        readdirSync,
    } = require("fs"),

    { join } = require("path"),

    srcDir = "static",
    distDir = "dist",

    // copy all files except topmost "index.template.html"
    // which html-webpack-plugin will take care of
    deepCopy = (src, dst, level = 0) => {
        mkdirSync(dst, { recursive: true });
        readdirSync(src, { withFileTypes: true })
            .filter((de) => level !== 0 || de.name !== "index.template.html")
            .forEach((de) =>
                (de.isFile() ? (s, d, _) => copyFileSync(s, d) : deepCopy)(
                    join(src, de.name),
                    join(dst, de.name),
                    level + 1,
                ),
            );
    };




console.info("Copying static files ...");

deepCopy(srcDir, distDir);

console.info("OK.");
