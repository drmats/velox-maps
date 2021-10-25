/**
 * Theme customization.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2020-present
 */

import type { Theme } from "baseui";
import { createDarkTheme } from "baseui";




/**
 * ...
 */
type CustomTheme = Theme /* & { customProps } */;




/**
 * ...
 */
export const MyTheme: CustomTheme = {
    ...createDarkTheme({}),
    /* customProps */
};
