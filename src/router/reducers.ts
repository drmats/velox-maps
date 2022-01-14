/**
 * @license BSD-2-Clause
 * @copyright Mat. 2020-present
 */

import { sliceReducer } from "red-g";

import initState from "~/router/state";
import act from "~/router/actions";




/**
 * Router component reducer.
 */
export default sliceReducer(initState) ((slice) => slice

    // full state reset
    .handle(act.RESET, () => initState)

    // url hash handling
    .handle(act.SET_HASH, (state, { hash }) => ({ ...state, hash })),

);
