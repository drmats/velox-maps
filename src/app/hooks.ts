/**
 * Component hooks.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2021-present
 */

import {
    useEffect,
    useState,
} from "react";
import { delay } from "@xcmats/js-toolbox/async";
import { inc } from "@xcmats/js-toolbox/math";
import { shuffle } from "@xcmats/js-toolbox/array";
import { timeUnit } from "@xcmats/js-toolbox/utils";




/**
 * Returns timestamp of component's first mount.
 */
export const useNow = (): number => {
    const [now] = useState(() => Date.now());
    return now;
};




/**
 * Custom hook example.
 */
export const useShuffle = (what: string): string => {
    // ...
    const [text, setText] = useState(what);
    const [tick, setTick] = useState(0);

    // ...
    useEffect(() => {
        delay(timeUnit.second).then(() => {
            setText(t => shuffle(t.split("")).join(""));
            setTick(t => inc(t) % 2);
        });
    }, [tick]);

    // ...
    return text;
};
