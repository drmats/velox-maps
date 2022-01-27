/**
 * Simple, generic key-value info box.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2020-present
 */

import type { FC } from "react";

import Box from "~/layout/components/Box";
import KeyVal from "~/layout/components/KeyVal";




/**
 * ...
 */
const KvInfoBox: FC<{
    data: Record<string, string>;
    surfaceStyle?: string;
    valueFieldMaxWidth?: number;
}> = ({
    data, surfaceStyle, valueFieldMaxWidth,
}) => (
    <Box surfaceStyle={surfaceStyle}>
        <KeyVal data={data} valueFieldMaxWidth={valueFieldMaxWidth} />
    </Box>
);

export default KvInfoBox;
