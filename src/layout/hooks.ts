/**
 * @license BSD-2-Clause
 * @copyright Mat. 2021-present
 */

import { useEffect } from "react";
import { useSelector } from "react-redux";

import type { CustomTheme } from "~/layout/theme";
import { selectTheme } from "~/layout/selectors";
import { Themes } from "~/layout/theme";




/**
 * Return current theme.
 */
export const useTheme = (): CustomTheme => {
    const currentThemeVariant = useSelector(selectTheme);
    const currentTheme = Themes[currentThemeVariant];

    // imperative change of root style colors
    useEffect(() => {
        const htmlStyle = document.querySelector("html")?.style;
        if (htmlStyle) {
            htmlStyle.backgroundColor = currentTheme.colors.backgroundPrimary;
            htmlStyle.color = currentTheme.colors.foregroundAlt;
        }
    }, [currentTheme]);

    return currentTheme;
};
