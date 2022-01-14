/**
 * Component reducers.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2020-present
 */

import type { Action } from "red-g";
import {
    isStringActionType,
    isWithPayload,
    sliceReducer,
} from "red-g";
import produce from "immer";

import initState from "~/app/state";
import act from "~/app/actions";




/**
 * App component reducer.
 */
export default sliceReducer(initState) ((slice) => slice

    // full state reset
    .handle(act.RESET, () => initState)

    // immer usage example
    .handle(act.READY, (state) => produce(state, (draft) => {
        draft.ready = true;
    }))
    .handle(act.NOT_READY, (state) => produce(state, (draft) => {
        draft.ready = false;
    }))

    // regular object composition/decomposition example
    .handle(act.VISIBLE, (state) => ({ ...state, visible: true }))
    .handle(act.HIDDEN, (state) => ({ ...state, visible: false }))
    .handle(act.CLEAR_ERROR, (state) => ({ ...state, error: null }))

    // type-predicate action matcher example (action payload)
    .match(
        (action): action is Action<{ error: string }> =>
            isStringActionType(action) &&
            action.type.startsWith("App/") &&
            isWithPayload(action) &&
            action.payload.error,
        (state, payload) => ({ ...state, error: payload.error }),
    ),

);
