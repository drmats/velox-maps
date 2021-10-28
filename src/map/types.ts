/**
 * MapGL-related types.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2020-present
 */




/**
 * Real-time viewport state.
 */
export interface MapViewport {
    latitude: number;
    longitude: number;
    zoom: number;
}




/**
 * MapGL component properties.
 */
export interface MapGLProps {
    mapStyle: string;
    width: string;
    height: string;
    minZoom: number;
    maxZoom: number;
}




/**
 * Map style source.
 */
export interface TileSource {
    label: string;
    url: string;
}
