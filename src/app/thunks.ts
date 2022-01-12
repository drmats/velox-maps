/**
 * Component thunks.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2020-present
 */

import type { ThunkType } from "~/store/types";
import { SPA_HASH_SEPARATOR } from "~/app/constants";
import {
    getReady,
    getHash,
} from "~/app/selectors";




/**
 * App component thunks.
 */
export default {

    /**
     * Set application ready state - example.
     */
    setReady: (readyState: boolean): ThunkType =>
        async (_d, getState, { act, logger }) => {
            const state = getState();
            getReady(state) !== readyState && (
                readyState ? act.app.READY() : act.app.NOT_READY()
            );
            readyState && logger.info("Ready! ✅");
        },

    /**
     * Basic SPA routing - push browser hash state.
     */
    pushHash: (hash: string): ThunkType =>
        async (_d, getState, { act }) => {
            if (getHash(getState()) !== hash) {
                const pathname = (new URL(document.URL)).pathname;
                const h = hash.length === 0 ? pathname : `#${hash}`;
                history.pushState(undefined, "", h);
                act.app.SET_HASH(hash);
            }
        },

    /**
     * Basic SPA routing - replace browser hash state.
     */
    replaceHash: (hash: string): ThunkType =>
        async (_d, getState, { act }) => {
            if (getHash(getState()) !== hash) {
                const pathname = (new URL(document.URL)).pathname;
                const h = hash.length === 0 ? pathname : `#${hash}`;
                history.replaceState(undefined, "", h);
                act.app.SET_HASH(hash);
            }
        },

    /**
     * Basic SPA routing - push route state.
     */
    pushSPARoute: (route: string): ThunkType =>
        async (_d, getState, { tnk }) => {
            const [r, h] = getHash(getState()).split(SPA_HASH_SEPARATOR);
            if (r !== route) {
                if (h && h !== "") {
                    tnk.app.pushHash([route, h].join(SPA_HASH_SEPARATOR));
                } else {
                    tnk.app.pushHash(route);
                }
            }
        },

    /**
     * Basic SPA routing - replace route state.
     */
    replaceSPARoute: (route: string): ThunkType =>
        async (_d, getState, { tnk }) => {
            const [r, h] = getHash(getState()).split(SPA_HASH_SEPARATOR);
            if (r !== route) {
                if (h && h !== "") {
                    tnk.app.replaceHash([route, h].join(SPA_HASH_SEPARATOR));
                } else {
                    tnk.app.replaceHash(route);
                }
            }
        },

    /**
     * Basic SPA routing - push hash state.
     */
    pushSPAHash: (hash: string): ThunkType =>
        async (_d, getState, { tnk }) => {
            const [r, h] = getHash(getState()).split(SPA_HASH_SEPARATOR);
            if (h !== hash) {
                if (hash !== "") {
                    tnk.app.pushHash([r, hash].join(SPA_HASH_SEPARATOR));
                } else {
                    tnk.app.pushHash(r);
                }
            }
        },

    /**
     * Basic SPA routing - replace hash state.
     */
    replaceSPAHash: (hash: string): ThunkType =>
        async (_d, getState, { tnk }) => {
            const [r, h] = getHash(getState()).split(SPA_HASH_SEPARATOR);
            if (h !== hash) {
                if (hash !== "") {
                    tnk.app.replaceHash([r, hash].join(SPA_HASH_SEPARATOR));
                } else {
                    tnk.app.replaceHash(r);
                }
            }
        },

};
