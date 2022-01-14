/**
 * @license BSD-2-Clause
 * @copyright Mat. 2020-present
 */

import { actionCreators } from "red-g";




/**
 * Router component action types.
 */
export enum AppActionType {

    RESET = "Router/RESET",
    SET_HASH = "Router/SET_HASH",

}




/**
 * Router component action creators.
 */
export default actionCreators(AppActionType, {

    SET_HASH: (hash: string) => ({ hash }),

});
