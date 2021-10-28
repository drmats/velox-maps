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
import { Combobox } from "baseui/combobox";
import { SIZE } from "baseui/select";
import { Layer } from "baseui/layer";
import { Label3 } from "baseui/typography";

import { useMemory } from "~/root/memory";
import {
    getReady,
    getTilesource,
    getViewport,
} from "~/map/selectors";
import type { TileSource } from "~/map/types";
import { tileSources } from "~/map/constants";
import { format } from "~/map/functions";




/**
 * ...
 */
const Column = styled("div", {
    display: "flex",
    flexDirection: "column",
    gap: "2px",
});
const Row = styled("div", {
    display: "flex",
    flexDirection: "row",
    gap: "5px",
});
const L = styled(Label3, ({ $theme }) => ({
    color: $theme.colors.primary300,
}));




/**
 * ...
 */
export const InfoBox: FC = () => {
    const [css, theme] = useStyletron();
    const ready = useSelector(getReady);
    const viewport = useSelector(getViewport);

    return (
        ready ? <Layer>
            <Row
                className={css({
                    position: "fixed",
                    right: "10px",
                    padding: "8px",
                    justifyContent: "center",
                    backgroundColor: theme.colors.accent700,
                    [theme.mediaQuery.small]: { top: "56px" },
                    [theme.mediaQuery.medium]: { top: "80px" },
                })}
            >
                <Column
                    className={css({
                        alignItems: "flex-end",
                    })}
                >
                    <L>lat:</L>
                    <L>lon:</L>
                    <L>zoom:</L>
                </Column>
                <Column
                    className={css({
                        width: "60px",
                    })}
                >
                    <Label3>{format(viewport.latitude)}</Label3>
                    <Label3>{format(viewport.longitude)}</Label3>
                    <Label3>{format(viewport.zoom)}</Label3>
                </Column>
            </Row>
        </Layer> : null
    );
};




/**
 * ...
 */
export const BottomBox: FC = () => {
    const [css] = useStyletron();
    const ready = useSelector(getReady);
    const tilesource = useSelector(getTilesource);
    const { act } = useMemory();


    return (
        ready ? <Layer>
            <Row
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
                    size={SIZE.mini}
                    options={tileSources}
                    mapOptionToString={option => option.label}
                    overrides={{
                        Root: { style: () => ({ width: "120px" }) },
                    }}
                    onFocus={(e) => e.target.blur()}
                />
            </Row>
        </Layer> : null
    );
};
