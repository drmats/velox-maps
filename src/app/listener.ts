/**
 * Component listeners.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2020-present
 */

import {
    last,
    tail,
} from "@xcmats/js-toolbox/array";
import {
    handleException,
    pipe,
} from "@xcmats/js-toolbox/func";

import type { ThunkType } from "~/store/types";
import { getHash } from "~/app/selectors";
import { hashToSPARoute } from "~/app/functions";
import {
    coordsToMapViewport,
    hashStringToCoords,
} from "~/map/functions";




/**
 * Setup App-related listeners.
 */
const setupListener: ThunkType = (_d, getState, { act }) => {

    // handle url hash change - update redux state
    const browserHashToRedux = () =>
        pipe(document.URL) (
            url => new URL(url),
            urlObj => urlObj.hash,
            hash => hash.startsWith("#") ? tail(hash) : hash,
            act.app.SET_HASH,
        );

    // handle url hash change - update map viewport
    const browserHashToMapViewport = () =>
        handleException(() =>
            pipe() (
                getState,
                getHash,
                hashToSPARoute,
                last,
                hashStringToCoords,
                coordsToMapViewport,
                act.map.SET_VIEWPORT,
            ),
        );

    // handle application visibility change
    document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "visible") {
            act.app.VISIBLE();
        } else {
            act.app.HIDDEN();
        }
    });

    // initial hash synchronization
    browserHashToRedux();
    browserHashToMapViewport();

    // hash synchronization on every external change
    window.addEventListener("hashchange", () => {
        browserHashToRedux();
        browserHashToMapViewport();
    });

};

export default setupListener;
