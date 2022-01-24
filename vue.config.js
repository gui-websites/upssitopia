module.exports = {
    configureWebpack: {
      module: {
        rules: [
          {
            test: /\.md$/i,
            loader: "raw-loader",
          },
          {
            test: /\.yaml$/i,
            loader: "js-yaml-loader",
          },
        ],
      },
    },
  };
  