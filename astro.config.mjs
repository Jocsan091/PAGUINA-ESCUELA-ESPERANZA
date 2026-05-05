// @ts-check
import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  trailingSlash: "ignore",
  adapter: cloudflare()
});