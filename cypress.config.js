const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com/v1/index.html",
    setupNodeEvents(on, config) {
      on('file:preprocessor',cucumber())
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/cucumber/feature/*.feature"
  },
});
