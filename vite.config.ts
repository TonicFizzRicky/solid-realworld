import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import eslint from "vite-plugin-eslint";
import {resolve} from 'path'

export default defineConfig({
  plugins: [
    solid(),
    eslint({
      failOnError: false,
      failOnWarning: false,
    }),
  ],
  server: {
    port: 5000,
  },
  build: {
    target: "esnext",
  },
  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname,"./src") }],
  },
});
