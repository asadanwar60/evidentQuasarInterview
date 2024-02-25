const { defineConfig } = require("cypress");
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    auth_email: "test@test.com",
    auth_password: "Testing@123",
    auth_name: "Test Test",
    baseUrl: "http://localhost:9000",
  },
});
