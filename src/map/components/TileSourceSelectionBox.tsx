/**
 * Map components.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2020-present
 */

import type { FC } from "react";
import {
    batch,
    useSelector,
} from "react-redux";
import { useStyletron } from "baseui";
import { Combobox } from "baseui/combobox";
import { SIZE } from "baseui/select";

import { appMemory } from "~/root/memory";
import {
    selectReady,
    selectTilesource,
} from "~/map/selectors";
import type { TileSource } from "~/map/types";
import { tileSources } from "~/map/constants";
import { useTheme } from "~/layout/hooks";
import Box from "~/layout/components/Box";




/**
 * ...
 */
const { act } = appMemory();




/**
 * ...
 */
const TileSourceSelectionBox: FC<{ extraSources?: TileSource[]; }> = ({
    extraSources,
}) => {
    const [css] = useStyletron();
    const theme = useTheme();
    const ready = useSelector(selectReady);
    const tilesource = useSelector(selectTilesource);

    return ready ? (
        <Box
            surfaceStyle={css({
                position: "fixed",
                right: "10px",
                bottom: "10px",
                justifyContent: "center",
            })}
            padding={6}
        >
            <Combobox
                autocomplete={false}
                value={tilesource.label}
                onChange={(_, option?: TileSource) => {
                    if (option) {
                        batch(() => {
                            act.map.SET_TILESOURCE(option);
                            act.layout.SET_THEME(option.themeVariant);
                        });
                    }
                }}
                size={SIZE.compact}
                options={
                    extraSources ?
                        tileSources.concat(extraSources) :
                        tileSources
                }
                mapOptionToString={option => option.label}
                overrides={{
                    Root: { style: { width: "110px" } },
                    ListBox: { style: { maxHeight: "460px" } },
                    Input: { props: {
                        overrides: {
                            Root: { style: {
                                borderTopStyle: "none",
                                borderRightStyle: "none",
                                borderBottomStyle: "none",
                                borderLeftStyle: "none",
                            } },
                            Input: { style: {
                                fontWeight: 600,
                                userSelect: "none",
                                cursor: "pointer",
                                paddingTop: "0px",
                                paddingBottom: "0px",
                                backgroundColor: theme.colors.backgroundPrimary,
                            } },
                        },
                    } },
                }}
                onFocus={(e) => e.target.blur()}
            />
        </Box>
    ) : null;
};

export default TileSourceSelectionBox;
