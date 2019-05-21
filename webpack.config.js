function joinPath(...paths) {
    return paths.join("/").replace(/\/{2,}/g, "/");
}

const TsConfigPathsPlugin = require("awesome-typescript-loader")
    .TsConfigPathsPlugin;

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: joinPath(__dirname, "dist"),
    },

    // Set environmet
    mode: "development",

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
        // Resolve paths defined in tsconfig.json
        plugins: [new TsConfigPathsPlugin()],
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader",
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader",
            },
        ],
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM",
    },
};
