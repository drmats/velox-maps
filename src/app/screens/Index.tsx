/**
 * @license BSD-2-Clause
 * @copyright Mat. 2021-present
 */

import type { FC } from "react";

import LatLonZoomInfoBox from "~/map/components/LatLonZoomInfoBox";
import TileSourceSelectionBox from "~/map/components/TileSourceSelectionBox";




/**
 * Index screen.
 */
const Index: FC = () => (
    <>
        <LatLonZoomInfoBox />
        <TileSourceSelectionBox />
    </>
);

export default Index;
