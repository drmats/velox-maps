/**
 * Map components.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2020-present
 */

import type { FC } from "react";
import { useSelector } from "react-redux";
import { useStyletron } from "baseui";
import { Combobox } from "baseui/combobox";
import { SIZE } from "baseui/select";
import { Layer } from "baseui/layer";

import { appMemory } from "~/root/memory";
import {
    getReady,
    getTilesource,
} from "~/map/selectors";
import type { TileSource } from "~/map/types";
import { tileSources } from "~/map/constants";
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
    const ready = useSelector(getReady);
    const tilesource = useSelector(getTilesource);

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
                    onChange={(_, option) =>
                        option && act.map.SET_TILESOURCE(option as TileSource)
                    }
                    size={SIZE.compact}
                    options={tileSources}
                    mapOptionToString={option => option.label}
                    overrides={{
                        Root: { style: () => ({ width: "120px" }) },
                        Input: { props: { overrides: {
                            Input: { style: { fontWeight: 600 } },
                        } } },

                    }}
                    onFocus={(e) => e.target.blur()}
                />
            </TextRow>
        </Layer> : null
    );
};

export default TileSourceSelectionBox;
