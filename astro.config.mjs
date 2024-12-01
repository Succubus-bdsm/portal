import { defineConfig } from "astro/config";
import alpinejs from "@astrojs/alpinejs";
import sitemap from "@astrojs/sitemap";

import purgecss from "astro-purgecss";

// https://astro.build/config
export default defineConfig({
  site: "https://www.succubus-bdsm.com",
  integrations: [
    alpinejs(),
    sitemap({
      filter: (page) =>
        page !== "https://www.succubus-bdsm.com/terminos-de-servicio/",
    }),
    purgecss(),
  ],
});
