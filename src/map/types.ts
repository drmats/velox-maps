/**
 * MapGL-related types.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2020-present
 */




/**
 * ...
 */
export interface MapViewport {
    latitude: number;
    longitude: number;
    zoom: number;
}




/**
 * ...
 */
export interface MapGLProps {
    mapStyle: string;
    width: string;
    height: string;
    minZoom: number;
    maxZoom: number;
}