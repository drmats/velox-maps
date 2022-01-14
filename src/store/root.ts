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

import mapActions from "~/map/actions";
import mapReducers from "~/map/reducers";

import routerActions from "~/router/actions";
import routerReducers from "~/router/reducers";
import routerThunks from "~/router/thunks";




/**
 * Application actions tree.
 */
export const action = {
    app: appActions,
    map: mapActions,
    router: routerActions,
};




/**
 * Application reducers tree.
 */
export const rootReducer = combineReducers({
    app: appReducers,
    map: mapReducers,
    router: routerReducers,
});




/**
 * Application thunks tree.
 */
export const thunk = {
    app: appThunks,
    router: routerThunks,
};
