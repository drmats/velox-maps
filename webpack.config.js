/**
 * Bundle configuration.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2019-present
 */




// ...
const
    { realpathSync } = require("fs"),
    { resolve } = require("path"),
    MinifyPlugin = require("terser-webpack-plugin"),
    ESLintPlugin = require("eslint-webpack-plugin"),
    appName = require("./package.json").name,
    appDirectory = realpathSync(process.cwd());




// ...
module.exports = {

    mode: "production",


    target: "browserslist",


    resolve: {
        extensions: [".js", ".ts", ".json"],
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
        new ESLintPlugin({
            context: "src",
        }),
    ],


    devServer: {
        static: {
            directory: resolve(__dirname, "static"),
        },
        liveReload: true,
        hot: false,
        compress: true,
        port: 8000,
    },

};
