/**
 * Component hooks.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2021-present
 */

import {
    useEffect,
    useRef,
    useState,
} from "react";
import { interval } from "@xcmats/js-toolbox/async";
import { identity } from "@xcmats/js-toolbox/func";
import { timeUnit } from "@xcmats/js-toolbox/utils";




/**
 * Returns timestamp of component's first mount.
 */
export const useNow = (): number => {
    const [now] = useState(() => Date.now());
    return now;
};




/**
 * Interval in form of a hook.
 */
export const useInterval = (time = timeUnit.second): number => {
    const
        [memTime] = useState(() => time),
        [now, setNow] = useState(Date.now()),
        stopInterval = useRef<(r: string) => void>(identity);

    // update "now" every second
    useEffect(() => {
        interval(
            () => setNow(Date.now()),
            (c) => { stopInterval.current = c; },
            memTime,
        ).catch(identity);
        return () => { stopInterval.current("stopped"); };
    }, [memTime]);

    return now;
};




/**
 * Set document title on component mount, revert on umount.
 */
export const useDocumentTitle = (title: string): void =>
    useEffect(() => {
        const originalTitle = document.title;
        document.title = title;
        return () => { document.title = originalTitle; };
    }, [title]);
