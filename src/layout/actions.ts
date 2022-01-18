/**
 * @license BSD-2-Clause
 * @copyright Mat. 2020-present
 */

import { actionCreators } from "red-g";

import { ThemeVariant } from "~/layout/theme";




/**
 * Layout component action types.
 */
export enum LayoutActionType {

    RESET = "Layout/RESET",
    SET_THEME = "Layout/SET_THEME",

}




/**
 * Layout component action creators.
 */
export default actionCreators(LayoutActionType, {

    // ...
    SET_THEME: (theme: ThemeVariant) => ({ theme }),

});
