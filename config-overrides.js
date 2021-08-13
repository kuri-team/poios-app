const reactAppRewirePostcss = require("react-app-rewire-postcss");
const postcssCustomMedia = require("postcss-custom-media");

module.exports = config =>
  reactAppRewirePostcss(config, {
    plugins: () => [
      postcssCustomMedia({
        importFrom: "src/styles/global.module.css",
      }),
    ],
  });
