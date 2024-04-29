import { defineConfig } from "cypress";
export default defineConfig({
  projectId: "j6hwhz",

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "react",
    },
  },

  viewportWidth: 1500,
  viewportHeight: 1200,
  watchForFileChanges: false,
  reporter: "cypress-mochawesome-reporter",

  env: {
    hideXhr: true,
    amazon: "https://www.amazon.de",
    google: "https://www.google.com",
    saucedemo: "https://www.saucedemo.com",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
