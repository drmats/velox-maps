/**
 * MapGL-related types.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2020-present
 */

/* eslint-disable @typescript-eslint/no-explicit-any */

import { ThemeVariant } from "~/layout/theme";




/**
 * Real-time map viewport state.
 */
export interface MapViewport {
    bearing: number;
    latitude: number;
    longitude: number;
    pitch: number;
    zoom: number;
}




/**
 * Real-time map dimensions.
 */
export interface MapDimensions {
    width: number;
    height: number;
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
    themeVariant: ThemeVariant;
}




/**
 * Map selection (subset of Maplibre's MapEvent type).
 */
export interface MapSelection {
    point: [number, number],   // [x, y]
    lngLat: [number, number],  // [longitude, latitude]
    features?: Array<any>
    timestamp: number;
}
