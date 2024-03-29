/**
 * @license BSD-2-Clause
 * @copyright Mat. 2020-present
 */

import type { ThunkType } from "~/store/types";
import { SPA_HASH_SEPARATOR } from "~/router/constants";
import { selectHash } from "~/router/selectors";




/**
 * Basic SPA routing - push browser hash state.
 */
export const pushHash = (hash: string): ThunkType =>
    async (_d, getState, { act }) => {
        if (selectHash(getState()) !== hash) {
            const pathname = (new URL(document.URL)).pathname;
            const h = hash.length === 0 ? pathname : `#${hash}`;
            history.pushState(undefined, "", h);
            act.router.SET_HASH(hash);
        }
    };




/**
 * Basic SPA routing - replace browser hash state.
 */
export const replaceHash = (hash: string): ThunkType =>
    async (_d, getState, { act }) => {
        if (selectHash(getState()) !== hash) {
            const pathname = (new URL(document.URL)).pathname;
            const h = hash.length === 0 ? pathname : `#${hash}`;
            history.replaceState(undefined, "", h);
            act.router.SET_HASH(hash);
        }
    };




/**
 * Basic SPA routing - push route state.
 */
export const pushSPARoute = (route: string): ThunkType =>
    async (_d, getState, { tnk }) => {
        const [r, h] = selectHash(getState()).split(SPA_HASH_SEPARATOR);
        if (r !== route) {
            if (h && h !== "") {
                tnk.router.pushHash([route, h].join(SPA_HASH_SEPARATOR));
            } else {
                tnk.router.pushHash(route);
            }
        }
    };




/**
 * Basic SPA routing - replace route state.
 */
export const replaceSPARoute = (route: string): ThunkType =>
    async (_d, getState, { tnk }) => {
        const [r, h] = selectHash(getState()).split(SPA_HASH_SEPARATOR);
        if (r !== route) {
            if (h && h !== "") {
                tnk.router.replaceHash([route, h].join(SPA_HASH_SEPARATOR));
            } else {
                tnk.router.replaceHash(route);
            }
        }
    };




/**
 * Basic SPA routing - push hash state.
 */
export const pushSPAHash = (hash: string): ThunkType =>
    async (_d, getState, { tnk }) => {
        const [r, h] = selectHash(getState()).split(SPA_HASH_SEPARATOR);
        if (h !== hash) {
            if (hash !== "") {
                tnk.router.pushHash([r, hash].join(SPA_HASH_SEPARATOR));
            } else {
                tnk.router.pushHash(r);
            }
        }
    };




/**
 * Basic SPA routing - replace hash state.
 */
export const replaceSPAHash = (hash: string): ThunkType =>
    async (_d, getState, { tnk }) => {
        const [r, h] = selectHash(getState()).split(SPA_HASH_SEPARATOR);
        if (h !== hash) {
            if (hash !== "") {
                tnk.router.replaceHash([r, hash].join(SPA_HASH_SEPARATOR));
            } else {
                tnk.router.replaceHash(r);
            }
        }
    };
