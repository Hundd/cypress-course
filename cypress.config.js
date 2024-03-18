import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    env: {
      MY_ENV_VARIABLE: "hello",
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
