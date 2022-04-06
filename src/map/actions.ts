/**
 * Map action types and creators.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2020-present
 */

import { actionCreators } from "red-g";

import type {
    MapDimensions,
    MapSelection,
    MapViewport,
    TileSource,
} from "~/map/types";




/**
 * Map component action types.
 */
export enum MapActionType {

    RESET = "Map/RESET",
    SET_READY = "Map/SET_READY",
    SET_TILESOURCE = "Map/SET_TILESOURCE",
    SET_VIEWPORT = "Map/SET_VIEWPORT",
    SET_DIMENSIONS = "Map/SET_DIMENSIONS",
    SET_INTERACTIVE = "Map/SET_INTERACTIVE",
    USER_INTERACTION = "Map/USER_INTERACTION",
    SET_SELECTION = "Map/SET_SELECTION",
    CLEAR_SELECTION = "Map/CLEAR_SELECTION",
    SET_SPA_HASH_SYNC = "Map/SET_SPA_HASH_SYNC",

}




/**
 * Map component action creators.
 */
export default actionCreators(MapActionType, {

    SET_READY: (ready: boolean) => ({ ready }),
    SET_TILESOURCE: (tilesource: TileSource) => ({ tilesource }),
    SET_VIEWPORT: (viewport: Partial<MapViewport>) => ({ viewport }),
    SET_DIMENSIONS: (dimensions: Partial<MapDimensions>) => ({ dimensions }),
    SET_INTERACTIVE: (interactive: boolean) => ({ interactive }),
    SET_SELECTION: (selection: MapSelection) => ({ selection }),
    SET_SPA_HASH_SYNC: (spaHashSync: boolean) => ({ spaHashSync }),

});
