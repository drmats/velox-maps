/**
 * Component action types and creators.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2020-present
 */

import { actionCreators } from "red-g";




/**
 * App component action types.
 */
export enum AppActionType {

    RESET = "App/RESET",

    READY = "App/READY",
    NOT_READY = "App/NOT_READY",

    VISIBLE = "App/VISIBLE",
    HIDDEN = "App/HIDDEN",

    CLEAR_ERROR = "App/CLEAR_ERROR",

}




/**
 * App component action creators.
 */
export default actionCreators(AppActionType, {

    // ...
    READY: (error?: string) => ({ error }),

    // ...
    VISIBLE: (error?: string) => ({ error }),

});
