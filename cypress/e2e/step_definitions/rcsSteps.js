import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import rcsPage from "../pages/RcsPage";

// TC-014 Verify FAQ section functionality on the RCS page
Then("I should see the FAQ block visible on the page", () => {
  rcsPage.verifyFaqBlockVisible();
});

When("I click on each available FAQ question", () => {
  rcsPage.clickAllFaqQuestionsAndVerifyAnswers();
});

Then("I should see each corresponding FAQ answer become visible below its question", () => {
  rcsPage.verifyFaqQuestionsVisible();
});