/**
 * Init logic.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2020-present
 */

/* eslint-disable react-hooks/rules-of-hooks */

import { assign } from "@xcmats/js-toolbox/struct";
import { devEnv } from "@xcmats/js-toolbox/utils";
import { isObject } from "@xcmats/js-toolbox/type";
import { share } from "mem-box";

import { createReduxStore } from "../store/setup";
import { devNamespaceKey } from "./config";
import { useMemory } from "./memory";
import packageInfo from "../../package.json";




/**
 * Development environment libraries.
 */
const devEnvLibs = async (): Promise<Record<string, unknown>> => ({
    toolbox: await import("@xcmats/js-toolbox"),
});




/**
 * User Interface - entry point.
 * Can be invoked on server (while statics are generated) and client-side.
 */
export default function init (): ({
    clientEntry: () => Promise<void>;
    ctx: Ctx;
    store: ReturnType<typeof createReduxStore>;
}) {

    const

        // app memory - volatile, imperative context/storage
        ctx = useMemory(),

        // redux store with custom middlewares
        store = createReduxStore();


    // share application-specific variables
    share({ store });

    return {

        // should be invoked just on the client-side
        clientEntry: async () => {

            // console logger - more sophisticated logger shouls be set-up here
            const logger = console;

            // share application-specific variables (client-only)
            share({ logger });

            // greet
            logger.info(`Boom! 💥 - ${packageInfo.name}`);

            // expose dev. namespace and some convenience shortcuts
            if (devEnv()) {
                const
                    devNs = window[packageInfo.name],
                    devNsContent = {
                        libs: await devEnvLibs(),
                        ctx, packageInfo,
                    };
                if (isObject(devNs)) {
                    assign(devNs, devNsContent);
                } else {
                    window[packageInfo.name] = devNs;
                }
                window[devNamespaceKey] = window[packageInfo.name];
            }

            // set window title
            const title = document.getElementsByTagName("title").item(0);
            if (title) title.innerText = packageInfo.name;

        },

        // ...
        ctx,

        // ...
        store,

    };

}




/**
 * Global declaration merge.
 */
declare global {

    /**
     * DOM window
     */
    interface Window {
        [key: string]: unknown;
    }

    /**
     * Shared memory context.
     */
    interface Ctx {
        logger: Console;
        store: ReturnType<typeof createReduxStore>;
    }

}
