import { defineConfig } from "astro/config";
import alpinejs from "@astrojs/alpinejs";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.succubus-bdsm.com",
  integrations: [alpinejs(), sitemap()],
});

