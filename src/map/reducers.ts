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
export default sliceReducer(initState) (
    (slice) => slice
        // full state reset
        .handle(act.RESET, () => initState)

        // set viewport
        .handle(act.SET_VIEWPORT, (state, { viewport }) => ({
            ...state,
            ...{ viewport },
        })),
);
