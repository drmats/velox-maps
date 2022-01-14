/**
 * Redux root listeners assembly.
 * All application listeners should be referenced here.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2021-present
 */

import type { ThunkType } from "~/store/types";
import appListener from "~/app/listener";
import routerListener from "~/router/listener";




/**
 * Application external-world listener list.
 */
const listeners = [
    appListener,
    routerListener,
];




/**
 * Attach all application-specific listeners.
 */
export const attachListeners: ThunkType = (dispatch, getState, ctx) => {
    listeners.forEach(listener => listener(dispatch, getState, ctx));
};
