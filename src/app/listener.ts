/**
 * Component listeners.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2020-present
 */

import type { ThunkType } from "~/store/types";




/**
 * Setup App-related listeners.
 */
const setupListener: ThunkType = (_d, _getState, { act, tnk }) => {

    // handle application visibility change
    document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "visible") {
            act.app.VISIBLE();
        } else {
            act.app.HIDDEN();
        }
    });

    // handle url (hash) change
    window.addEventListener("hashchange", tnk.map.setViewportFromHash);

};

export default setupListener;
