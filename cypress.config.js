const { defineConfig } = require("cypress");
// promisified fs module
const fs = require("fs-extra");
const path = require("path");

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve("cypress\\config", `${file}.json`);

  if (!fs.existsSync(pathToConfigFile)) {
    console.log("No custom config file found");
    return {};
  }

  return fs.readJson(pathToConfigFile);
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // accept a configFile value or use development by default
      const file = config.env.configFile || "";
      return getConfigurationByFile(file);
    },

    defaultCommandTimeout: 6000,
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    baseUrl: "https://www.webdriveruniversity.com",
    chromeWebSecurity: false,
    pageLoadTimeout: 12000,
    excludeSpecPattern: "cypress/e2e/other/*.{js,jsx,ts,tsx,feature}",
    chromeWebSecurity: false,
    screenshotOnRunFailure: true,
    //screenshotsFolder:,
    trashAssetsBeforeRuns: true,
    videoCompression: 10, //lower the value better the quality of video
    video: true,
    viewportHeight: 2080,
    viewportWidth: 2920,
    reporter: "cypress-multi-reporters",
    reporterOptions: {
      configFile: "reporter-config.json",
    },
    retries: {
      // Configure retry attempts for `cypress run`
      // Default is 0
      runMode: 2,
      // Configure retry attempts for `cypress open`
      // Default is 0
      openMode: 0,
    },
    //experimentalSessionAndOrigin : true
    env: {
      firstname: "prajwal",
      webdriveruni_homepage: "https://www.webdriveruniversity.com/",
      autostore_homepage: "https://automationteststore.com/",
    },
  },
});
