/**
 * Theme customization.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2020-present
 */

import type { Theme } from "baseui";
import {
    createDarkTheme,
    createLightTheme,
} from "baseui";




/**
 * Theme variants.
 */
export enum ThemeVariant {
    LIGHT = "LIGHT",
    DARK = "DARK",
}




/**
 * Custom theme type.
 */
export type CustomTheme = Theme /* & { customProps } */;




/**
 * Custom theme - dark variant.
 */
export const DarkTheme: CustomTheme = {
    ...createDarkTheme({}),
    /* customProps */
};




/**
 * Custom theme - light variant.
 */
export const LightTheme: CustomTheme = {
    ...createLightTheme({}),
    /* customProps */
};




/**
 * Theme "registry".
 */
export const Themes = {
    [ThemeVariant.DARK]: DarkTheme,
    [ThemeVariant.LIGHT]: LightTheme,
};
