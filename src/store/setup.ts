/**
 * Redux logic.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2020-present
 */

import type { Store } from "redux";
import type { Action } from "red-g";
import { share } from "mem-box";
import {
    applyMiddleware,
    createStore,
} from "redux";
import { bindActionCreatorsTree } from "red-g";
import { isFunction } from "@xcmats/js-toolbox/type";

import { appMemory } from "~/root/memory";
import {
    action,
    rootReducer,
    thunk,
} from "~/store/root";
import { attachListeners } from "~/store/listeners";
import type { RootState } from "~/store/types";
import { getComposer } from "~/store/tools";
import assemblyMiddlewares from "~/store/middlewares";




/**
 * Create and configure redux store.
 */
export const createReduxStore = (): Store<RootState, Action> => {

    const

        // empty initial state
        initialState = {},

        // store enchancers
        enchancers = getComposer() (
            applyMiddleware(...assemblyMiddlewares()),
        ),

        // redux store
        store = createStore(
            rootReducer,
            initialState,
            enchancers,
        ),

        // bound actions tree
        act = bindActionCreatorsTree(action, store.dispatch),

        // bound thunks tree
        tnk = bindActionCreatorsTree(thunk, store.dispatch),

        // all-sub-states resetting action
        resetState = () => Object.entries(act).forEach(([_, branch]) => {
            if (isFunction(branch.RESET)) branch.RESET();
        });

    // share bound action trees with resetState() helper
    share({ act, tnk, resetState });

    // attach all external-world event listeners
    attachListeners(store.dispatch, store.getState, appMemory());

    return store;

};




/**
 * Global declaration merge.
 */
declare global {

    /**
     * Shared memory context.
     */
    interface Ctx {
        act: typeof action;
        tnk: typeof thunk;
        resetState: () => void;
    }

}
