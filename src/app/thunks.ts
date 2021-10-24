/**
 * Component thunks.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2020-present
 */

import type { ThunkType } from "~/store/types";
import { getReady } from "~/app/selectors";




/**
 * App component thunks.
 */
export default {

    /**
     * Set application ready state - example.
     */
    setReady: (readyState: boolean): ThunkType =>
        async (_d, getState, { act, logger }) => {
            const state = getState();
            getReady(state) !== readyState && (
                readyState ? act.app.READY() : act.app.NOT_READY()
            );
            readyState && logger.info("Ready! ✅");
        },

};
