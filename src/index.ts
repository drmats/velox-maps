/**
 * Velox.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2021-present
 */

/* eslint-disable no-console */

import packageInfo from "../package.json";




/**
 * ...
 */
window.addEventListener("load", () => {
    const title = document.getElementsByTagName("title").item(0);
    if (title) title.innerText = packageInfo.name;

    const app = document.createElement("div");
    app.innerText = packageInfo.name;

    const body = document.getElementsByTagName("body");
    body.item(0)?.appendChild(app);

    window.velox.version = packageInfo.version;
    window.velox.env = {
        NODE_ENV: process.env.NODE_ENV,
        BABEL_ENV: process.env.BABEL_ENV,
        DEBUG: process.env.DEBUG,
    };
    console.info(packageInfo.name);
});




/**
 *  Global declaration merge.
 */
declare global {

    interface Window {
        velox: Record<string, unknown>;
    }

}
