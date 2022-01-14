/**
 * MapGL-related types.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2020-present
 */

/* eslint-disable @typescript-eslint/no-explicit-any */




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




/**
 * Map selection (subset of Maplibre's MapEvent type).
 */
export interface MapSelection {
    point: [number, number],   // [x, y]
    lngLat: [number, number],  // [longitude, latitude]
    features?: Array<any>
}
