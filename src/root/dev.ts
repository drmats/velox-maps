/**
 * Dev tools.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2020-present
 */

/* eslint-disable react-hooks/rules-of-hooks */

import { assign } from "@xcmats/js-toolbox/struct";
import { devEnv } from "@xcmats/js-toolbox/utils";
import { isObject } from "@xcmats/js-toolbox/type";

import { devNamespaceKey } from "~/root/config";
import { useMemory } from "~/root/memory";
import packageInfo from "~/../package.json";




/**
 * Development environment libraries.
 */
const devEnvLibs = async (): Promise<Record<string, unknown>> => ({
    toolbox: await import("@xcmats/js-toolbox"),
});




/**
 * Expose dev. namespace and some convenience shortcuts.
 */
export const exposeDevNamespace = async (): Promise<void> => {
    if (devEnv()) {
        const
            devNs = window[packageInfo.name],
            devNsContent = {
                libs: await devEnvLibs(),
                ctx: useMemory(),
                packageInfo,
            };
        if (isObject(devNs)) {
            assign(devNs, devNsContent);
        } else {
            window[packageInfo.name] = devNs;
        }
        window[devNamespaceKey] = window[packageInfo.name];
    }
};
