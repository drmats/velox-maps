/**
 * Velox.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2021-present
 */

/* eslint-disable no-console */

import { createElement } from "react";
import { render } from "react-dom";
import { run } from "@xcmats/js-toolbox/utils";
import { App } from "./app";
import { useMemory as useBareMemory } from "mem-box";
import packageInfo from "../package.json";




/**
 * Type-safe instance of useMemory.
 */
export const useMemory: (() => Ctx) = useBareMemory;




/**
 * Run-time available environment variables.
 */
export const version = packageInfo.version;
export const env = {
    BABEL_ENV: process.env.BABEL_ENV,
    DEBUG: process.env.DEBUG,
    GIT_AUTHOR_DATE: process.env.GIT_AUTHOR_DATE,
    GIT_VERSION: process.env.GIT_VERSION,
    NODE_ENV: process.env.NODE_ENV,
};




/**
 * Entry point.
 */
run(async () => {
    const title = document.getElementsByTagName("title").item(0);
    if (title) title.innerText = packageInfo.name;

    const app = document.createElement("div");
    const body = document.getElementsByTagName("body");
    body.item(0)?.appendChild(app);
    render(createElement(App), app);

    console.info(packageInfo.name);
});




/**
 *  Global declaration merge.
 */
declare global {

    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface Window { }

    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface Ctx { }

}
