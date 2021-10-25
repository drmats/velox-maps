/**
 * @license BSD-2-Clause
 * @copyright Mat. 2021-present
 */

import type { FC } from "react";
import { useState } from "react";
import ReactMapGL from "react-map-gl";

import NavBar from "~/layout/navbar";

import "maplibre-gl/dist/maplibre-gl.css";




/**
 * ...
 */
interface MapViewport {
    latitude: number;
    longitude: number;
    zoom: number;
}




/**
 * Component example.
 */
export const App: FC = () => {
    // ...
    const [viewport, setViewport] = useState<MapViewport>({
        latitude: 52.06,
        longitude: 19.85,
        zoom: 5,
    });

    // ...
    return (
        <>
            <NavBar />

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
        </>
    );
};
