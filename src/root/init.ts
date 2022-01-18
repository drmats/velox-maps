/**
 * Init logic.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2020-present
 */

/* eslint-disable @typescript-eslint/no-empty-interface */

import { share } from "mem-box";

import { createReduxStore } from "~/store/setup";
import {
    devConsole,
    exposeDevNamespace,
} from "~/root/dev";
import { appMemory } from "~/root/memory";
import packageInfo from "~/../package.json";




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
        ctx = appMemory(),

        // mutable subcontext
        mut = {},

        // redux store with custom middlewares
        store = createReduxStore();


    // share application-specific variables
    share({ mut, store });

    return {

        // should be invoked just on the client-side
        clientEntry: async () => {

            // console logger - more sophisticated logger should be set-up here
            const logger = devConsole();

            // share application-specific variables (client-only)
            share({ logger });

            // greet
            logger.info(`Boom! 💥 - ${packageInfo.name}`);

            // expose dev. namespace and some convenience shortcuts
            await exposeDevNamespace();

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
     * Mutable subcontext.
     */
    interface Mut { }

    /**
     * Shared memory context.
     */
    interface Ctx {
        logger: Console;
        mut: Mut;
        store: ReturnType<typeof createReduxStore>;
    }

}
