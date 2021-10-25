/**
 * Layout containers.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2020-present
 */

import {
    styled,
    withStyle,
} from "baseui";




/**
 * ...
 */
export const Centered = styled("div", {
    display: "flex",
    justifyContent: "center",
});




/**
 * ...
 */
export const Container = styled("div", {
    display: "flex",
    gap: "10px",
    padding: "10px 10px",
});




/**
 * ...
 */
export const RowContainer = withStyle(Container, {
    flexDirection: "row",
    justifyContent: "space-evenly",
});




/**
 * ...
 */
export const ColumnContainer = withStyle(Container, {
    flexDirection: "column",
    alignItems: "flex-start",
});




/**
 * ...
 */
export const TopBox = styled("div", {
    position: "fixed",
    width: "100vw",
    top: "0",
    left: "0",
});
