/**
 * @license BSD-2-Clause
 * @copyright Mat. 2021-present
 */

import { SPA_HASH_SEPARATOR } from "~/app/constants";




/**
 * Simplest possible SPA routing - split string to two parts.
 */
export const hashToSPARoute = (hash: string): [string, string] => {
    const [r, h] = hash.split(SPA_HASH_SEPARATOR);
    return [r, h || ""];
};
