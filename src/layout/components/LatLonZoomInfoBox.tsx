/**
 * Map components.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2020-present
 */

import type { FC } from "react";
import { useSelector } from "react-redux";
import { useStyletron } from "baseui";

import {
    getReady,
    getViewport,
} from "~/map/selectors";
import { format } from "~/map/functions";
import { useTheme } from "~/layout/hooks";
import KvInfoBox from "~/layout/components/KvInfoBox";




/**
 * ...
 */
const LatLonZoomInfoBox: FC = () => {
    const [css] = useStyletron();
    const theme = useTheme();
    const ready = useSelector(getReady);
    const viewport = useSelector(getViewport);

    return (
        ready ? (
            <KvInfoBox
                data={{
                    lat: format(viewport.latitude),
                    lon: format(viewport.longitude),
                    zoom: format(viewport.zoom),
                }}
                surfaceStyle={css({
                    position: "fixed",
                    right: "10px",
                    [theme.mediaQuery.small]: { top: "60px" },
                    [theme.mediaQuery.medium]: { top: "80px" },
                })}
                valueFieldMaxWidth={68}
            />
        ) : null
    );
};

export default LatLonZoomInfoBox;