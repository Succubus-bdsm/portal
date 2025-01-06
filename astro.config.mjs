import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import purgecss from "astro-purgecss";

// https://astro.build/config
export default defineConfig({
  site: "https://www.succubus-bdsm.com",
  integrations: [
    sitemap({
      filter: (page) =>
        page !== "https://www.succubus-bdsm.com/terminos-de-servicio/",
    }),
    purgecss(),
  ],
});
