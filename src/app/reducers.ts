/**
 * Component reducers.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2020-present
 */

import type { Action } from "red-g";
import {
    isWithPayload,
    sliceReducer,
} from "red-g";

import initState from "~/app/state";
import act from "~/app/actions";




/**
 * App component reducer.
 */
export default sliceReducer(initState) ((slice) => slice

    // full state reset
    .handle(act.RESET, () => initState)

    // app readiness
    .handle(act.READY, (state) => ({ ...state, ready: true }))
    .handle(act.NOT_READY, (state) => ({ ...state, ready: false }))

    // app visibility
    .handle(act.VISIBLE, (state) => ({ ...state, visible: true }))
    .handle(act.HIDDEN, (state) => ({ ...state, visible: false }))

    // error handling
    .handle(act.CLEAR_ERROR, (state) => ({ ...state, error: null }))
    .match(
        (action): action is Action<{ error: string }> =>
            isWithPayload(action) && action.payload.error,
        (state, { error }) => ({ ...state, error }),
    ),

);
