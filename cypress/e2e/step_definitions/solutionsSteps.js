import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import solutionsPage from "../pages/SolutionsPage";

// TC-013 Verify search functionality on the “All Solutions” page on Telnyx
When('I enter {string} into the search field and press Enter', (keyword) => {
  solutionsPage.enterKeyword(keyword);
});

Then('all visible solution titles should contain {string}', (keyword) => {
  solutionsPage.verifyResultsContainKeyword(keyword);
});