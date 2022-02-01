/**
 * Map functions.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2020-present
 */

import type { Map } from "maplibre-gl";

import type { MapViewport } from "~/map/types";




/**
 * Imperative operations on map.
 */
type MapOps = {
    addSymbol: (name: string, url: string) => MapOps;
};
export const mapOps = (map: Map | null): MapOps => {
    const ops: MapOps = {
        // load image and add it to map under chosen name
        addSymbol: (name, url) => {
            map && map.loadImage(url, (error: Error, image: ImageData) => {
                if (!error && image) map.addImage(name, image);
            });
            return ops;
        },
    };
    return ops;
};




/**
 * Format input number as string with desired precision.
 */
export const format = (input: number, precision = 4): string =>
    input.toFixed(precision);




/**
 * MapViewport -> "zoom/lat/lon" conversion
 */
export const mapViewportToHashString = (v: MapViewport): string =>
    `${format(v.zoom)}/${format(v.latitude)}/${format(v.longitude)}`;




/**
 * "zoom/lat/lon" -> [zoom, lat, lon] conversion.
 * @throws Error if conversion is not possible
 */
export const hashStringToCoords = (input: string): [number, number, number] => {
    const candidate = input.split("/").map(Number);
    if (candidate.length === 3 && candidate.every(c => !Number.isNaN(c))) {
        return candidate as [number, number, number];
    } else {
        throw new Error("hashStringToCoords: conversion is not possible");
    }
};




/**
 * Array of coordinates [zoom, lat, lon] to MapViewport conversion.
 */
export const coordsToMapViewport = (
    coords: [number, number, number],
): Partial<MapViewport> => ({
    zoom: coords[0],
    latitude: coords[1],
    longitude: coords[2],
});
