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
}> = ({
    surfaceStyle, children,
}) => (
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
                {children}
            </Card>
        </Surface>
    </Layer>
);

export default Box;
