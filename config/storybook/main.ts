import BaseConfig from "../webpack.config.base";
import { resolve } from "path";

module.exports = {
  stories: ["../../**/*.stories.tsx"],
  addons: [
    "@storybook/addon-options/register",
    "@storybook/addon-a11y/register",
  ],
  webpackFinal: (base: any) => {
    base.context = resolve(__dirname, "..", "..");
    base.mode = "development";
    base.module.rules.push(...BaseConfig.module!.rules);
    base.resolve.extensions.push(...BaseConfig.resolve!.extensions!);
    base.resolve.alias = {
      ...BaseConfig.resolve!.alias,
    };
    return base;
  },
};
