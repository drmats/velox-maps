/**
 * Application root redux types.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2020-present
 */

import type { ThunkAction } from "redux-thunk";
import type { Action } from "red-g";

import type { rootReducer } from "./root";




/**
 * Redux root state shape.
 */
export type RootState = ReturnType<typeof rootReducer>;




/**
 * ThunkAction type alias.
 */
export type ThunkType<R = void> = ThunkAction<
    R,
    RootState,
    Ctx,
    Action
>;
