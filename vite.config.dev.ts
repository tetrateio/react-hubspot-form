// Copyright (c) Tetrate, Inc 2023 All Rights Reserved.
import { defineConfig, mergeConfig } from "vite";
import baseConfig from "./vite.config.base";

const devConfig = defineConfig({
  root: "dev",
});

export default mergeConfig(baseConfig, devConfig);
