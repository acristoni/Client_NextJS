import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://client-shaw-and-partners.vercel.app/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
