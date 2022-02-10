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
    MapDimensions,
    MapGLProps,
    MapViewport,
} from "~/map/types";
import { appMemory } from "~/root/memory";
import {
    selectDimensions,
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
    const viewport = useSelector(selectViewport);
    const dimensions = useSelector(selectDimensions);
    const interactive = useSelector(selectInteractive);
    const mapRef = useRef<MapRef | null>(null);
    const [afterInitialSetup, setAfterInitialSetup] = useState(false);

    // take care of map reference upon mount/unmount
    useEffect(() => {
        mut.mapRef = mapRef;
        act.map.SET_READY(true);
        return () => {
            act.map.SET_READY(false);
            delete mut.mapRef;
        };
    }, []);

    // synchronize map movement with redux state
    const onMapViewportChange = (viewportState: MapViewport & MapDimensions) =>
        batch(() => {
            if (afterInitialSetup) {
                if (
                    dimensions.width === viewportState.width &&
                    dimensions.height === viewportState.height
                ) userInteraction();
            } else setAfterInitialSetup(true);
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
