/**
 * @license BSD-2-Clause
 * @copyright Mat. 2021-present
 */

import { useSelector } from "react-redux";

import type { CustomTheme } from "~/layout/theme";
import { getTheme } from "~/layout/selectors";
import { Themes } from "~/layout/theme";




/**
 * Return current theme.
 */
export const useTheme = (): CustomTheme => Themes[useSelector(getTheme)];
