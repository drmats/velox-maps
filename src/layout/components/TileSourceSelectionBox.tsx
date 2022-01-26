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
import { Layer } from "baseui/layer";

import { appMemory } from "~/root/memory";
import {
    selectReady,
    selectTilesource,
} from "~/map/selectors";
import type { TileSource } from "~/map/types";
import { tileSources } from "~/map/constants";
import { useTheme } from "~/layout/hooks";
import { TextRow } from "~/layout/components/Containers";




/**
 * ...
 */
const { act } = appMemory();




/**
 * ...
 */
const TileSourceSelectionBox: FC = () => {
    const [css] = useStyletron();
    const theme = useTheme();
    const ready = useSelector(selectReady);
    const tilesource = useSelector(selectTilesource);

    return (
        ready ? <Layer>
            <TextRow
                className={css({
                    position: "fixed",
                    right: "10px",
                    justifyContent: "center",
                    bottom: "10px",
                })}
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
                    options={tileSources}
                    mapOptionToString={option => option.label}
                    overrides={{
                        Root: { style: {
                            width: "110px",
                            borderWidth: "2px",
                            borderColor: theme.colors.borderOpaque,
                            borderStyle: "solid",
                        } },
                        Input: { props: { overrides: {
                            Input: { style: {
                                fontWeight: 600,
                                userSelect: "none",
                                cursor: "pointer",
                            } },
                        } } },

                    }}
                    onFocus={(e) => e.target.blur()}
                />
            </TextRow>
        </Layer> : null
    );
};

export default TileSourceSelectionBox;
