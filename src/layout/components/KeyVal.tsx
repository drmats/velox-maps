/**
 * Two-column key-value component.
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
import { isNumber } from "@xcmats/js-toolbox/type";

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
const KeyVal: FC<{
    data: Record<string, string>;
    valueFieldMaxWidth?: number;
}> = ({
    data, valueFieldMaxWidth,
}) => {
    const [css] = useStyletron();
    const entries = Object.entries(data);
    const valueWidth =
        isNumber(valueFieldMaxWidth) ?
            `${valueFieldMaxWidth}px` :
            "auto";

    return (
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
    );
};

export default KeyVal;
