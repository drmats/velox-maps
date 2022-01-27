/**
 * Velox.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2021-present
 */

import { createElement } from "react";
import { render } from "react-dom";
import {
    getProcess,
    run,
} from "@xcmats/js-toolbox/utils";

import init from "~/root/init";
import packageInfo from "~/../package.json";




/**
 * Earliest init code - before DOM is ready.
 */
const { clientEntry, store, ctx } = init();




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
 * Entry point - DOM ready.
 */
run(async () => {

    // create application DOM attach point
    const body = document.getElementsByTagName("body");
    const app = document.createElement("div");
    body.item(0)?.prepend(app);

    // fetch root wrapper module tree
    const { default: createRootWrapper } = await import("~/root/components/Wrapper");

    // instantiate root wrapper
    const Root = createRootWrapper(store);

    // execute client-entry code
    await clientEntry();

    // fetch Application module tree
    const { App } = await import("~/app/components/Main");

    // embed react application
    render(
        createElement(Root, { element: createElement(App) }),
        app,
    );

    // set appropriate redux flag after initial client render
    ctx.tnk.app.setReady(true);

});
