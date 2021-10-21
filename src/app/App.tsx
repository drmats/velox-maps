/**
 * @license BSD-2-Clause
 * @copyright Mat. 2021-present
 */

import type { FC } from "react";
import { styled } from "baseui";

import { useShuffle } from "./hooks";
import packageInfo from "../../package.json";




/**
 * ...
 */
const Centered = styled("div", {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
});




/**
 * Component example.
 */
export const App: FC = () => {
    // ...
    const text = useShuffle(packageInfo.name);

    // ...
    return (
        <Centered>{text}</Centered>
    );
};
