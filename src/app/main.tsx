/**
 * @license BSD-2-Clause
 * @copyright Mat. 2021-present
 */

import type { FC } from "react";
import { styled } from "baseui";
import { H4 } from "baseui/typography";

import { useShuffle } from "~/app/hooks";
import packageInfo from "~/../package.json";




/**
 * ...
 */
const Centered = styled("div", {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
});




/**
 * Component example.
 */
export const App: FC = () => {
    // ...
    const text = useShuffle(packageInfo.name);

    // ...
    return (
        <Centered><H4>{text}</H4></Centered>
    );
};
