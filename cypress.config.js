const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    defaultCommandTimeout: 15000,
    experimentalStudio: true,
    experimentalWebKitSupport: true,
    //viewportHeight: 960,
    //viewportWidth: 432,

    setupNodeEvents(on, config) {},
  },
});
