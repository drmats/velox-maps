/**
 * Wrapped ReactMapGL component.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2020-present
 */

import { useState } from "react";
import ReactMapGL from "react-map-gl";

import type { MapViewport } from "~/map/types";

import "maplibre-gl/dist/maplibre-gl.css";




/**
 * ...
 */
export default function MapGL (): JSX.Element {
    const [viewport, setViewport] = useState<MapViewport>({
        latitude: 52.06,
        longitude: 19.85,
        zoom: 5,
    });

    return (
        <ReactMapGL
            attributionControl={false}
            mapStyle="https://demotiles.maplibre.org/style.json"
            width="100vw"
            height="100vh"
            {...viewport}
            onViewportChange={(v: MapViewport) => setViewport({
                latitude: v.latitude,
                longitude: v.longitude,
                zoom: v.zoom,
            })}
            minZoom={2}
            maxZoom={14}
        />
    );
}
