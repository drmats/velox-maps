/**
 * Simple container box.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2020-present
 */

import type { FC } from "react";
import { styled } from "baseui";
import { Card } from "baseui/card";
import { Layer } from "baseui/layer";
import { isNumber } from "@xcmats/js-toolbox/type";




/**
 * ...
 */
const Surface = styled("div", {
    display: "flex",
    flexDirection: "row",
});




/**
 * ...
 */
const Box: FC<{
    surfaceStyle?: string;
    padding?: number;
}> = ({
    surfaceStyle, children, padding,
}) => {
    const p = String(isNumber(padding) ? padding : 8);
    return (
        <Layer>
            <Surface className={surfaceStyle}>
                <Card
                    overrides={{
                        Contents: { style: {
                            marginTop: `${p}px !important`,
                            marginRight: `${p}px !important`,
                            marginBottom: `${p}px !important`,
                            marginLeft: `${p}px !important`,
                        } },
                        Body: { style: { marginBottom: "0px !important" } },
                    }}
                >
                    {children}
                </Card>
            </Surface>
        </Layer>
    );
};

export default Box;