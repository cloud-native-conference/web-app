const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

const root = __dirname;

const paths = {
    index: path.resolve(root, "src", "index.tsx"),
    dist: path.resolve(root, "dist"),
    srcDir: path.resolve(root, "src"),
};

module.exports = (env, argv) => {
    const developerMode = argv.mode === "development";

    return {
        entry: paths.index,
        devtool: developerMode ? "inline-source-map" : "none",
        output: {
            path: paths.dist,
            filename: "bundle.js",
            publicPath: "/"
        },
        resolve: {
            extensions: [".ts", ".tsx", ".js"],
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: "ts-loader",
                    include: [paths.srcDir],
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "public/index.html",
            }),
        ],
        devServer: {
            port: 3000,
            historyApiFallback: true
        },
    };
}
