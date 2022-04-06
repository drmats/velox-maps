/**
 * Wrapped ReactMapGL component.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2020-present
 */

import type { MutableRefObject } from "react";
import {
    useCallback,
    useEffect,
    useRef,
    useState,
} from "react";
import {
    batch,
    useSelector,
} from "react-redux";
import throttle from "lodash.throttle";
import MapLibreGL from "maplibre-gl";
import type {
    MapLayerMouseEvent,
    MapRef,
    ViewStateChangeEvent,
} from "react-map-gl";
import ReactMapGL from "react-map-gl";
import type { MapboxEvent } from "mapbox-gl";

import type { MapGLProps } from "~/map/types";
import { appMemory } from "~/root/memory";
import {
    selectInteractive,
    selectViewport,
} from "~/map/selectors";
import { LAST_INTERACTION_UPDATE_TRESHOLD } from "~/map/constants";
import MapContent from "~/map/components/MapContent";

import "maplibre-gl/dist/maplibre-gl.css";




/**
 * ...
 */
const { act, mut } = appMemory();




/**
 * Throttled "last interaction" updates.
 */
const userInteraction = throttle(
    () => act.map.USER_INTERACTION(),
    LAST_INTERACTION_UPDATE_TRESHOLD,
);




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
    const [interactiveLayers, setInteractiveLayers] = useState<string[]>([]);
    const interactive = useSelector(selectInteractive);
    const mapRef = useRef<MapRef | null>(null);
    const viewport = useSelector(selectViewport);

    // take care of map reference and dimensions upon mount
    // (also make all layers interactive for 'onMapClick' features inspection)
    const onMapLoad = useCallback(() => {
        mut.mapRef = mapRef;
        if (mapRef.current) {
            act.map.SET_DIMENSIONS(mapRef.current.getCanvas());
            setInteractiveLayers(
                mapRef.current.getStyle().layers?.map(l => l.id) || [],
            );
        }
        act.map.SET_READY(true);
    }, [mapRef]);

    // take care of map reference upon unmount
    useEffect(() => {
        return () => {
            act.map.SET_READY(false);
            delete mut.mapRef;
        };
    }, [mapRef]);

    // synchronize map viewport with redux state
    const onMapMove = useCallback(({ viewState }: ViewStateChangeEvent) =>
        batch(() => {
            if (interactive) {
                userInteraction();
                act.map.SET_VIEWPORT(viewState);
            }
        }),
    [interactive]);

    // synchronize map dimensions with redux state
    const onMapResize = useCallback((e: MapboxEvent) => {
        act.map.SET_DIMENSIONS(e.target.getCanvas());
    }, []);

    // store last map selection in redux state
    const onMapClick = useCallback(
        ({ point, lngLat, features }: MapLayerMouseEvent) => {
            interactive && act.map.SET_SELECTION({
                point: [point.x, point.y],
                lngLat: [lngLat.lng, lngLat.lat],
                features,
                timestamp: Date.now(),
            });
        },
        [interactive],
    );

    return (
        <ReactMapGL
            attributionControl={false}
            interactive={interactive}
            interactiveLayerIds={interactiveLayers}
            mapLib={MapLibreGL}
            {...{
                mapStyle,
                minZoom,
                maxZoom,
            }}
            onClick={onMapClick}
            onLoad={onMapLoad}
            onMove={onMapMove}
            onResize={onMapResize}
            ref={mapRef}
            style={{ width, height }}
            {...viewport}
        >
            <MapContent />
        </ReactMapGL>
    );
}




/**
 * Global declaration merge.
 */
declare global {

    /**
     * Augmenting mutable subcontext.
     */
    interface Mut {
        mapRef?: MutableRefObject<MapRef | null>;
    }

}
