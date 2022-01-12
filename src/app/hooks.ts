/**
 * @license BSD-2-Clause
 * @copyright Mat. 2021-present
 */

import { useSelector } from "react-redux";

import { getHash } from "~/app/selectors";
import { hashToSPARoute } from "~/app/functions";




/**
 * Simplest possible SPA routing.
 */
export const useSPARoute = (): [string, string] =>
    hashToSPARoute(useSelector(getHash));
