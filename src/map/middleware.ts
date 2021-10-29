/**
 * MapGL component middleware.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2021-present
 */

/* eslint-disable react-hooks/rules-of-hooks */

import type { Action } from "red-g";
import { isWithPayload } from "red-g";
import throttle from "lodash.throttle";

import { useMemory } from "~/root/memory";
import type { Middleware } from "~/store/types";
import type { MapViewport } from "~/map/types";
import { mapViewportToHashString } from "~/map/functions";




/**
 * Throtled history state updates.
 */
const HISTORY_STATE_UPDATE_TRESHOLD = 200;
const replaceHistoryState = throttle(
    (v: MapViewport) => history.replaceState(
        undefined, "", mapViewportToHashString(v),
    ),
    HISTORY_STATE_UPDATE_TRESHOLD,
);




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
            replaceHistoryState(action.payload.viewport);
        }

        return result;

    };

}
