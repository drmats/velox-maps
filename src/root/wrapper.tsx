/**
 * Root frontend application component.
 * All providers should be included here.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2020-present
 */

import type { FC } from "react";
import type { Store } from "redux";
import type { Action } from "red-g";
import type { InferProps } from "prop-types";
import { Provider } from "react-redux";
import PropTypes from "prop-types";

import type { RootState } from "../store/types";




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
): RootType {
    /**
     * `<Root>` - root component.
     */
    const Root: RootType = ({ element }) =>
        <Provider store={store}>
            { element }
        </Provider>;

    Root.propTypes = rootPropTypes;

    return Root;
}
