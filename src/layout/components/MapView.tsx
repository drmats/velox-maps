/**
 * @license BSD-2-Clause
 * @copyright Mat. 2021-present
 */

import type { FC } from "react";
import { useSelector } from "react-redux";

import { selectTilesource } from "~/map/selectors";
import LazyMapGL from "~/map/components/LazyMapGL";




/**
 * Map View.
 */
const MapView: FC = () => {
    const mapStyle = useSelector(selectTilesource).url;

    return (
        <LazyMapGL
            {...{ mapStyle }}
            width="100vw"
            height="100vh"
            minZoom={2}
            maxZoom={14}
        />
    );
};

export default MapView;
