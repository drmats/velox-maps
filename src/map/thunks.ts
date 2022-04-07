/**
 * Map thunks.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2020-present
 */

import type { ThunkType } from "~/store/types";
import type { MapViewport } from "~/map/types";




/**
 * Set map viewport, but first stop all eventual map animations.
 */
export const setViewport = (viewport: Partial<MapViewport>): ThunkType =>
    async (_d, _getState, { act, mut }) => {
        const map = mut?.mapRef?.current?.getMap();
        if (map) { map.stop(); }
        setTimeout(() => {
            act.map.SET_VIEWPORT(viewport);
        }, 100);
    };
