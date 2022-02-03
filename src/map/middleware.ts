/**
 * MapGL component middleware.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2021-present
 */

import type { Action } from "red-g";
import { isWithPayload } from "red-g";
import throttle from "lodash.throttle";
import { last } from "@xcmats/js-toolbox/array";

import { appMemory } from "~/root/memory";
import type {
    Middleware,
    ThunkType,
} from "~/store/types";
import { selectHash } from "~/router/selectors";
import { hashToSPARoute } from "~/router/functions";
import type { MapViewport } from "~/map/types";
import {
    selectSpaHashSync,
    selectViewport,
} from "~/map/selectors";
import {
    coordsToMapViewport,
    hashStringToCoords,
    mapViewportToHashString,
} from "~/map/functions";
import { SPA_HASH_UPDATE_TRESHOLD } from "~/map/constants";




/**
 * Throtled SPA hash state updates.
 */
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
    return ({ getState }) => (next) => (action: Action) => {

        const { act, tnk } = appMemory();
        const preState = getState();
        const spaHashSyncEnabled = selectSpaHashSync(preState);
        const mapHash = last(hashToSPARoute(selectHash(preState)));
        const result = next(action);
        const postState = getState();
        const viewport = selectViewport(postState);

        // change SPA hash on each 'SET_VIEWPORT' action dispatch
        // (if that functionality is enabled with 'spaHashSync' flag)
        if (
            spaHashSyncEnabled &&
            action.type === act.map.SET_VIEWPORT.type &&
            isWithPayload(action)
        ) {

            replaceSpaHash(tnk.router.replaceSPAHash, viewport);

        } else if (
            action.type === act.map.SET_SPA_HASH_SYNC.type &&
            isWithPayload(action)
        ) {

            if (!spaHashSyncEnabled && action.payload.spaHashSync) {
                // if map SPA-hash is present in url then adjust map
                try {
                    const coords = hashStringToCoords(mapHash);
                    act.map.SET_VIEWPORT(coordsToMapViewport(coords));
                } catch (_) {
                    // else if no map SPA-hash present,
                    // sync it with current viewport
                    tnk.router.replaceSPAHash(
                        mapViewportToHashString(viewport),
                    );
                }
            } else if (spaHashSyncEnabled && !action.payload.spaHashSync) {
                tnk.router.replaceSPAHash("");
            }

        }

        return result;

    };

}
