/**
 * @license BSD-2-Clause
 * @copyright Mat. 2021-present
 */

/* eslint-disable react-hooks/exhaustive-deps */

import type { FC } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { timeUnit } from "@xcmats/js-toolbox/utils";
import { useStyletron } from "baseui";
import {
    Card,
    StyledBody,
} from "baseui/card";
import { Display4 } from "baseui/typography";

import { getViewport } from "~/map/selectors";
import { mapViewportToHashString } from "~/map/functions";
import { appMemory } from "~/root/memory";
import { FullScreen } from "~/layout/components/Containers";




/**
 * NotFound screen.
 */
const NotFound: FC = () => {
    const { tnk } = appMemory();
    const [css] = useStyletron();
    const viewport = useSelector(getViewport);

    useEffect(() => {
        setTimeout(() => {
            tnk.app.replaceSPARoute("");
            tnk.app.replaceSPAHash(mapViewportToHashString(viewport));
        }, 2 * timeUnit.second);
    }, []);

    return (
        <FullScreen>
            <Card>
                <StyledBody
                    className={css({
                        userSelect: "none",
                    })}
                >
                    <Display4>Wrong Path</Display4>
                </StyledBody>
            </Card>
        </FullScreen>
    );
};

export default NotFound;
