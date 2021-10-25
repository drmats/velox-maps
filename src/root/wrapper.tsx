/**
 * Root frontend application component.
 * All providers should be included here.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2020-present
 */

import type { Action } from "red-g";
import type { FC } from "react";
import type { InferProps } from "prop-types";
import type { Store } from "redux";
import { Client as Styletron } from "styletron-engine-atomic";
import { BaseProvider } from "baseui";
import { Provider as ReduxProvider } from "react-redux";
import { Provider as StyletronProvider } from "styletron-react";
import PropTypes from "prop-types";

import { MyTheme } from "~/layout/theme";
import type { RootState } from "~/store/types";




/**
 * Root element propTypes definition.
 */
const rootPropTypes = {
    element: PropTypes.node.isRequired,
};
type RootType = FC<InferProps<typeof rootPropTypes>>;




/**
 * Root-wrapping element creation.
 */
export default function createRootWrapper (
    store: Store<RootState, Action>,
    engine: Styletron,
): RootType {
    /**
     * `<Root>` - root component.
     */
    const Root: RootType = ({ element }) =>
        <ReduxProvider store={store}>
            <StyletronProvider value={engine}>
                <BaseProvider theme={MyTheme}>
                    { element }
                </BaseProvider>
            </StyletronProvider>
        </ReduxProvider>;

    Root.propTypes = rootPropTypes;

    return Root;
}
