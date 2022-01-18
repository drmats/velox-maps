/**
 * Map constants.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2020-present
 */

import type { TileSource } from "~/map/types";
import { ThemeVariant } from "~/layout/theme";




/**
 * Tile sources.
 */
export const tileSources: TileSource[] = [
    {
        label: "Demo Tiles",
        url: "https://demotiles.maplibre.org/style.json",
        themeVariant: ThemeVariant.LIGHT,
    },
];
