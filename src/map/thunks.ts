/**
 * Component thunks.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2020-present
 */

import {
    handleException,
    pipe,
} from "@xcmats/js-toolbox/func";

import type { ThunkType } from "~/store/types";
import {
    coordsToMapViewport,
    hashStringToCoords,
} from "~/map/functions";




/**
 * Map component thunks.
 */
export default {

    /**
     * Parse URL hash and set map viewport accordingly.
     */
    setViewportFromHash: (): ThunkType =>
        async (_d, _getState, { act }) => handleException(() =>
            pipe(document.URL) (
                url => new URL(url),
                urlObj => urlObj.hash,
                hashStringToCoords,
                coordsToMapViewport,
                act.map.SET_VIEWPORT,
            ),
        ),

};
