const { defineConfig } = require("cypress");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const esbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  e2e: {
    projectId: "pwixkc",
    baseUrl: "https://telnyx.com",
    specPattern: "cypress/e2e/features/**/*.feature",
    viewportWidth: 1280,
    viewportHeight: 800,
    stepDefinitions: "cypress/e2e/step_definitions/**/*.{js,ts}",
    video: false,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'reports',
      overwrite: false,
      html: true,
      charts: true,
      reportPageTitle: 'Cypress Report',
      embeddedScreenshots: true,
      inlineAssets: true,
    },
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      const preprocessor = esbuildPlugin.default || esbuildPlugin;
      on("file:preprocessor", createBundler({
        plugins: [preprocessor(config)],
      })
      );

      on("after:run", async (results) => {
        try {
          const jsonReport = await merge({
            files: ["reports/*.json"],
          });

          await marge.create(jsonReport, {
            reportDir: "reports",
            inlineAssets: true,
          });

          console.log("Mochawesome report created successfully!");
        } catch (err) {
          console.error("Error generating mochawesome report:", err);
        }
      });

      return config;
    },
  },
});