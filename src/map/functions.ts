/**
 * Map functions.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2020-present
 */

import { tail } from "@xcmats/js-toolbox/array";
import { padLeft } from "@xcmats/js-toolbox/string";

import type { MapViewport } from "~/map/types";




/**
 * Format input number as string with desired precision.
 */
export const format = (input: number, precision = 4): string => {
    const i = Math.floor(input*10**precision), ia = Math.abs(i);
    return (
        (i === ia ? "" : "-") +
        String(Math.floor(ia/10**precision))+ "." +
        padLeft(String(Math.floor(ia%10**precision)), precision, "0")
    );
};




/**
 * MapViewport -> "#zoom/lat/lon" conversion
 */
export const mapViewportToHashString = (v: MapViewport): string =>
    `#${format(v.zoom)}/${format(v.latitude)}/${format(v.longitude)}`;




/**
 * "#zoom/lat/lon" -> [zoom, lat, lon] conversion.
 * @throws Error if conversion is not possible
 */
export const hashStringToCoords = (i: string): [number, number, number] => {
    const candidate = tail(i).split("/").map(Number);
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
): MapViewport => ({
    zoom: coords[0],
    latitude: coords[1],
    longitude: coords[2],
});
