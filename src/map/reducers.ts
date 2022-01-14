/**
 * Map reducers.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2020-present
 */

import { sliceReducer } from "red-g";

import initState from "~/map/state";
import act from "~/map/actions";




/**
 * Map component reducer.
 */
export default sliceReducer(initState) ((slice) => slice

    // full state reset
    .handle(act.RESET, () => initState)

    // set map selection
    .handle(act.SET_SELECTION, (state, { selection }) => ({
        ...state, selection,
    }))

    // clear map selection
    .handle(act.CLEAR_SELECTION, (state) => ({
        ...state, selection: null,
    }))

    // set map ready state
    .handle(act.SET_READY, (state, { ready }) => ({
        ...state, ready,
    }))

    // set map tilesource
    .handle(act.SET_TILESOURCE, (state, { tilesource }) => ({
        ...state, tilesource,
    }))

    // set map viewport
    .handle(act.SET_VIEWPORT, (state, { viewport }) => ({
        ...state, viewport,
    })),

);
