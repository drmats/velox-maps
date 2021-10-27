/**
 * Wrapped ReactMapGL component.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2020-present
 */

import { useSelector } from "react-redux";
import ReactMapGL from "react-map-gl";

import type {
    MapGLProps,
    MapViewport,
} from "~/map/types";
import { useMemory } from "~/root/memory";
import { getViewport } from "~/map/selectors";

import "maplibre-gl/dist/maplibre-gl.css";




/**
 * ...
 */
export default function MapGL ({
    mapStyle,
    width,
    height,
    minZoom,
    maxZoom,
}: MapGLProps): JSX.Element {
    const { act } = useMemory();
    const viewport = useSelector(getViewport);

    return (
        <ReactMapGL
            attributionControl={false}
            {...{ mapStyle }}
            {...{ width }}
            {...{ height }}
            {...{ minZoom }}
            {...{ maxZoom }}
            {...viewport}
            onViewportChange={({
                latitude, longitude, zoom,
            }: MapViewport) => act.map.SET_VIEWPORT({
                latitude, longitude, zoom,
            })}
        />
    );
}
