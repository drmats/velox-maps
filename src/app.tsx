/**
 * @license BSD-2-Clause
 * @copyright Mat. 2021-present
 */

import { useEffect, useState } from "react";
import { shuffle } from "@xcmats/js-toolbox/array";
import { delay } from "@xcmats/js-toolbox/async";
import { timeUnit } from "@xcmats/js-toolbox/utils";
import packageInfo from "../package.json";




/**
 * ...
 */
export const App: React.FC = () => {
    const [text, setText] = useState(packageInfo.name);

    useEffect(() => {
        (async () => {
            await delay(timeUnit.second);
            setText(shuffle(text.split("")).join(""));
        })();
    }, [text]);

    return (
        <>{text}</>
    );
};
