/**
 * Map components.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2020-present
 */

import { padLeft } from "@xcmats/js-toolbox/string";




/**
 * Format input number as string with desired precision.
 */
export const format = (input: number, precision = 4): string => {
    const i = Math.floor(input*10**precision), ia = Math.abs(i);
    return (
        (i === ia ? "" : "-") +
        String(Math.floor(ia/10**precision))+ "." +
        padLeft(String(Math.floor(ia%10**precision)), precision, "0")
    );
};
