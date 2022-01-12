/**
 * @license BSD-2-Clause
 * @copyright Mat. 2021-present
 */

import type { FC } from "react";
import { useSelector } from "react-redux";

import LatLonZoomInfoBox from "~/layout/components/LatLonZoomInfoBox";
import TileSourceSelectionBox from "~/layout/components/TileSourceSelectionBox";
import { getTilesource } from "~/map/selectors";
import LazyMapGL from "~/map/components/LazyMapGL";




/**
 * Map View screen.
 */
const MapView: FC = () => {
    const mapStyle = useSelector(getTilesource).url;

    return (
        <>
            <LatLonZoomInfoBox />
            <TileSourceSelectionBox />
            <LazyMapGL
                {...{ mapStyle }}
                width="100vw"
                height="100vh"
                minZoom={2}
                maxZoom={14}
            />
        </>
    );
};

export default MapView;
