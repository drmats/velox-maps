/**
 * Dev tools.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2020-present
 */

import { assign } from "@xcmats/js-toolbox/struct";
import { devEnv } from "@xcmats/js-toolbox/utils";
import { isObject } from "@xcmats/js-toolbox/type";

import { devNamespaceKey } from "~/root/config";
import { appMemory } from "~/root/memory";
import packageInfo from "~/../package.json";




/**
 * Returns standard browser's console in dev mode
 * and do-nothing-stub in production.
 */
export const devConsole = (): Console => devEnv() ?
    console :
    (Object.keys(console) as (keyof Omit<Console, "Console">)[])
        .reduce((a, k) => {
            a[k] = () => undefined;
            return a;
        }, {} as Console);




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
                ctx: appMemory(),
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
