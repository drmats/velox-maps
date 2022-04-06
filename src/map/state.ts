/**
 * Map state shape description.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2020-present
 */

import type {
    MapViewport,
    MapSelection,
} from "~/map/types";
import { tileSources } from "~/map/constants";




/**
 * Map component initial state.
 */
export default {

    // is map loaded and ready?
    ready: false,

    // what's the tilesource (map style)?
    tilesource: tileSources[0],

    // viewport state
    viewport: {
        bearing: 0,
        latitude: 52.06,
        longitude: 19.85,
        pitch: 0,
        zoom: 5,
    } as MapViewport,

    // viewport dimensions
    dimensions: {
        width: 0,
        height: 0,
    },

    // should map be movable by user?
    interactive: true,

    // when was the last time when map was touched by user?
    lastInteraction: -1,

    // last map-click details
    selection: null as MapSelection | null,

    // should map viewport be synchronized with browser location bar?
    spaHashSync: true,

};
