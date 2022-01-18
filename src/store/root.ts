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
import appThunks from "~/app/thunks";

import layoutActions from "~/layout/actions";
import layoutReducers from "~/layout/reducers";




/**
 * Application actions tree.
 */
export const action = {
    app: appActions,
    layout: layoutActions,
};




/**
 * Application reducers tree.
 */
export const rootReducer = combineReducers({
    app: appReducers,
    layout: layoutReducers,
});




/**
 * Application thunks tree.
 */
export const thunk = {
    app: appThunks,
};
