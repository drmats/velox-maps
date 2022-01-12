/**
 * @license BSD-2-Clause
 * @copyright Mat. 2021-present
 */

/* eslint-disable react-hooks/exhaustive-deps */

import type { FC } from "react";
import { useEffect } from "react";
import { timeUnit } from "@xcmats/js-toolbox/utils";
import {
    Card,
    StyledBody,
} from "baseui/card";
import { Display4 } from "baseui/typography";

import { useMemory } from "~/root/memory";
import { FullScreen } from "~/layout/components/Containers";




/**
 * NotFound screen.
 */
const NotFound: FC = () => {
    const { tnk } = useMemory();

    useEffect(() => {
        setTimeout(() => tnk.app.replaceSPARoute(""), 2 * timeUnit.second);
    }, []);

    return (
        <FullScreen>
            <Card>
                <StyledBody>
                    <Display4>Not Found</Display4>
                </StyledBody>
            </Card>
        </FullScreen>
    );
};

export default NotFound;
