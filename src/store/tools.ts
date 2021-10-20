/**
 * Redux devtools integration.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2020-present
 */

import { devEnv } from "@xcmats/js-toolbox/utils";
import { compose } from "redux";




/**
 * Obtain redux devtools extension composer if it's available.
 * Use regular one otherwise.
 */
export const getComposer = (): typeof compose =>
    devEnv() ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose :
        compose;




/**
 * Check availability of redux devtools extension.
 */
export const reduxDevtoolsAvailable = (): boolean =>
    Boolean(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__);




/**
 * TS - global declaration merge for window.
 */
declare global {

    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }

}
