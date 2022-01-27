/**
 * Root redux logic - combined actions, reducers and thunks.
 * All should be referened here.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2020-present
 */

import { combineReducers } from "redux";

import appActions from "~/app/actions";
import appReducers from "~/app/reducers";
import * as appThunks from "~/app/thunks";




/**
 * Application actions tree.
 */
export const action = {
    app: appActions,
};




/**
 * Application reducers tree.
 */
export const rootReducer = combineReducers({
    app: appReducers,
});




/**
 * Application thunks tree.
 */
export const thunk = {
    app: appThunks,
};
