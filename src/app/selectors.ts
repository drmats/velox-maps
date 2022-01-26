/**
 * Component selectors.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2021-present
 */

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import type { RootState } from "~/store/types";




export const selectReady = (s: RootState) => s.app.ready;
export const selectVisible = (s: RootState) => s.app.visible;
export const selectTick = (s: RootState) => s.app.tick;
export const selectError = (s: RootState) => s.app.error;
