/**
 * MapGL component middleware.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2021-present
 */

import type { Action } from "red-g";
import { isWithPayload } from "red-g";
import throttle from "lodash.throttle";

import { appMemory } from "~/root/memory";
import type {
    Middleware,
    ThunkType,
} from "~/store/types";
import type { MapViewport } from "~/map/types";
import { mapViewportToHashString } from "~/map/functions";




/**
 * Throtled SPA hash state updates.
 */
const SPA_HASH_UPDATE_TRESHOLD = 200;
const replaceSpaHash = throttle(
    (rsh: (h: string) => ThunkType, v: MapViewport) =>
        rsh(mapViewportToHashString(v)),
    SPA_HASH_UPDATE_TRESHOLD,
);




/**
 * MapGL middleware.
 */
export default function createMapGLMiddleware (): Middleware {

    // ...
    return () => (next) => (action: Action) => {

        const { act, tnk } = appMemory();
        const result = next(action);

        // change SPA hash on each 'SET_VIEWPORT' action dispatch
        if (
            action.type === act.map.SET_VIEWPORT.type &&
            isWithPayload(action)
        ) {
            replaceSpaHash(tnk.router.replaceSPAHash, action.payload.viewport);
        }

        return result;

    };

}
