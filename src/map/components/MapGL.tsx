/**
 * Wrapped ReactMapGL component.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2020-present
 */

import type { MutableRefObject } from "react";
import {
    useEffect,
    useRef,
} from "react";
import { useSelector } from "react-redux";
import type { MapRef } from "react-map-gl";
import ReactMapGL from "react-map-gl";

import type {
    MapGLProps,
    MapViewport,
} from "~/map/types";
import { appMemory } from "~/root/memory";
import { getViewport } from "~/map/selectors";

import "maplibre-gl/dist/maplibre-gl.css";




/**
 * ...
 */
const { act, mut } = appMemory();




/**
 * Interactive map display with redux-managed viewport state.
 */
export default function MapGL ({
    mapStyle,
    width,
    height,
    minZoom,
    maxZoom,
}: MapGLProps): JSX.Element {
    const viewport = useSelector(getViewport);
    const mapRef = useRef<MapRef | null>(null);

    useEffect(() => {
        act.map.SET_READY(true);
        mut.mapRef = mapRef;
        return () => { act.map.SET_READY(false); };
    }, []);

    return (
        <ReactMapGL
            attributionControl={false}
            {...{
                mapStyle,
                width,
                height,
                minZoom,
                maxZoom,
            }}
            {...viewport}
            onViewportChange={({
                latitude, longitude, zoom,
            }: MapViewport) => act.map.SET_VIEWPORT({
                latitude, longitude, zoom,
            })}
            ref={mapRef}
        />
    );
}




/**
 * Global declaration merge.
 */
declare global {

    /**
     * Shared memory context.
     */
    interface Mut {
        mapRef: MutableRefObject<MapRef | null>;
    }

}
