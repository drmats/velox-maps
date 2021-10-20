/**
 * @license BSD-2-Clause
 * @copyright Mat. 2021-present
 */

import type { FC } from "react";
import { useEffect, useState } from "react";
import { delay } from "@xcmats/js-toolbox/async";
import { inc } from "@xcmats/js-toolbox/math";
import { shuffle } from "@xcmats/js-toolbox/array";
import { timeUnit } from "@xcmats/js-toolbox/utils";

import packageInfo from "../package.json";




/**
 * ...
 */
export const App: FC = () => {
    // ...
    const [text, setText] = useState(packageInfo.name);
    const [tick, setTick] = useState(0);

    // ...
    useEffect(() => {
        delay(timeUnit.second).then(() => {
            setText(t => shuffle(t.split("")).join(""));
            setTick(t => inc(t) % 2);
        });
    }, [tick]);

    // ...
    return (
        <>{text}</>
    );
};
