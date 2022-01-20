/**
 * Map constants.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2020-present
 */

import type { TileSource } from "~/map/types";
import { ThemeVariant } from "~/layout/theme";




/**
 * Event throttling.
 */
export const SPA_HASH_UPDATE_TRESHOLD = 200;
export const LAST_INTERACTION_UPDATE_TRESHOLD = 100;




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
