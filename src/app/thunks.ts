/**
 * Component thunks.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2020-present
 */

import type { ThunkType } from "~/store/types";
import { selectReady } from "~/app/selectors";




/**
 * Set application ready state - example.
 */
export const setReady = (readyState: boolean): ThunkType =>
    async (_d, getState, { act, logger }) => {
        const state = getState();
        selectReady(state) !== readyState && (
            readyState ? act.app.READY() : act.app.NOT_READY()
        );
        readyState && logger.info("Ready! ✅");
    };
