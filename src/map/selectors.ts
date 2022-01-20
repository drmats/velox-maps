/**
 * Map selectors.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2021-present
 */

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import type { RootState } from "~/store/types";




export const getInteractive = (s: RootState) => s.map.interactive;
export const getLastInteraction = (s: RootState) => s.map.lastInteraction;
export const getReady = (s: RootState) => s.map.ready;
export const getSelection = (s: RootState) => s.map.selection;
export const getSpaHashSync = (s: RootState) => s.map.spaHashSync;
export const getTilesource = (s: RootState) => s.map.tilesource;
export const getViewport = (s: RootState) => s.map.viewport;
