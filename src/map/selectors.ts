/**
 * Map selectors.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2021-present
 */

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import type { RootState } from "~/store/types";




export const selectInteractive = (s: RootState) => s.map.interactive;
export const selectLastInteraction = (s: RootState) => s.map.lastInteraction;
export const selectReady = (s: RootState) => s.map.ready;
export const selectSelection = (s: RootState) => s.map.selection;
export const selectSpaHashSync = (s: RootState) => s.map.spaHashSync;
export const selectTilesource = (s: RootState) => s.map.tilesource;
export const selectViewport = (s: RootState) => s.map.viewport;
