/**
 * Dynamically loaded MapGL.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2020-present
 */

import type { FC } from "react";
import {
    lazy,
    Suspense,
} from "react";
import { useStyletron } from "baseui";
import { Spinner } from "baseui/spinner";

import type { MapGLProps } from "~/map/types";




/**
 * Fallback (shown during MapGL component loading).
 */
const Loader: FC<{
    width: string; height: string;
}> = ({ width, height }) => {
    const [css] = useStyletron();

    return (
        <div
            className={css({
                display: "flex",
                ...{ width, height },
                alignItems: "center",
                justifyContent: "center",
            })}
        >
            <Spinner />
        </div>
    );
};




/**
 * Dynamically loaded MapGL component.
 */
export default function MapGLMod (props: MapGLProps): JSX.Element {
    const MapGL = lazy(() => import("~/map/mapgl"));

    return (
        <Suspense
            fallback={
                <Loader
                    width={props.width}
                    height={props.height}
                />
            }
        >
            <MapGL {...props} />
        </Suspense>
    );
}
