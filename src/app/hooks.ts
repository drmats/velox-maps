/**
 * Component hooks.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2021-present
 */

import { useState } from "react";




/**
 * Returns timestamp of component's first mount.
 */
export const useNow = (): number => {
    const [now] = useState(() => Date.now());
    return now;
};
