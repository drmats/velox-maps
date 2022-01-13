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
import {
    Card,
    StyledBody,
} from "baseui/card";
import { Layer } from "baseui/layer";
import { Label3 } from "baseui/typography";

import {
    getReady,
    getViewport,
} from "~/map/selectors";
import { format } from "~/map/functions";
import { TextColumn } from "~/layout/components/Containers";




/**
 * ...
 */
const Surface = styled("div", ({ $theme }) => ({
    display: "flex",
    flexDirection: "row",
    position: "fixed",
    right: "10px",
    [$theme.mediaQuery.small]: { top: "60px" },
    [$theme.mediaQuery.medium]: { top: "80px" },
}));
const L = styled(Label3, ({ $theme }) => ({
    color: $theme.colors.primary600,
}));




/**
 * ...
 */
const LatLonZoomInfoBox: FC = () => {
    const [css] = useStyletron();
    const ready = useSelector(getReady);
    const viewport = useSelector(getViewport);

    return (
        ready ? <Layer>
            <Surface>
                <Card
                    overrides={{
                        Contents: { style: { margin: "8px !important" } },
                        Body: { style: { marginBottom: "0px !important" } },
                    }}
                >
                    <StyledBody
                        className={css({
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            gap: "8px",
                            marginBottom: "0px !important",
                        })}
                    >
                        <TextColumn
                            className={css({
                                alignItems: "flex-end",
                                margin: "0px",
                            })}
                        >
                            <L>lat:</L>
                            <L>lon:</L>
                            <L>zoom:</L>
                        </TextColumn>
                        <TextColumn
                            className={css({
                                width: "60px",
                                margin: "0px",
                            })}
                        >
                            <Label3>{format(viewport.latitude)}</Label3>
                            <Label3>{format(viewport.longitude)}</Label3>
                            <Label3>{format(viewport.zoom)}</Label3>
                        </TextColumn>
                    </StyledBody>
                </Card>
            </Surface>
        </Layer> : null
    );
};

export default LatLonZoomInfoBox;
