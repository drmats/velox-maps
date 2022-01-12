/**
 * @license BSD-2-Clause
 * @copyright Mat. 2021-present
 */

import type { FC } from "react";
import { choose } from "@xcmats/js-toolbox/func";

import { useSPARoute } from "~/app/hooks";
import NavBar from "~/layout/components/NavBar";
import MapView from "~/app/screens/MapView";




/**
 * Main application component.
 */
export const App: FC = () => {
    const [route] = useSPARoute();

    return (
        <>
            <NavBar />
            {choose(
                route,
                {
                    "": () => <MapView />,
                },
                () => null,
            )}
        </>
    );
};
