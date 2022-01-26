/**
 * Component selectors.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2021-present
 */

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import type { RootState } from "~/store/types";




export const getReady = (s: RootState) => s.app.ready;
export const getVisible = (s: RootState) => s.app.visible;
export const getTick = (s: RootState) => s.app.tick;
export const getError = (s: RootState) => s.app.error;
