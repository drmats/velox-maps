/**
 * @license BSD-2-Clause
 * @copyright Mat. 2021-present
 */

import type { FC } from "react";

import { useShuffle } from "~/app/hooks";
import packageInfo from "~/../package.json";




/**
 * Main application component.
 */
export const App: FC = () => {
    // ...
    const text = useShuffle(packageInfo.name);

    // ...
    return (
        <>{text}</>
    );
};
