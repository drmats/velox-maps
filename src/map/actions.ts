/**
 * Map action types and creators.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2020-present
 */

import { actionCreators } from "red-g";

import type { MapViewport } from "~/map/types";




/**
 * Map component action types.
 */
export enum MapActionType {

    RESET = "Map/RESET",
    SET_VIEWPORT = "Map/SET_VIEWPORT",

}




/**
 * Map component action creators.
 */
export default actionCreators(MapActionType, {

    SET_VIEWPORT: (viewport: MapViewport) => ({ viewport }),

});
