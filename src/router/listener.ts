/**
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
import { selectHash } from "~/router/selectors";
import { selectSpaHashSync } from "~/map/selectors";
import { hashToSPARoute } from "~/router/functions";
import {
    coordsToMapViewport,
    hashStringToCoords,
} from "~/map/functions";




/**
 * Setup Router-related listeners.
 */
const setupListener: ThunkType = (_d, getState, { act }) => {

    // handle url hash change - update redux state
    const browserHashToRedux = () =>
        pipe(document.URL) (
            url => new URL(url),
            urlObj => urlObj.hash,
            hash => hash.startsWith("#") ? tail(hash) : hash,
            act.router.SET_HASH,
        );

    // handle url hash change - update map viewport
    const browserHashToMapViewport = () =>
        handleException(() =>
            pipe() (
                getState,
                selectHash,
                hashToSPARoute,
                last,
                hashStringToCoords,
                coordsToMapViewport,
                act.map.SET_VIEWPORT,
            ),
        );

    // initial hash synchronization
    browserHashToRedux();
    if (selectSpaHashSync(getState())) browserHashToMapViewport();

    // hash synchronization on every external change
    window.addEventListener("hashchange", () => {
        browserHashToRedux();
        if (selectSpaHashSync(getState())) browserHashToMapViewport();
    });

};

export default setupListener;
