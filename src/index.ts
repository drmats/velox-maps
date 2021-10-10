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
import { timeUnit } from "@xcmats/js-toolbox/utils";
import packageInfo from "../package.json";




// ...
const shuffleIndefinetely = async (x: HTMLDivElement): Promise<void> => {
    while (true) {
        x.innerText = shuffle(x.innerText.split("")).join("");
        await delay(timeUnit.second);
    }
};




// ...
run(async () => {
    const title = document.getElementsByTagName("title").item(0);
    if (title) title.innerText = packageInfo.name;

    const app = document.createElement("div");
    app.innerText = packageInfo.name;

    const body = document.getElementsByTagName("body");
    body.item(0)?.appendChild(app);

    console.info(packageInfo.name);

    shuffleIndefinetely(app);
});
