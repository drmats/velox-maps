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
import { StyledBody } from "baseui/card";
import { Label3 } from "baseui/typography";

import Box from "~/layout/components/Box";
import { TextColumn } from "~/layout/components/Containers";




/**
 * ...
 */
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
        <Box surfaceStyle={surfaceStyle}>
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
        </Box>
    );
};

export default KvInfoBox;
