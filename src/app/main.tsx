/**
 * @license BSD-2-Clause
 * @copyright Mat. 2021-present
 */

import type { FC } from "react";
import { useStyletron } from "baseui";
import { H4 } from "baseui/typography";

import { useShuffle } from "~/app/hooks";
import { Centered } from "~/layout/containers";
import packageInfo from "~/../package.json";




/**
 * Component example.
 */
export const App: FC = () => {
    // ...
    const [css] = useStyletron();
    const text = useShuffle(packageInfo.name);

    // ...
    return (
        <Centered
            className={css({
                alignItems: "center",
                height: "100vh",
            })}
        >
            <H4>{text}</H4>
        </Centered>
    );
};
