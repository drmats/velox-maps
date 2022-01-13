/**
 * Theme customization.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2020-present
 */

import type { Theme } from "baseui";
import { createLightTheme } from "baseui";




/**
 * ...
 */
type CustomTheme = Theme /* & { customProps } */;




/**
 * ...
 */
const theme = createLightTheme({});
export const MyTheme: CustomTheme = {
    ...theme,
    borders: {
        ...theme.borders,
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
    },
    /* customProps */
};

MyTheme.borders.useRoundedCorners = false;
