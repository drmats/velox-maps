/**
 * @license BSD-2-Clause
 * @copyright Mat. 2020-present
 */

import { sliceReducer } from "red-g";

import initState from "~/layout/state";
import act from "~/layout/actions";




/**
 * Layout component reducer.
 */
export default sliceReducer(initState) ((slice) => slice

    .handle(act.RESET, () => initState)
    .handle(act.SET_THEME, (state, { theme }) => ({ ...state, theme })),

);
