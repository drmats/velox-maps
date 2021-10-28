/**
 * @license BSD-2-Clause
 * @copyright Mat. 2021-present
 */

import type { FC } from "react";
import { useSelector } from "react-redux";

import NavBar from "~/layout/navbar";
import {
    BottomBox,
    InfoBox,
} from "~/map/components";
import { getTilesource } from "~/map/selectors";
import MapGL from "~/map/mapgl.mod";




/**
 * Main application component.
 */
export const App: FC = () => {
    const mapStyle = useSelector(getTilesource).url;

    return (
        <>
            <NavBar />
            <InfoBox />
            <BottomBox />
            <MapGL
                {...{ mapStyle }}
                width="100vw"
                height="100vh"
                minZoom={2}
                maxZoom={14}
            />
        </>
    );
};
