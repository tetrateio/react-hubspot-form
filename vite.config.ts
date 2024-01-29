import { resolve } from "path";
import { defineConfig, mergeConfig } from "vite";
import baseConfig from "./vite.config.base";

const prodConfig = defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.jsx"),
      name: "react-hubspot-form",
      fileName: "react-hubspot-form",
    },
  },
});

export default mergeConfig(baseConfig, prodConfig);
