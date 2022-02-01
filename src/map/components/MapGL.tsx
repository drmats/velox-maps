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
    useState,
} from "react";
import {
    batch,
    useSelector,
} from "react-redux";
import throttle from "lodash.throttle";
import type {
    MapEvent,
    MapRef,
} from "react-map-gl";
import ReactMapGL from "react-map-gl";

import type {
    MapGLProps,
    MapViewport,
} from "~/map/types";
import { appMemory } from "~/root/memory";
import {
    selectInteractive,
    selectViewport,
} from "~/map/selectors";
import { LAST_INTERACTION_UPDATE_TRESHOLD } from "~/map/constants";

import "maplibre-gl/dist/maplibre-gl.css";




/**
 * ...
 */
const { act, mut } = appMemory();




/**
 * Throtled "last interaction" updates.
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
    const viewport = useSelector(selectViewport);
    const interactive = useSelector(selectInteractive);
    const mapRef = useRef<MapRef | null>(null);
    const [afterInitialSetup, setAfterInitialSetup] = useState(false);

    // take care of map reference upon mount/unmount
    useEffect(() => {
        act.map.SET_READY(true);
        mut.mapRef = mapRef;
        return () => {
            delete mut.mapRef;
            act.map.SET_READY(false);
        };
    }, []);

    // synchronize map movement with redux state
    const onMapViewportChange = (viewportState: MapViewport) =>
        batch(() => {
            if (afterInitialSetup) userInteraction();
            else setAfterInitialSetup(true);
            interactive && act.map.SET_VIEWPORT(viewportState);
        });

    // store last map selection in redux state
    const onMapClick = ({ point, lngLat, features }: MapEvent) =>
        interactive && act.map.SET_SELECTION({
            point, lngLat, features, timestamp: Date.now(),
        });

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
            onViewportChange={onMapViewportChange}
            onClick={onMapClick}
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
        mapRef?: MutableRefObject<MapRef | null>;
    }

}
