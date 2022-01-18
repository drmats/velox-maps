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
 * Standard theme prop overrides.
 */
const borderOverrides = {
    buttonBorderRadius: "0px",
    inputBorderRadius: "0px",
    popoverBorderRadius: "0px",
    radius100: "0px",
    radius200: "0px",
    radius300: "0px",
    radius400: "0px",
    radius500: "0px",
    surfaceBorderRadius: "0px",
    tagBorderRadius: "0px",
    useRoundedCorners: false,
};




/**
 * Custom theme - dark variant.
 */
export const DarkTheme: CustomTheme = {
    ...createDarkTheme({}, {
        colors: { backgroundPrimary: "#141414" },
        borders: borderOverrides,
    }),
    /* customProps */
};




/**
 * Custom theme - light variant.
 */
export const LightTheme: CustomTheme = {
    ...createLightTheme({}, {
        colors: { backgroundPrimary: "#ffffff" },
        borders: borderOverrides,
    }),
    /* customProps */
};




/**
 * Theme "registry".
 */
export const Themes = {
    [ThemeVariant.DARK]: DarkTheme,
    [ThemeVariant.LIGHT]: LightTheme,
};
