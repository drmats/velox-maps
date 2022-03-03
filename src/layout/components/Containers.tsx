/**
 * Layout containers.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2020-present
 */

import type { FC } from "react";
import type { StyleObject } from "styletron-react";
import {
    styled,
    useStyletron,
    withStyle,
} from "baseui";

import { useTheme } from "~/layout/hooks";




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




/**
 * ...
 */
export const AppContent: FC<{ overrides: StyleObject; }> = ({
    overrides, children,
}) => {
    const [css] = useStyletron();
    const theme = useTheme();
    return (
        <main
            className={css({
                width: "100%",
                [theme.mediaQuery.small]: {
                    height: `calc(100vh - ${theme.sizing.scale1000})`,
                },
                [theme.mediaQuery.medium]: {
                    height: `calc(100vh - ${theme.sizing.scale1600})`,
                },
                ...overrides,
            })}
        >
            {children}
        </main>
    );
};
