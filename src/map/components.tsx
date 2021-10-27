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
import { Layer } from "baseui/layer";
import { Label3 } from "baseui/typography";
import { padLeft } from "@xcmats/js-toolbox/string";

import {
    getReady,
    getViewport,
} from "~/map/selectors";




/**
 * ...
 */
const format = (input: number, n = 3): string => {
    const i = Math.floor(input*10**n), ia = Math.abs(i);
    return (
        (i === ia ? "" : "-") +
        String(Math.floor(ia/10**n))+ "." +
        padLeft(String(Math.floor(ia%10**n)), n, "0")
    );
};




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
                        width: "50px",
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
