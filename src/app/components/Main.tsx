/**
 * @license BSD-2-Clause
 * @copyright Mat. 2021-present
 */

import type { FC } from "react";
import { useStyletron } from "baseui";
import { H4 } from "baseui/typography";

import { useShuffle } from "~/app/hooks";
import NavBar from "~/layout/components/Navbar";
import { Centered } from "~/layout/components/Containers";
import packageInfo from "~/../package.json";




/**
 * Main application component.
 */
export const App: FC = () => {
    // ...
    const [css] = useStyletron();
    const text = useShuffle(packageInfo.name);

    // ...
    return (
        <>
            <NavBar />

            <Centered
                className={css({
                    alignItems: "center",
                    height: "calc(100vh - 72px)",
                })}
            >
                <H4>{text}</H4>
            </Centered>
        </>
    );
};
