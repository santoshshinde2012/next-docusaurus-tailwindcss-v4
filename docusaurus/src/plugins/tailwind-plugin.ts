import type { Plugin, PostCssOptions } from "@docusaurus/types";

const tailwindPlugin: Plugin = () => ({
  name: "tailwind-plugin",
  configurePostCss(postcssOptions: PostCssOptions) {
    postcssOptions.plugins = [require("@tailwindcss/postcss")];
    return postcssOptions;
  },
});

export default tailwindPlugin;
