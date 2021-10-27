/**
 * @license BSD-2-Clause
 * @copyright Mat. 2021-present
 */

import type { FC } from "react";

import NavBar from "~/layout/navbar";
import MapGL from "~/map/mapgl.mod";




/**
 * Main application component.
 */
export const App: FC = () => {
    const mapStyle = "https://demotiles.maplibre.org/style.json";

    return (
        <>
            <NavBar />
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
