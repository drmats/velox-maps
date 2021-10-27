/**
 * Map selectors.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2021-present
 */

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import type { RootState } from "~/store/types";




export const getViewport = (s: RootState) => s.map.viewport;
