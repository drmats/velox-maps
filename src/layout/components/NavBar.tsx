/**
 * Simple navigation bar.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2020-present
 */

import { useStyletron } from "baseui";
import { Layer } from "baseui/layer";
import { AppNavBar } from "baseui/app-nav-bar";
import {
    Label1,
    Label3,
    MonoLabelSmall,
} from "baseui/typography";

import { useTheme } from "~/layout/hooks";
import {
    Centered,
    RowContainer,
    TopBox,
} from "~/layout/components/Containers";
import { env } from "~/index";
import packageInfo from "~/../package.json";




/**
 * ...
 */
export default function NavBar (): JSX.Element {
    const [css] = useStyletron();
    const theme = useTheme();
    const overrides = {
        Block: { style: { color: theme.colors.white } },
    };

    return (
        <>
            <Layer>
                <TopBox>
                    <AppNavBar
                        title={packageInfo.name}
                        overrides={{
                            Root: {
                                style: {
                                    backgroundColor: theme.colors.accent700,
                                },
                            },
                            AppName: {
                                style: {
                                    height: "32px",
                                    color: theme.colors.white,
                                    [theme.mediaQuery.small]: {
                                        width: "0px",
                                        overflow: "hidden",
                                    },
                                    [theme.mediaQuery.medium]: {
                                        width: "auto",
                                        overflow: "visible",
                                    },
                                },
                            },
                        }}
                    />
                </TopBox>
            </Layer>

            <Layer>
                <TopBox>
                    <Centered>
                        <RowContainer
                            className={css({
                                alignItems: "center",
                                [theme.mediaQuery.small]: {
                                    height: theme.sizing.scale1200,
                                },
                                [theme.mediaQuery.medium]: {
                                    height: "72px",
                                },
                            })}
                        >
                            <RowContainer
                                className={css({ alignItems: "baseline" })}
                            >
                                <Label1 overrides={overrides}>
                                    react-baseui-maplibre
                                </Label1>
                                <Label3 overrides={overrides}>
                                    { packageInfo.version }
                                </Label3>
                                <MonoLabelSmall overrides={overrides}>
                                    ({ env.GIT_VERSION })
                                </MonoLabelSmall>
                            </RowContainer>
                        </RowContainer>
                    </Centered>
                </TopBox>
            </Layer>
        </>
    );
}
