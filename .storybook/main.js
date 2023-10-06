const { mergeConfig } = require("vite");
// const replace = require("@rollup/plugin-replace");

module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  async viteFinal(config, options) {
    // Add your configuration here
    return mergeConfig(config, {
      define: {
        global: "window",
      },
    });
  },
};
