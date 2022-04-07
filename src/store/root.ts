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

import layoutActions from "~/layout/actions";
import layoutReducers from "~/layout/reducers";

import mapActions from "~/map/actions";
import mapReducers from "~/map/reducers";
import * as mapThunks from "~/map/thunks";

import routerActions from "~/router/actions";
import routerReducers from "~/router/reducers";
import * as routerThunks from "~/router/thunks";




/**
 * Application actions tree.
 */
export const action = {
    app: appActions,
    layout: layoutActions,
    map: mapActions,
    router: routerActions,
};




/**
 * Application reducers tree.
 */
export const rootReducer = combineReducers({
    app: appReducers,
    layout: layoutReducers,
    map: mapReducers,
    router: routerReducers,
});




/**
 * Application thunks tree.
 */
export const thunk = {
    app: appThunks,
    map: mapThunks,
    router: routerThunks,
};
