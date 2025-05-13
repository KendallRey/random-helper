// @ts-check
import { defineConfig } from "astro/config";
import { paraglideVitePlugin } from "@inlang/paraglide-js";

import react from "@astrojs/react";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [
      paraglideVitePlugin({
        project: "./project.inlang",
        outdir: "./src/paraglide",
      }),
    ],
  },
  output: "server",
  adapter: netlify(),
});
