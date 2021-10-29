/**
 * MapGL component middleware.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2021-present
 */

/* eslint-disable react-hooks/rules-of-hooks */

import type { Action } from "red-g";
import { isWithPayload } from "red-g";

import { useMemory } from "~/root/memory";
import type { Middleware } from "~/store/types";
import type { MapViewport } from "~/map/types";
import { format as f } from "~/map/functions";




/**
 * MapGL middleware.
 */
export default function createMapGLMiddleware (): Middleware {

    // ...
    return () => (next) => (action: Action) => {

        const { act } = useMemory();
        const result = next(action);

        // change url hash on each 'SET_VIEWPORT' action dispatch
        if (
            action.type === act.map.SET_VIEWPORT.type &&
            isWithPayload(action)
        ) {
            const v: MapViewport = action.payload.viewport;
            history.replaceState(
                undefined, "",
                `#${f(v.zoom)}/${f(v.latitude)}/${f(v.longitude)}`,
            );
        }

        return result;

    };

}
