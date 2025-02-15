


const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    pageLoadTimeout: 180000, // Increase timeout to 120 seconds
    defaultCommandTimeout: 14000, // Increase command timeout
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
  },
});




/*const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
*/