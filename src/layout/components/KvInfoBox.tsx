/**
 * Simple, generic key-value info box.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2020-present
 */

import type { FC } from "react";
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

import { TextColumn } from "~/layout/components/Containers";




/**
 * ...
 */
const Surface = styled("div", {
    display: "flex",
    flexDirection: "row",
});
const LL = styled(Label3, ({ $theme }) => ({
    color: $theme.colors.colorSecondary,
}));
const LV = styled(Label3, {
    fontWeight: 600,
});




/**
 * ...
 */
const KvInfoBox: FC<{
    data: Record<string, string>;
    surfaceStyle?: string;
    valueFieldMaxWidth?: number;
}> = ({
    data, surfaceStyle, valueFieldMaxWidth,
}) => {
    const [css] = useStyletron();
    const entries = Object.entries(data);
    const valueWidth = `${valueFieldMaxWidth || 100}px`;

    return (
        <Layer>
            <Surface className={surfaceStyle}>
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
                            { entries.map(([k, _]) => (
                                <LL key={k}>{`${k}:`}</LL>
                            )) }
                        </TextColumn>
                        <TextColumn
                            className={css({
                                width: valueWidth,
                                margin: "0px",
                                overflow: "hidden",
                            })}
                        >
                            { entries.map(([k, v]) => (
                                <LV key={k}>{v}</LV>
                            )) }
                        </TextColumn>
                    </StyledBody>
                </Card>
            </Surface>
        </Layer>
    );
};

export default KvInfoBox;
