/**
 * Build-time helper functions.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2019-present
 */

"use strict";

// ...
const { execSync } = require("child_process");




// execute git command, intercept output and ignore all eventual errors
exports.git = (command) => {
    try {
        return execSync(`git ${command}`, { encoding: "utf8" }).trim();
    } catch {
        return "unknown";
    }
};
