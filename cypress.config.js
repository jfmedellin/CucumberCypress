const cucumber = require('cypress-cucumber-preprocessor').default;

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    watchForFileChanges:false,
    chromeWebSecurity: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    defaultCommandTimeout: 20000,
    execTimeout: 100000,
    taskTimeout: 90000,
    baseUrl: "https://opensource-demo.orangehrmlive.com/"
  },
  
});
