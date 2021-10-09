#!/bin/node
/**
 * Copy static assets to `dist` directory.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2019-present
 */

/* eslint-disable no-console */




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

    deepCopy = (src, dst) => {
        mkdirSync(dst, { recursive: true });
        readdirSync(src, { withFileTypes: true })
            .forEach((de) =>
                (de.isFile() ? copyFileSync : deepCopy)(
                    join(src, de.name),
                    join(dst, de.name),
                ),
            );
    };




console.info("Copying static files ...");

deepCopy(srcDir, distDir);

console.info("OK.");
