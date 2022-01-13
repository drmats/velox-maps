/**
 * App-wise, typed shared memory.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2021-present
 */

/* eslint-disable @typescript-eslint/no-empty-interface */

import { useMemory } from "mem-box";




/**
 * Type-safe instance of useMemory.
 */
export const appMemory: (() => Ctx) = useMemory;




/**
 * Global declaration merge.
 */
declare global {

    /**
     * Type placeholder for shared memory context.
     */
    interface Ctx { }

}
