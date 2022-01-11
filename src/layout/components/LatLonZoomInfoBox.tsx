/**
 * Map components.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2020-present
 */

import type { FC } from "react";
import { useSelector } from "react-redux";
import {
    styled,
    useStyletron,
} from "baseui";
import { Layer } from "baseui/layer";
import { Label3 } from "baseui/typography";

import {
    getReady,
    getViewport,
} from "~/map/selectors";
import { format } from "~/map/functions";
import {
    TextColumn,
    TextRow,
} from "~/layout/components/Containers";




/**
 * ...
 */
const L = styled(Label3, ({ $theme }) => ({
    color: $theme.colors.primary300,
}));




/**
 * ...
 */
const LatLonZoomInfoBox: FC = () => {
    const [css, theme] = useStyletron();
    const ready = useSelector(getReady);
    const viewport = useSelector(getViewport);

    return (
        ready ? <Layer>
            <TextRow
                className={css({
                    position: "fixed",
                    right: "10px",
                    padding: "8px",
                    justifyContent: "center",
                    backgroundColor: theme.colors.accent700,
                    [theme.mediaQuery.small]: { top: "60px" },
                    [theme.mediaQuery.medium]: { top: "80px" },
                })}
            >
                <TextColumn
                    className={css({
                        alignItems: "flex-end",
                    })}
                >
                    <L>lat:</L>
                    <L>lon:</L>
                    <L>zoom:</L>
                </TextColumn>
                <TextColumn
                    className={css({
                        width: "60px",
                    })}
                >
                    <Label3>{format(viewport.latitude)}</Label3>
                    <Label3>{format(viewport.longitude)}</Label3>
                    <Label3>{format(viewport.zoom)}</Label3>
                </TextColumn>
            </TextRow>
        </Layer> : null
    );
};

export default LatLonZoomInfoBox;
