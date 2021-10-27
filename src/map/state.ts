/**
 * Map state shape description.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2020-present
 */

import type { MapViewport } from "~/map/types";




/**
 * Map component initial state.
 */
export default {

    // viewport state
    viewport: {
        latitude: 52.06,
        longitude: 19.85,
        zoom: 5,
    } as MapViewport,

};
