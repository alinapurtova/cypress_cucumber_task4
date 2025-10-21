const { defineConfig } = require("cypress");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const esbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const { merge } = require("mochawesome-merge");
const marge = require("mochawesome-report-generator");

module.exports = defineConfig({
  e2e: {
    projectId: "pwixkc",
    baseUrl: "https://telnyx.com",
    defaultCommandTimeout: 8000,
    pageLoadTimeout: 60000,
    specPattern: "cypress/e2e/features/**/*.feature",
    viewportWidth: 1920,
    viewportHeight: 1080,
    stepDefinitions: "cypress/e2e/step_definitions/**/*.{js,ts}",
    video: false,
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports/json-large",
      overwrite: false,
      html: false,
      charts: true,
      reportPageTitle: "Cypress Report (Large Screen)",
      embeddedScreenshots: true,
      inlineAssets: true,
    },
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      const preprocessor = esbuildPlugin.default || esbuildPlugin;

      on("file:preprocessor", createBundler({
        plugins: [preprocessor(config)],
      }));

      on("after:run", async () => {
        try {
          const jsonReport = await merge({ files: ["cypress/reports/json-large/*.json"] });
          await marge.create(jsonReport, { 
            reportDir: "cypress/reports/html-large", 
            inlineAssets: true 
          });
          console.log("Mochawesome HTML report created in cypress/reports/html-large");
        } catch (err) {
          console.error("Error generating mochawesome report:", err);
        }
      });

      return config;
    },
  },
});