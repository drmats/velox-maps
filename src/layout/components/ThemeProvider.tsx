/**
 * @license BSD-2-Clause
 * @copyright Mat. 2020-present
 */

import type { FC } from "react";
import { BaseProvider } from "baseui";

import { useTheme } from "~/layout/hooks";




/**
 * Redux-connected root theme provider.
 */
const ThemeProvider: FC = ({ children }) => {
    const currentTheme = useTheme();
    return (
        <BaseProvider theme={currentTheme}>
            { children }
        </BaseProvider>
    );
};

export default ThemeProvider;
