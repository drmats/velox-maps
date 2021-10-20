/**
 * Redux root middleware assembly.
 * All application middlewares should be referenced here.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2020-present
 */

/* eslint-disable react-hooks/rules-of-hooks */


import type { Middleware } from "redux";
import thunk from "redux-thunk";

import { useMemory } from "../root/memory";




/**
 * Assembly list of all application-specific middlewares.
 */
export default function assemblyMiddlewares (): Middleware[] {
    const ctx = useMemory();

    return [
        thunk.withExtraArgument(ctx),
    ];
}
