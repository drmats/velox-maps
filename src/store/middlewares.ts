/**
 * Redux root middleware assembly.
 * All application middlewares should be referenced here.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2020-present
 */

import thunk from "redux-thunk";

import type { Middleware } from "~/store/types";
import { appMemory } from "~/root/memory";
import createMapGLMiddleware from "~/map/middleware";




/**
 * Assembly list of all application-specific middlewares.
 */
export default function assemblyMiddlewares (): Middleware[] {
    const ctx = appMemory();

    return [
        thunk.withExtraArgument(ctx),
        createMapGLMiddleware(),
    ];
}
