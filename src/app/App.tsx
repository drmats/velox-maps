/**
 * @license BSD-2-Clause
 * @copyright Mat. 2021-present
 */

import type { FC } from "react";

import { useShuffle } from "./hooks";
import packageInfo from "../../package.json";




/**
 * Component example.
 */
export const App: FC = () => {
    // ...
    const text = useShuffle(packageInfo.name);

    // ...
    return (
        <>{text}</>
    );
};
