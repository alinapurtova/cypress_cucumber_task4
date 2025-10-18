import { Then } from "@badeball/cypress-cucumber-preprocessor";
import contactUsPage from "../pages/ContactUsPage";

Then('I should see the "Talk to an Expert" form with the following fields:',
  (dataTable) => {
    contactUsPage.verifyFormVisible();
    const fields = dataTable.raw().flat();
    contactUsPage.verifyRequiredFields(fields);
  });