/**
 * @license BSD-2-Clause
 * @copyright Mat. 2021-present
 */

import type { FC } from "react";

import NavBar from "~/layout/navbar";
import MapGL from "~/map/mapgl";




/**
 * Main application component.
 */
export const App: FC = () => {

    // ...
    return (
        <>
            <NavBar />
            <MapGL />
        </>
    );
};
