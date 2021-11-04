/**
 * Init logic.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2020-present
 */

/* eslint-disable react-hooks/rules-of-hooks */

import { share } from "mem-box";
import { Client as Styletron } from "styletron-engine-atomic";

import { createReduxStore } from "~/store/setup";
import {
    devConsole,
    exposeDevNamespace,
} from "~/root/dev";
import { useMemory } from "~/root/memory";
import packageInfo from "~/../package.json";




/**
 * User Interface - entry point.
 * Can be invoked on server (while statics are generated) and client-side.
 */
export default function init (): ({
    clientEntry: () => Promise<void>;
    ctx: Ctx;
    store: ReturnType<typeof createReduxStore>;
    styletronEngine: Styletron;
}) {

    const

        // app memory - volatile, imperative context/storage
        ctx = useMemory(),

        // redux store with custom middlewares
        store = createReduxStore(),

        // styletron engine
        styletronEngine = new Styletron();


    // share application-specific variables
    share({ store });

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

        // ...
        styletronEngine,

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
