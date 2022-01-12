/**
 * @license BSD-2-Clause
 * @copyright Mat. 2021-present
 */

import type { FC } from "react";
import { choose } from "@xcmats/js-toolbox/func";

import { useSPARoute } from "~/app/hooks";
import NavBar from "~/layout/components/NavBar";
import MapView from "~/layout/components/MapView";
import Index from "~/app/screens/Index";
import NotFound from "~/app/screens/NotFound";




/**
 * Main application component.
 */
export const App: FC = () => {
    const [route] = useSPARoute();

    return (
        <>
            <MapView />
            {choose(
                route,
                {
                    "": () => <Index />,
                },
                () => <NotFound />,
            )}
            <NavBar />
        </>
    );
};
