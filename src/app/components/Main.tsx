/**
 * @license BSD-2-Clause
 * @copyright Mat. 2021-present
 */

import type { FC } from "react";
import { useStyletron } from "baseui";
import { H4 } from "baseui/typography";

import { useShuffle } from "~/app/hooks";
import NavBar from "~/layout/components/NavBar";
import {
    Centered,
    AppContent,
} from "~/layout/components/Containers";
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

            <AppContent
                overrides={{
                    overflowX: "hidden",
                    overflowY: "hidden",
                }}
            >
                <Centered
                    className={css({
                        alignItems: "center",
                        height: "100%",
                    })}
                >
                    <H4>{ text }</H4>
                </Centered>
            </AppContent>
        </>
    );
};
