const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(".", "build"), //folderpath
        // path: "The output directory as **absolute path** (required)", >>> folderpath
        filename: "bundle.js", //filename
    },

    //To remove terminal warning >>> WARNING in configuration

    // mode:"development",        // >>> Whole data in bundle.js
    mode: "production", // >>> optimized & smallest possible bundle data in bundle.js
    module: {
        rules: [{ test: /\.css$/, use: ["style-loader", "css-loader"] }],
    },
};
