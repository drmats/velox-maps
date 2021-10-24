/**
 * Bundle configuration.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2019-present
 */




// ...
const
    webpack = require("webpack"),
    { realpathSync } = require("fs"),
    { resolve } = require("path"),
    MinifyPlugin = require("terser-webpack-plugin"),
    ESLintPlugin = require("eslint-webpack-plugin"),
    HtmlWebpackPlugin = require("html-webpack-plugin"),
    { git } = require("./scripts/lib"),
    appName = require("./package.json").name,
    appDirectory = realpathSync(process.cwd());




// ...
module.exports = {

    mode: "production",


    target: "browserslist",


    resolve: {
        extensions: [".js", ".ts", ".json"],
        alias: {
            "~": resolve(appDirectory, "src"),
        },
    },


    entry: {
        [appName]: resolve(appDirectory, "src/index.ts"),
    },


    output: {
        library: {
            name: appName,
            type: "window",
        },
        filename: "[name].js",
        chunkFilename: "[contenthash].js",
        globalObject: "this",
        path: resolve(__dirname, "./dist"),
        clean: true,
    },


    optimization: {
        concatenateModules: true,
        mergeDuplicateChunks: true,
        minimize: true,
        minimizer: [
            new MinifyPlugin({
                terserOptions: {
                    output: {
                        comments: false,
                    },
                },
                extractComments: false,
            }),
        ],
        chunkIds: "total-size",
        moduleIds: "size",
        providedExports: true,
        removeAvailableModules: false,
        removeEmptyChunks: true,
        sideEffects: true,
    },


    performance: {
        maxAssetSize: 1024*1024,
    },


    module: {
        rules: [
            {
                test: /\.(js|ts)$/,
                loader: "babel-loader",
                sideEffects: false,
            },
        ],
    },


    plugins: [
        new webpack.EnvironmentPlugin({
            BABEL_ENV: "production",
            DEBUG: false,
            GIT_AUTHOR_DATE: git("log -1 --format=%aI"),
            GIT_VERSION: git("describe --always"),
            NODE_ENV: "production",
        }),
        new ESLintPlugin({
            context: "src",
        }),
        new HtmlWebpackPlugin({
            filename: "index.html",
            inject: "body",
            hash: true,
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true,
            },
            title: appName,
            template: resolve(
                appDirectory, "static/index.template.html",
            ),
        }),
    ],

};
