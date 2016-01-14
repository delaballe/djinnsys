module.exports = {
    context: __dirname + "/browser/src",
    entry: "./index.js",
    output: {
      path: __dirname + "/browser/public",
      filename: "index.js"
    },
    module: {
    loaders: [
        { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
        },
    DevServer: {
            stats: { colors: true }
    }
}

