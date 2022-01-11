/**
 * @license BSD-2-Clause
 * @copyright Mat. 2021-present
 */

/* eslint-disable react-hooks/exhaustive-deps */

import type { FC } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import { useMemory } from "~/root/memory";
import NavBar from "~/layout/components/Navbar";
import {
    BottomBox,
    InfoBox,
} from "~/map/components";
import { getTilesource } from "~/map/selectors";
import LazyMapGL from "~/map/components/LazyMapGL";




/**
 * Main application component.
 */
export const App: FC = () => {
    const { tnk } = useMemory();
    const mapStyle = useSelector(getTilesource).url;

    // initialize viewport position if proper url hash is provided
    useEffect(() => { tnk.map.setViewportFromHash(); }, []);

    return (
        <>
            <NavBar />
            <InfoBox />
            <BottomBox />
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
