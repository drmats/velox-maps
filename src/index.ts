/**
 * Velox.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2021-present
 */

/* eslint-disable no-constant-condition */
/* eslint-disable no-console */

import { run } from "@xcmats/js-toolbox/utils";
import { shuffle } from "@xcmats/js-toolbox/array";
import { delay } from "@xcmats/js-toolbox/async";
import {
    getProcess,
    timeUnit,
} from "@xcmats/js-toolbox/utils";
import { useMemory } from "mem-box";

import packageInfo from "~/../package.json";




/**
 * Type-safe instance of useMemory.
 */
export const appMemory: (() => Ctx) = useMemory;




/**
 * ...
 */
const shuffleIndefinetely = async (x: HTMLDivElement): Promise<void> => {
    while (true) {
        x.innerText = shuffle(x.innerText.split("")).join("");
        await delay(timeUnit.second);
    }
};




/**
 * Run-time available environment variables.
 */
export const version = packageInfo.version;
export const env = {
    ...getProcess().env,
    GIT_AUTHOR_DATE: process.env.GIT_AUTHOR_DATE,
    GIT_VERSION: process.env.GIT_VERSION,
};




/**
 * Entry point.
 */
run(async () => {
    const title = document.getElementsByTagName("title").item(0);
    if (title) title.innerText = packageInfo.name;

    const app = document.createElement("div");
    app.innerText = packageInfo.name;

    const body = document.getElementsByTagName("body");
    body.item(0)?.prepend(app);

    console.info(packageInfo.name);

    shuffleIndefinetely(app);
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
