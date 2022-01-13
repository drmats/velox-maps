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
const LL = styled(Label3, ({ $theme }) => ({
    color: $theme.colors.primary600,
}));
const LV = styled(Label3, {
    fontWeight: 600,
});




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
                        Contents: { style: {
                            marginTop: "8px !important",
                            marginRight: "8px !important",
                            marginBottom: "8px !important",
                            marginLeft: "8px !important",
                        } },
                        Body: { style: { marginBottom: "0px !important" } },
                    }}
                >
                    <StyledBody
                        className={css({
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            gap: "5px",
                            marginBottom: "0px !important",
                        })}
                    >
                        <TextColumn
                            className={css({
                                alignItems: "flex-end",
                                margin: "0px",
                            })}
                        >
                            <LL>lat:</LL>
                            <LL>lon:</LL>
                            <LL>zoom:</LL>
                        </TextColumn>
                        <TextColumn
                            className={css({
                                width: "68px",
                                margin: "0px",
                            })}
                        >
                            <LV>{format(viewport.latitude)}</LV>
                            <LV>{format(viewport.longitude)}</LV>
                            <LV>{format(viewport.zoom)}</LV>
                        </TextColumn>
                    </StyledBody>
                </Card>
            </Surface>
        </Layer> : null
    );
};

export default LatLonZoomInfoBox;
